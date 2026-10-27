export const groups = [
  [
    "negocio",
    "01",
    "Seu negócio",
    "Vamos entender quem você é e o que oferece.",
    [
      [
        "empresa",
        "Nome da empresa ou do projeto",
        "text",
        true,
        "Como o nome deve aparecer no site?"
      ],
      [
        "responsavel",
        "Seu nome e sua função",
        "text",
        true,
        "Quem acompanha e aprova o projeto?"
      ],
      [
        "contato",
        "WhatsApp ou e-mail para conversarmos",
        "text",
        true,
        "Contato comercial de quem está preenchendo."
      ],
      [
        "descricao",
        "O que sua empresa faz?",
        "textarea",
        true,
        "Explique em poucas frases. Inclua os principais produtos ou serviços."
      ],
      [
        "publico",
        "Quem você quer atender?",
        "textarea",
        true,
        "Perfil do cliente, cidade ou região, necessidades e o que ele procura."
      ],
      [
        "diferenciais",
        "Por que um cliente escolheria você?",
        "textarea",
        false,
        "Diferenciais reais: atendimento, experiência, processo, especialização."
      ],
      [
        "area",
        "Onde e como você atende?",
        "textarea",
        false,
        "Cidade, bairros, atendimento presencial, em domicílio ou online."
      ]
    ]
  ],
  [
    "objetivo",
    "02",
    "Objetivo e tamanho",
    "Defina o que o visitante deve conseguir fazer.",
    [
      [
        "objetivo",
        "Qual é o principal resultado que você espera do site?",
        "select",
        true,
        [
          "Receber contatos no WhatsApp",
          "Apresentar a empresa",
          "Mostrar portfólio ou trabalhos",
          "Divulgar catálogo ou cardápio",
          "Receber pedidos de orçamento",
          "Vender ou receber pagamentos online",
          "Outro / preciso de orientação"
        ]
      ],
      [
        "acao",
        "Qual será a ação principal do visitante?",
        "text",
        true,
        "Ex.: pedir orçamento pelo WhatsApp ou conhecer os serviços."
      ],
      [
        "formato",
        "Você imagina uma página ou várias páginas?",
        "select",
        true,
        [
          "Uma página com seções",
          "Várias páginas separadas",
          "Ainda não sei — quero uma sugestão"
        ]
      ],
      [
        "secoes",
        "O que precisa aparecer?",
        "checks",
        false,
        [
          "Apresentação inicial",
          "Sobre a empresa",
          "Serviços",
          "Produtos ou cardápio",
          "Galeria ou portfólio",
          "Depoimentos reais",
          "Perguntas frequentes",
          "Equipe",
          "Contato e localização",
          "Preços ou planos",
          "Blog ou notícias"
        ]
      ],
      [
        "jornada",
        "Conte como funciona o atendimento hoje",
        "textarea",
        false,
        "Da chegada do cliente até fechar o serviço. O que o site deve facilitar?"
      ],
      [
        "idiomas",
        "Em quais idiomas o site será apresentado?",
        "text",
        false,
        "Ex.: português. Se precisar de outros, indique quais."
      ]
    ]
  ],
  [
    "conteudo",
    "03",
    "Conteúdo e materiais",
    "O site precisa de informações reais e materiais que possamos usar.",
    [
      [
        "servicos",
        "Liste seus serviços ou produtos principais",
        "textarea",
        true,
        "Para cada um: nome, descrição, benefícios e preço, caso queira divulgar. Pode informar que enviará uma lista."
      ],
      [
        "textos",
        "Os textos já estão prontos?",
        "select",
        true,
        [
          "Sim, vou enviar",
          "Tenho parte dos textos",
          "Preciso de ajuda para escrever com base nas minhas informações"
        ]
      ],
      [
        "historia",
        "O que podemos contar sobre a empresa?",
        "textarea",
        false,
        "História, proposta, experiência e informações verificáveis."
      ],
      [
        "marca",
        "Você já possui logo e identidade visual?",
        "select",
        true,
        [
          "Sim, tenho logo e cores",
          "Tenho apenas a logo",
          "Ainda não tenho",
          "Quero revisar minha identidade"
        ]
      ],
      [
        "midia",
        "Quais imagens e vídeos você tem?",
        "textarea",
        false,
        "Fotos próprias, produtos, equipe, ambiente, antes e depois, vídeos. Indique o que falta."
      ],
      [
        "materiais",
        "Link dos materiais do projeto",
        "text",
        false,
        "Pasta compartilhada opcional. Libere apenas os arquivos necessários, sem documentos pessoais ou senhas."
      ],
      [
        "direitos",
        "Sobre a autorização de uso dos materiais",
        "select",
        true,
        [
          "Tenho autorização para os materiais que vou enviar",
          "Preciso verificar autorizações antes da publicação",
          "Ainda não tenho materiais"
        ]
      ],
      [
        "provas",
        "Tem depoimentos, certificações ou resultados que podemos publicar?",
        "textarea",
        false,
        "Envie somente informações reais e autorizadas. Não precisamos inventar números ou avaliações."
      ],
      [
        "faltantes",
        "Quais materiais serão enviados depois e quando?",
        "textarea",
        false,
        "Ex.: logo até sexta e fotos dos trabalhos na próxima semana."
      ]
    ]
  ],
  [
    "visual",
    "04",
    "Estilo e referências",
    "Seu gosto ajuda a criar uma direção visual clara.",
    [
      [
        "estilo",
        "Como você quer que sua marca seja percebida?",
        "checks",
        false,
        [
          "Moderna",
          "Acolhedora",
          "Sofisticada",
          "Simples e direta",
          "Criativa",
          "Tradicional",
          "Técnica e profissional",
          "Divertida"
        ]
      ],
      [
        "cores",
        "Quais cores devemos usar ou evitar?",
        "textarea",
        false,
        "Se tiver manual da marca ou códigos de cores, indique."
      ],
      [
        "referencias",
        "Quais sites você gosta?",
        "textarea",
        false,
        "Cole até 3 links e explique o que gosta: organização, fotos, cores, letras ou navegação."
      ],
      [
        "evitar",
        "O que você não quer no site?",
        "textarea",
        false,
        "Estilos, elementos ou exemplos de que você não gosta."
      ],
      [
        "preferencia",
        "Gostou de algum exemplo da Conecta Mais?",
        "select",
        false,
        [
          "AutoPrime",
          "VivaBem",
          "Conecta Mais",
          "Nenhum deles / quero outro estilo",
          "Quero uma recomendação"
        ]
      ]
    ]
  ],
  [
    "recursos",
    "05",
    "Funcionalidades e contato",
    "Separe o essencial do que pode ficar para uma próxima fase.",
    [
      [
        "funcionalidades",
        "Quais recursos você imagina?",
        "checks",
        false,
        [
          "Botão de WhatsApp",
          "Links de redes sociais",
          "Mapa ou rota",
          "Galeria de fotos",
          "Vídeos incorporados",
          "Catálogo sem compra online",
          "Formulário que envia mensagens",
          "Agendamento real com horários",
          "Pagamento online",
          "Login ou área de cliente",
          "Blog com editor de conteúdo",
          "Integração com sistema existente"
        ]
      ],
      [
        "prioridades",
        "O que é indispensável no lançamento?",
        "textarea",
        true,
        "Liste até 3 prioridades e diga o que pode ser feito depois."
      ],
      [
        "whatsapp",
        "Qual WhatsApp comercial deve aparecer no site?",
        "text",
        false,
        "Inclua DDD e código do país. Informe também uma mensagem inicial, se desejar."
      ],
      [
        "publico_contato",
        "Quais outros contatos podem ser publicados?",
        "textarea",
        false,
        "E-mail comercial, Instagram e outras redes. Separe do contato pessoal usado para conversar conosco."
      ],
      [
        "endereco",
        "Qual endereço e horário podem aparecer no site?",
        "textarea",
        false,
        "Endereço completo, horário e link do mapa, se fizer sentido. Se não atende em local físico, informe."
      ],
      [
        "envios",
        "Se houver formulário, quem deve receber as mensagens?",
        "textarea",
        false,
        "Destino comercial e campos necessários. Não coloque dados reais de clientes aqui."
      ],
      [
        "integracoes",
        "Já usa algum sistema que precisa conectar?",
        "textarea",
        false,
        "Nome e link do serviço de agenda, pagamentos, catálogo, CRM ou outros. Não envie credenciais."
      ],
      [
        "dados",
        "O site precisará coletar quais informações dos visitantes?",
        "textarea",
        false,
        "Ex.: nome e contato para orçamento. Se precisar de informações sensíveis, descreva apenas a necessidade, sem dados reais."
      ],
      [
        "politicas",
        "Já possui textos de privacidade, termos ou orientações do seu setor?",
        "textarea",
        false,
        "Informe os documentos disponíveis e quem revisará o conteúdo antes da publicação."
      ]
    ]
  ],
  [
    "publicacao",
    "06",
    "Publicação e manutenção",
    "Escolha como o site começa e quem cuida dele depois.",
    [
      [
        "dominio",
        "Já possui um domínio próprio?",
        "select",
        true,
        [
          "Não, quero começar com endereço gratuito",
          "Não, mas quero comprar um domínio",
          "Sim, já tenho domínio",
          "Preciso de orientação"
        ]
      ],
      [
        "dominio_nome",
        "Se já possui domínio ou site, qual é o endereço?",
        "text",
        false,
        "Ex.: suaempresa.com.br. Informe se vamos substituir um site existente."
      ],
      [
        "hospedagem",
        "Já tem hospedagem ou contas relacionadas ao site?",
        "textarea",
        false,
        "Informe somente os nomes dos serviços e quem administra. O acesso será combinado por um canal apropriado."
      ],
      [
        "seo",
        "Como seus clientes procuram seu serviço?",
        "textarea",
        false,
        "Serviço + cidade, nomes de produtos ou outras buscas. Não prometemos posição nos buscadores."
      ],
      [
        "medicao",
        "Quer acompanhar visitas ou campanhas?",
        "textarea",
        false,
        "Ex.: saber quais páginas recebem visitas ou de onde chegam os contatos. Se já usa alguma ferramenta, informe o nome."
      ],
      [
        "manutencao",
        "Quem vai atualizar o site depois?",
        "select",
        true,
        [
          "Quero contratar atualizações com a Conecta Mais",
          "Quero poder editar conteúdo por conta própria",
          "Será atualizado por outra pessoa",
          "Ainda não defini"
        ]
      ],
      [
        "frequencia",
        "O que costuma mudar e com qual frequência?",
        "textarea",
        false,
        "Preços, produtos, fotos, horários ou notícias; diariamente, mensalmente ou raramente."
      ]
    ]
  ],
  [
    "combinados",
    "07",
    "Prazo e próximos passos",
    "Essas respostas ajudam a propor um escopo possível.",
    [
      [
        "prazo",
        "Existe uma data desejada para publicar?",
        "text",
        true,
        "Informe a data, o motivo e se há flexibilidade. Se não houver prazo, escreva “sem data definida”."
      ],
      [
        "orcamento",
        "Qual faixa de investimento você reservou?",
        "text",
        false,
        "Pode informar uma faixa ou dizer que precisa de uma proposta. Inclua se há orçamento para manutenção ou serviços extras."
      ],
      [
        "aprovacao",
        "Quem dará a aprovação final?",
        "text",
        true,
        "Nome ou função e se outras pessoas participam da decisão."
      ],
      [
        "restricoes",
        "Há alguma restrição ou cuidado importante?",
        "textarea",
        false,
        "Regras da marca, acessibilidade, público específico ou exigências do seu setor."
      ],
      [
        "observacoes",
        "O que ainda não perguntamos e precisamos saber?",
        "textarea",
        false,
        "Ideias, dúvidas e observações adicionais."
      ]
    ]
  ]
];
