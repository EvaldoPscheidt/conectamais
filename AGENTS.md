# Fluxo autorizado pelo proprietário

Este repositório é o histórico de código dos três sites. O proprietário solicitou que as atualizações feitas com o assistente sejam guardadas no GitHub.

- Sincronize o repositório antes de editar e preserve mudanças existentes.
- Para cada alteração de site concluída, verifique o comportamento afetado, crie um commit descritivo e envie ao origin. Não force o histórico.
- A publicação é direta no Cloudflare Pages, projeto conecta-mais, branch de produção main. O GitHub Pages deve continuar desativado.
- Publique a mesma versão salva no GitHub quando houver uma alteração de site autorizada. Não confunda push com publicação automática: não existe integração de build Git no Cloudflare neste projeto.
- A pasta pública deve conter apenas index.html e os recursos necessários de autoprime/, vivabem/, briefing/ e painel/. Nunca publique a raiz do diretório de negócios do usuário, notas, senhas, tokens, .git, dependências ou arquivos de autenticação.
- Mantenha os avisos de demonstração fixos no cabeçalho das duas demonstrações.
- As cópias locais solicitadas pelo usuário ficam em C:/Users/Junior/Desktop/Negocios/Conecta+/Sites. Respeite as permissões do ambiente ao atualizá-las.

- Briefings são armazenados no D1 conecta-mais-briefings, binding DB. Nunca salvar respostas no GitHub, na pasta pública ou em logs.
- Publicar Functions a partir deste checkout, usando wrangler.json, sem copiar functions/, lib/ ou database/ para o diretório estático.
- Painel exige senha exclusiva (hash e segredo de sessão só no Cloudflare). Preservar autenticação, cookies seguros e validação do servidor. Não reconfigurar credenciais sem autorização.
