# Conecta Mais — sites e demonstrações

Código-fonte dos sites da Conecta Mais, com histórico de alterações no GitHub e publicação direta no Cloudflare Pages.

## Sites publicados

- [Conecta Mais](https://conecta-mais.pages.dev/) — apresentação dos serviços e portfólio.
- [AutoPrime](https://conecta-mais.pages.dev/autoprime/) — demonstração de estética automotiva.
- [VivaBem](https://conecta-mais.pages.dev/vivabem/) — demonstração de clínica.

AutoPrime e VivaBem são marcas fictícias de portfólio. Seus formulários apenas simulam solicitações; não enviam dados nem confirmam agendamentos. As fotografias das demonstrações foram geradas com IA.

- [Briefing do cliente](https://conecta-mais.pages.dev/briefing/) — questionário com exportação das respostas em TXT; sem envio automático.

## Tecnologias e estrutura

HTML, CSS, JavaScript e ícones SVG, sem etapa de compilação.

- `index.html`: página principal.
- `autoprime/`: página e imagens da AutoPrime.
- `vivabem/`: página e imagens da VivaBem.
- `briefing/`: questionário do projeto; rascunho local opcional, cópia e download de respostas.

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
