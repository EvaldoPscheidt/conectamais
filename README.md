# Conecta Mais — sites e demonstrações

Código-fonte dos sites da Conecta Mais, com histórico de alterações no GitHub e publicação direta no Cloudflare Pages.

## Sites publicados

- [Conecta Mais](https://conecta-mais.pages.dev/) — apresentação dos serviços e portfólio.
- [AutoPrime](https://conecta-mais.pages.dev/autoprime/) — demonstração de estética automotiva.
- [VivaBem](https://conecta-mais.pages.dev/vivabem/) — demonstração de clínica.

AutoPrime e VivaBem são marcas fictícias de portfólio. Seus formulários apenas simulam solicitações; não enviam dados nem confirmam agendamentos. As fotografias das demonstrações foram geradas com IA.

- [Briefing do cliente](https://conecta-mais.pages.dev/briefing/) — questionário com envio ao banco D1 e cópia das respostas em TXT.

## Tecnologias e estrutura

HTML, CSS, JavaScript e ícones SVG. A API de briefings usa Cloudflare Pages Functions e D1.

- `index.html`: página principal.
- `autoprime/`: página e imagens da AutoPrime.
- `vivabem/`: página e imagens da VivaBem.
- `briefing/`: questionário com envio, rascunho local opcional e exportação.
- `painel/`: área administrativa para listar, consultar e baixar briefings.
- `functions/api/`: recebimento e autenticação do painel.
- `lib/briefing-schema.js`: perguntas e validações compartilhadas no servidor.
- `database/schema.sql`: estrutura do banco; não contém respostas.
- `wrangler.json`: configuração do projeto e vínculo com D1; não contém senhas.

O repositório também conserva arquivos antigos; a publicação deve usar somente os arquivos efetivamente necessários ao site atual.

## Histórico e publicação

1. Sincronizar este repositório antes de editar.
2. Alterar o código e verificar os sites afetados.
3. Salvar cada atualização concluída em um commit com mensagem descritiva e enviar ao GitHub.
4. Publicar a mesma versão dos arquivos no projeto `conecta-mais` do Cloudflare Pages.
5. Conferir o resultado publicado.

O GitHub guarda o código e seu histórico. Um envio ao GitHub, sozinho, não publica no Cloudflare: o projeto utiliza Direct Upload pelo Wrangler. O GitHub Pages está desativado e deve permanecer assim.

Credenciais, senhas, tokens e notas pessoais nunca devem ser incluídos no repositório ou na pasta de publicação.

## Desenvolvimento

Projetos desenvolvidos por Evaldo Pscheidt com assistência de IA (Codex) para implementação, revisão e criação de imagens.

## Briefings recebidos

Painel: https://conecta-mais.pages.dev/painel/

O acesso usa senha exclusiva, verificada por hash no servidor, e cookie de sessão com duração de 8 horas. As respostas ficam no D1, não no GitHub nem nos arquivos estáticos. O painel permite baixar um TXT por projeto. O formulário só confirma recebimento após resposta do servidor e exige confirmação do cliente.

Os segredos ADMIN_PASSWORD_HASH e SESSION_SECRET são configurados no Cloudflare. Nunca incluí-los no código, no Git ou no diretório público. Há limites de tentativas de login e envio. Não adicionar dados reais de clientes aos testes.

Para publicar, preparar somente os arquivos públicos de index.html, autoprime/, vivabem/, briefing/ e painel/ em ../cloudflare-public e executar Wrangler a partir deste checkout, que contém functions/ e wrangler.json. Aplicar database/schema.sql somente na criação ou alteração do esquema. Fazer cópias protegidas das respostas antes de alterações no banco.

## Alvor Barbearia

[Ver demonstração](https://conecta-mais.pages.dev/alvor/) — marca fictícia, imagem gerada por IA, formulário local sem envio ou persistência. O portfólio principal usa carrossel manual com setas, teclado e rolagem por toque.

## Forno & Fatia

Demonstração fictícia de pizzaria em https://conecta-mais.pages.dev/forno-e-fatia/ com três imagens geradas por IA, filtro de cardápio, tamanhos e sacola em memória. Não envia pedidos, não persiste dados e não processa pagamentos.
