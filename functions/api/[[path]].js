import { groups } from '../../lib/briefing-schema.js';
const encoder = new TextEncoder();
const baseHeaders = {'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin'};
const json=(data,status=200,extra={})=>new Response(JSON.stringify(data),{status,headers:{...baseHeaders,'Content-Type':'application/json; charset=utf-8',...extra}});
const hex=b=>Array.from(new Uint8Array(b),n=>n.toString(16).padStart(2,'0')).join('');
async function hash(s){return hex(await crypto.subtle.digest('SHA-256',encoder.encode(s)))}
async function signature(text,secret){const key=await crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(await crypto.subtle.sign('HMAC',key,encoder.encode(text)))}
function same(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0}
async function authenticated(request,env){const token=(request.headers.get('Cookie')||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('__Host-cm_session='))?.slice(18);if(!token||!env.SESSION_SECRET)return false;const [expiry,nonce,sig,...rest]=token.split('.');if(rest.length||!expiry||!nonce||!sig||Number(expiry)<Date.now()||Number(expiry)>Date.now()+9*3600000)return false;return same(sig,await signature(expiry+'.'+nonce,env.SESSION_SECRET))}
async function limited(request,env,kind,max){const now=Math.floor(Date.now()/1000),bucket=Math.floor(now/900);const ip=request.headers.get('CF-Connecting-IP')||'unknown';const key=kind+':'+await hash(ip+':'+bucket+':'+env.SESSION_SECRET);const row=await env.DB.prepare('INSERT INTO rate_limits (key,count,expires) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(key,now+1800).first();return row.count>max}
async function body(request){if(Number(request.headers.get('Content-Length')||0)>150000)throw Error('size');const text=await request.text();if(text.length>150000)throw Error('size');return JSON.parse(text)}
function summaryOf(values){return ['BRIEFING DE SITE — CONECTA MAIS','Recebido em: '+new Date().toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'}),''].concat(groups.flatMap(g=>[g[1]+' — '+g[2].toUpperCase(),''].concat(g[4].flatMap(f=>[f[1],Array.isArray(values[f[0]])?(values[f[0]].join(', ')||'Não informado'):(values[f[0]]||'Não informado'),''])))).join('\n')}
export async function onRequest({request,env,waitUntil}){
 try{
 const url=new URL(request.url),path=url.pathname.replace(/\/$/,'');
 if(!env.DB||!env.ADMIN_PASSWORD_HASH||!env.SESSION_SECRET)return json({error:'O envio está em manutenção. Suas respostas continuam na tela; baixe o TXT e tente depois.'},503);
 if(request.method!=='GET'&&request.headers.get('Origin')!==url.origin)return json({error:'Origem não autorizada.'},403);
 if(request.method==='POST'&&path==='/api/briefings'){
 const input=await body(request);if(input.website)return json({error:'Não foi possível enviar.'},400);
 if(input.consent!==true)return json({error:'Confirme o envio das informações à Conecta Mais.'},400);
 if(!/^[a-zA-Z0-9-]{16,70}$/.test(input.requestId||''))return json({error:'Identificador inválido. Atualize a página e tente novamente.'},400);
 if(await limited(request,env,'submit',8))return json({error:'Muitas tentativas. Aguarde alguns minutos ou envie o TXT pelo atendimento.'},429);
 const raw=input.answers;if(!raw||typeof raw!=='object'||Array.isArray(raw))return json({error:'Respostas inválidas.'},400);
 const values={};for(const g of groups)for(const f of g[4]){const [id,label,type,required,options]=f;let v=raw[id];if(type==='checks'){if(v!==undefined&&(!Array.isArray(v)||v.length>options.length))return json({error:'Resposta inválida: '+label},400);v=(v||[]).filter(x=>typeof x==='string'&&options.includes(x));v=[...new Set(v)]}else{if(v!==undefined&&typeof v!=='string')return json({error:'Resposta inválida: '+label},400);v=(v||'').trim();if(v.length>(type==='textarea'?6000:1200))return json({error:'Resposta muito longa: '+label},400);if(type==='select'&&v&&!options.includes(v))return json({error:'Opção inválida: '+label},400);if(required&&!v)return json({error:'Falta responder: '+label},400)}values[id]=v}
 if(JSON.stringify(values).length>60000)return json({error:'O briefing está muito longo. Reduza os textos e envie os detalhes como material separado.'},400);
 const id=crypto.randomUUID();await env.DB.prepare('INSERT OR IGNORE INTO briefings (id,company,contact_name,created_at,payload,summary,request_id) VALUES (?,?,?,?,?,?,?)').bind(id,values.empresa,values.responsavel,new Date().toISOString(),JSON.stringify(values),summaryOf(values),input.requestId).run();const record=await env.DB.prepare('SELECT id,created_at FROM briefings WHERE request_id=?').bind(input.requestId).first();waitUntil(env.DB.prepare('DELETE FROM rate_limits WHERE expires < ?').bind(Math.floor(Date.now()/1000)).run());return json({ok:true,id:record.id,receivedAt:record.created_at},201);
 }
 if(request.method==='POST'&&path==='/api/admin/login'){
 if(await limited(request,env,'login',8))return json({error:'Muitas tentativas. Aguarde 15 minutos.'},429);
 const input=await body(request);if(typeof input.password!=='string'||input.password.length>200||!same(await hash(input.password),env.ADMIN_PASSWORD_HASH))return json({error:'Senha incorreta.'},401);
 const token=(Date.now()+8*3600000)+'.'+crypto.randomUUID();const cookie='__Host-cm_session='+token+'.'+await signature(token,env.SESSION_SECRET)+'; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800';return json({ok:true},200,{'Set-Cookie':cookie});
 }
 if(request.method==='POST'&&path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'__Host-cm_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
 if(!path.startsWith('/api/admin/'))return json({error:'Não encontrado.'},404);
 if(!await authenticated(request,env))return json({error:'Entre no painel para continuar.'},401);
 if(request.method==='GET'&&path==='/api/admin/me')return json({ok:true});
 if(request.method==='GET'&&path==='/api/admin/briefings'){
 const page=Math.max(0,Math.min(100000,Number(url.searchParams.get('page'))||0));const {results}=await env.DB.prepare('SELECT id,company,contact_name,created_at FROM briefings ORDER BY created_at DESC,id DESC LIMIT 21 OFFSET ?').bind(page*20).all();return json({items:results.slice(0,20),hasMore:results.length>20,page});
 }
 const match=path.match(/^\/api\/admin\/briefings\/([a-f0-9-]{36})$/);if(request.method==='GET'&&match){const item=await env.DB.prepare('SELECT id,company,contact_name,created_at,summary FROM briefings WHERE id=?').bind(match[1]).first();return item?json(item):json({error:'Briefing não encontrado.'},404)}
 return json({error:'Não encontrado.'},404);
 }catch(e){console.error('briefing_api_error',e instanceof SyntaxError?'invalid_json':'request_failed');return json({error:e instanceof SyntaxError?'Dados inválidos.':'Não foi possível concluir. Suas respostas continuam na tela; tente novamente ou baixe o TXT.'},e instanceof SyntaxError?400:500)}
}
