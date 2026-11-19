export const supportUrl = "https://suporte.soat.solutions/";
export const nomidUrl = "https://portal.nomid.tech/";
const documentFiles = {"libfile_fb2376debd9481918edd053809c027a5": "catalogo-imersoes.pdf", "libfile_3a7549748ef0819193c4e237973c6136": "nomid-tutorial.pdf", "libfile_114d666e58408191b6378c88e43d6b37": "soatvr-2026.pdf"};
const libraryFile = id => id === "libfile_fb2376debd9481918edd053809c027a5" ? "https://github.com/sisttech-games/soatvr-help/releases/download/v1.0.0/catalogo-imersoes.pdf" : "./documentos/" + documentFiles[id];
const trainingUrl = "https://drive.google.com/drive/folders/1BzBtiePnnogNPxMjgNBhjZNXqp5QOUxL";
export const documents = [
  {id:"cat-pdf", title:"Catálogo de Imersões", summary:"Fichas originais por ano e série, com objetivos e interações do livro-guia.", url:libraryFile("libfile_fb2376debd9481918edd053809c027a5")},
  {id:"mdm-pdf", title:"MDM Nomid · Tutorial", summary:"Manual visual do gerenciamento dos dispositivos e do Modo Aula.", url:libraryFile("libfile_3a7549748ef0819193c4e237973c6136")},
  {id:"soat-pdf", title:"SOATVR 2026", summary:"Apresentação da solução educacional, equipamentos e materiais didáticos.", url:libraryFile("libfile_114d666e58408191b6378c88e43d6b37")},
  {id:"formacao", title:"Materiais de formação SOATVR", summary:"Pasta de formação para equipes e professores no Google Drive.", url:trainingUrl, type:"Link"},
  {id:"linktree", title:"Links oficiais do SOATVR", summary:"Acesse o Linktree do projeto.", url:"https://linktr.ee/soatvr", type:"Link"}
];

export const articles = [
  {
    id:"inicio", title:"Primeiros passos com o SOATVR", icon:"spark",
    summary:"Confira a estação, conecte e atualize os óculos, ative o MDM e faça a primeira aula.",
    steps:[
      "Confira a estação e a carga dos óculos e controles. Verifique se o número da estação corresponde à identificação dos headsets e teste se todos os óculos ligam e funcionam.",
      "Conecte o cabo de rede à estação. Se a escola não tiver um ponto de rede disponível, conecte os óculos à melhor rede Wi-Fi disponível.",
      "No rodapé do menu principal dos óculos, confira o sinal de Wi-Fi e confirme que a rede tem acesso à internet. Mantenha os óculos ligados, conectados e fora do standby enquanto os aplicativos atualizam.",
      "Envie ao suporte oficial o e-mail da escola ou um e-mail de gestão institucional, junto com o nome da escola e o número da estação. A equipe usa esses dados para criar o perfil da escola no MDM Nomid.",
      "Depois que o suporte criar o perfil, siga o e-mail de ativação para definir a senha. Entre no Portal Nomid com o e-mail institucional cadastrado e teste o Modo Aula.",
      "Nos óculos, abra o aplicativo Primeiros Passos · Tutorial e pratique os controles básicos.",
      "Depois de concluir o tutorial, explore as outras aplicações e use o catálogo para escolher uma imersão."
    ],
    links:[{url:supportUrl,label:"Solicitar conta ao suporte"},{url:nomidUrl,label:"Abrir Portal Nomid"},{url:"#imersoes",label:"Consultar catálogo"}],
    related:[{id:"wifi",label:"Conectar e atualizar os óculos"},{id:"mdm-conta",label:"Como ativar a conta do MDM"},{id:"mdm-aula",label:"Como testar o Modo Aula"}]
  },
  {
    id:"mdm-conta", title:"Solicitar e ativar a conta no MDM Nomid", icon:"station",
    summary:"Envie o e-mail institucional ao suporte para que a equipe crie o perfil da escola.",
    steps:[
      "Abra o suporte oficial e informe o e-mail da escola ou o e-mail de gestão institucional, o nome da escola e o número da estação.",
      "Assim que a equipe criar o perfil, procure o e-mail “Bem-vindo ao Portal da Nomid Tech”. Confira também a pasta de spam ou lixo eletrônico e verifique o remetente.",
      "No e-mail de boas-vindas, selecione “Definir senha”. Na página de recuperação, informe o mesmo e-mail institucional cadastrado e clique em “Enviar”.",
      "Abra o novo e-mail “Redefinir sua senha”. Use o link recebido para cadastrar e confirmar a nova senha.",
      "Acesse o Portal Nomid com o e-mail institucional e a senha que você definiu."
    ],
    links:[{url:supportUrl,label:"Solicitar conta ao suporte"},{url:nomidUrl,label:"Abrir Portal Nomid"}],
    image:{url:"./assets/nomid-senha.webp",alt:"Guia visual de ativação e definição de senha no Portal Nomid"},
    related:[{id:"mdm-aula",label:"Como testar o Modo Aula"}]
  },
  {
    id:"mdm-aula", title:"Usar o Modo Aula no MDM Nomid", icon:"glasses",
    summary:"Teste o gerenciamento remoto dos óculos antes de iniciar a atividade com a turma.",
    steps:[
      "Entre no Portal Nomid com a conta institucional ativada e abra o Modo Aula.",
      "Identifique um headset da estação que esteja ligado e conectado para o primeiro teste.",
      "Use a função “Abrir aplicativo” para enviar o comando a um dispositivo. Confira no headset se o aplicativo abriu.",
      "Quando o teste individual funcionar, use o menu “Ações em Massa” para iniciar a mesma imersão nos dispositivos selecionados.",
      "O manual visual também mostra como fixar um aplicativo, acompanhar os dispositivos por visualização em tempo real e desligar ou reiniciar os óculos à distância."
    ],
    links:[{url:nomidUrl,label:"Abrir Portal Nomid"},{url:documents[1].url,label:"Abrir manual visual do MDM"}],
    related:[{id:"wifi",label:"Conferir atualização e aplicativos pendentes"}]
  },
  { id:"pico", title:"Como preparar o PICO Neo3", icon:"glasses", summary:"Ajuste o headset e confira os controles antes da aula.", steps:["Identifique o headset e o par de controles correspondente antes de distribuir os equipamentos.","Confira a carga do headset e se os controles respondem.","Ajuste a alça para o headset ficar firme e confirme com o usuário se a imagem está nítida.","Siga as orientações de área de uso no headset e teste a imersão antes de entregar o equipamento."], link:"https://business.picoxr.com/global/products/neo3-pro-eye", linkLabel:"Visitar PICO Business" },
  {
    id:"wifi", title:"Conectar à internet e atualizar os óculos", icon:"wifi", page:"conectar-e-atualizar",
    summary:"Conecte a estação ou os óculos, acompanhe os aplicativos no Nomid e prepare o Modo Aula.",
    stepTitles:["Conecte os óculos à rede","Confirme o acesso à internet","Mantenha os óculos ligados","Verifique os aplicativos no Nomid","Confirme o Modo Aula"],
    steps:[
      "Conecte o cabo de rede à estação e confirme que o roteador está ligado e tem acesso à internet. Para usar o Wi-Fi da escola, abra as configurações rápidas dos óculos, entre em WLAN e escolha a rede. Desligue o roteador da estação quando ele não estiver sendo usado para evitar uma conexão automática à rede local sem internet.",
      "Confira a rede e o sinal de Wi-Fi no rodapé do menu dos óculos. Mesmo com “Sinal excelente”, teste o acesso à internet em um celular ou computador na mesma rede. Se o Nomid não sincronizar, confira se a rede exige login em uma página de autenticação.",
      "Mantenha os óculos ligados e conectados enquanto o MDM e os aplicativos sincronizam. Movimente os óculos ou interaja com eles para evitar o standby e o desligamento por inatividade.",
      "No Portal Nomid, localize a política da estação, abra a lista de dispositivos e selecione os óculos. Em Apps, confira quantos já foram instalados e quais ainda estão pendentes.",
      "Aguarde a instalação dos aplicativos necessários para a atividade. Abra o Modo Aula e confirme que os óculos aparecem online antes de enviar comandos."
    ],
    example:{step:3,label:"Exemplo no Nomid",installed:106,total:107,note:"Se o aplicativo pendente for usado na aula, aguarde a instalação antes de ativá-lo pelo Modo Aula."},
    links:[{url:nomidUrl,label:"Abrir Portal Nomid"}],
    related:[{id:"mdm-aula",label:"Usar o Modo Aula"}]
  },
  {
    id:"midias-injetor", title:"Adicionar conteúdo pelo Injetor de Mídia", icon:"wifi", page:"injetor-de-midia",
    summary:"Envie fotos, vídeos e modelos 3D ao PICO Neo 3 pelo Wi-Fi.",
    stepTitles:["Abra o Injetor e conecte os dispositivos","Selecione os arquivos","Abra o conteúdo no headset","Confira o envio","Prepare os modelos 3D"],
    steps:[
      "Abra o Injetor de Mídia no Chromebook ou em outro dispositivo Android e conecte-o à mesma rede Wi-Fi dos óculos.",
      "Selecione Adicionar arquivos, escolha o conteúdo e aguarde a conclusão do envio.",
      "Nos óculos, abra o visualizador correspondente de Fotos, Objetos ou Vídeos e selecione o arquivo.",
      "Se o conteúdo não aparecer, confirme que os dois dispositivos estão na mesma rede, confira se o envio concluiu e reabra o visualizador.",
      "Para modelos 3D, prefira glTF e mantenha juntos o arquivo .gltf, o arquivo .bin e as texturas, quando existirem. Verifique se o visualizador aceita arquivos .glb antes do envio."
    ],
    related:[{id:"midias-usb",label:"Transferir por cabo USB"},{id:"modelos-3d",label:"Preparar modelos 3D"}]
  },
  {
    id:"midias-usb", title:"Adicionar conteúdo por cabo USB", icon:"book", page:"conteudo-por-usb",
    summary:"Copie fotos, vídeos, objetos e ambientes 3D do computador para os óculos.",
    stepTitles:["Conecte os óculos ao computador","Localize a pasta Arquivos","Copie os arquivos para a pasta correta","Teste o conteúdo nos óculos"],
    steps:[
      "Conecte o PICO Neo 3 ligado e desbloqueado ao computador com um cabo USB que transfira dados. Autorize o acesso aos arquivos nos óculos, se solicitado.",
      "No computador, abra Este Computador → Pico Neo 3 → Divisão interna de armazenamento → Arquivos.",
      "Abra ou crie a pasta correspondente na tabela abaixo. Copie o conteúdo e aguarde a conclusão antes de desconectar o cabo.",
      "Abra o visualizador de Fotos, Objetos ou Vídeos nos óculos e teste a abertura do arquivo. Se o computador não reconhecer os óculos, confira a autorização e teste outro cabo de dados ou outra porta USB."
    ],
    folders:[
      ["Fotos comuns","Fotos"],
      ["Fotos panorâmicas","Fotos 360"],
      ["Vídeos","Vídeos"],
      ["Objetos 3D","Objetos GLTF"],
      ["Ambientes 3D","Ambiente 3D GLTF"]
    ],
    related:[{id:"midias-injetor",label:"Enviar pelo Injetor de Mídia"},{id:"modelos-3d",label:"Preparar modelos 3D"}]
  },
  {
    id:"modelos-3d", title:"Preparar um modelo 3D para os óculos", icon:"book", page:"preparar-modelos-3d",
    summary:"Use um modelo pronto ou crie um a partir de fotos, de uma imagem ou de texto.",
    stepTitles:["Escolha como obter o modelo","Prepare os arquivos","Transfira e teste"],
    steps:[
      "Procure modelos com download habilitado em bibliotecas como Sketchfab ou Kenney e confira a licença. Para digitalizar um objeto real com o Polycam, fotografe-o de vários ângulos em um local bem iluminado. Para gerar um objeto a partir de texto ou imagem, o guia sugere Meshy e Tripo.",
      "Prefira o formato glTF. Se o download vier em ZIP, extraia o conteúdo e mantenha juntos o arquivo .gltf, o .bin e as texturas, quando existirem. Se o modelo vier em .glb, confira a compatibilidade do visualizador antes de enviar.",
      "Envie o modelo pelo Injetor de Mídia ou copie-o por cabo USB. Abra o visualizador de Objetos nos óculos e teste o modelo antes da aula."
    ],
    related:[{id:"midias-injetor",label:"Enviar pelo Injetor de Mídia"},{id:"midias-usb",label:"Transferir por cabo USB"}]
  },
  {
    id:"faq-oculos", title:"Perguntas frequentes sobre os óculos", icon:"glasses", page:"faq-dos-oculos",
    summary:"Encontre respostas para visor escuro, imersões travadas, controles, limites da área e imagem embaçada.",
    questions:[
      ["O visor ficou escuro. O que faço?","Aguarde o carregamento. Se o visor continuar escuro por mais de um minuto, reinicie os óculos pelo botão de energia. Se o menu abrir e indicar um problema de rastreamento, pressione o botão PICO no controle para recalibrar a área."],
      ["Como pego objetos e aciono botões na imersão?","Aproxime a mão virtual do objeto e use o botão Grip do controle. Nos botões que simulam um botão físico, aproxime a mão e pressione a parte vermelha."],
      ["O que faço se a imersão travar?","Pressione o botão PICO no controle e escolha Reiniciar o aplicativo."],
      ["O que faço se sentir tontura ou mal-estar?","Interrompa a atividade imediatamente e retire os óculos. Consulte o manual de segurança da PICO para orientações."],
      ["Fui parar fora do cenário. Como volto?","Use o teletransporte para uma área válida da imersão. Se você não conseguir voltar, reinicie o aplicativo pelo botão PICO."],
      ["O que significam os pontilhados ou o contorno roxo?","Os pontilhados indicam que você está perto do limite configurado. O contorno roxo indica que você ultrapassou esse limite. Retorne à área demarcada ou reconfigure o limite em um espaço livre."],
      ["Por que minhas mãos aparecem invertidas?","Confira se cada controle está na mão correspondente, esquerda ou direita."],
      ["O que faço se a imagem estiver embaçada?","Limpe as lentes com um pano de microfibra adequado, ajuste a alça e regule a distância interpupilar (IPD) conforme o manual do equipamento."]
    ],
    links:[
      {url:"https://p16-pico-business-resources-sg.ibyteimg.com/tos-alisg-i-jqu7fliuwr-sg/pdf/User_Guide_for_PICO_Neo3_Pro_Series.pdf",label:"Manual de segurança PICO Neo 3 Pro"}
    ]
  },
  { id:"estacao", title:"Organizar a estação de recarga", icon:"station", summary:"Controle a devolução dos óculos e dos controles.", steps:["Use a numeração da estação para conferir os headsets antes e depois da atividade.","Identifique o par de controles de cada headset e mantenha-o junto ao equipamento correspondente.","Conecte cada headset para recarga e confirme a indicação de carregamento.","Registre acessórios ausentes e problemas de carga para a equipe responsável."] },
  { id:"aula", title:"Planejar uma aula com imersão", icon:"book", summary:"Escolha conteúdo e organize a rotina da turma.", steps:["Defina o objetivo da aula e explore a experiência com antecedência.","Planeje a sequência de uso dos headsets e uma atividade para quem estiver aguardando.","Apresente uma pergunta de observação antes da imersão e retome as descobertas em sala."], links:[{url:trainingUrl,label:"Abrir materiais de formação"}] },
  { id:"atendimento", title:"Preparar um relato para o suporte", icon:"headset", summary:"Reúna as informações necessárias sobre o problema.", steps:["Informe a escola, o município e o código da estação, se disponível.","Indique o modelo do equipamento, o nome da imersão e o momento em que surgiu a dificuldade.","Descreva o que apareceu na tela e quais verificações foram feitas. Evite incluir dados de alunos."] },
  { id:"soatvr-2026", title:"Conhecer o SOATVR e os materiais didáticos", icon:"book", summary:"Veja como a proposta pedagógica, os equipamentos e os guias se conectam.", steps:["O Guia do Navegador atende do 6º ao 9º ano. O Guia do Explorador atende da 1ª à 3ª série do ensino médio.","A metodologia articula quatro eixos: compreender, experimentar, imaginar e sistematizar e compartilhar.","Use o catálogo para localizar o tema da aula e consulte a apresentação para conhecer a estação de recarga, os materiais para professores e alunos e a formação docente."], links:[{url:documents[2].url,label:"Abrir apresentação SOATVR 2026"},{url:"#imersoes",label:"Consultar catálogo"}] }
];

export const experienceGuides = [
  {
    id:"experiencia-editor", title:"Criar uma experiência no editor", icon:"book",
    summary:"Escolha um cenário, posicione o T1M e prepare objetos e interações.",
    steps:[
      "Crie uma experiência e selecione um cenário. Arraste o Robô T1M para o ponto onde a turma deve entrar no ambiente.",
      "Adicione objetos da biblioteca e configure as interações de acordo com o objetivo da aula.",
      "Use a prévia em primeira pessoa para conferir o percurso e teste cada interação.",
      "Salve a experiência. Quando for testar nos óculos, use a opção Publicar no editor."
    ],
    links:[{url:"#experiencia-t1m",label:"Ver seção Experiência T1M"}]
  },
  {
    id:"experiencia-vr", title:"Abrir uma experiência nos óculos", icon:"glasses",
    summary:"Encontre, baixe e entre na experiência publicada pelo professor.",
    steps:[
      "Confira se o editor está publicando a experiência e conecte o editor e os óculos à rede usada para a atividade.",
      "No aplicativo dos óculos, selecione “Procurar Experiência” e siga a instrução de conexão mostrada na tela.",
      "Baixe o conteúdo quando ele aparecer. Depois, escolha “Entrar na Experiência”.",
      "Se a experiência não aparecer, confira se a publicação continua ativa e se os dispositivos estão na rede correta."
    ],
    related:[{id:"wifi",label:"Conferir a conexão Wi-Fi"}]
  }
];

export const releases = [
  {
    id:"quimica-reversivel", title:"Nova experiência VR · Química Reversível", area:"Imersões · Mundo T1M", type:"Nova experiência", icon:"spark",
    summary:"Investigue as transformações da matéria nas estações do TransformaLab.",
    notes:[
      "Química Reversível é a nova experiência VR do SOATVR. Você está no TransformaLab, um laboratório virtual criado para investigar transformações da matéria.",
      "Sua missão é percorrer as estações, observar os fenômenos e responder se houve transformação física ou química, se o processo pode ser revertido e que evidência permite chegar a essa conclusão."
    ]
  },
  {
    id:"npc-ensino-medio", title:"NPCs em todas as imersões do ensino médio", area:"Imersões · Ensino médio", type:"Atualização", icon:"orbit",
    summary:"Todas as imersões do ensino médio receberam um NPC, personagem não jogável.",
    notes:[
      "Foi adicionado um NPC, personagem não jogável, em todas as imersões do ensino médio."
    ]
  },
  { id:"tutoriais", title:"Novos tutoriais do SOATVR", area:"Central de Informação", type:"Novidade", icon:"book", summary:"Conexão e atualização, conteúdo externo e dúvidas sobre os óculos.", notes:["Conecte os óculos à internet e confira a sincronização dos aplicativos no Nomid.","Transfira conteúdo pelo Injetor de Mídia ou por USB. Consulte o tutorial de preparação de modelos 3D.","Encontre as perguntas frequentes sobre o headset na seção Guias."] },
  { id:"materiais", title:"Catálogo e primeiros passos", area:"Central de Informação", type:"Novidade", icon:"book", summary:"Catálogo pesquisável, guias do Nomid e seção Experiência T1M.", notes:["Consulte as fichas do catálogo por tema e etapa escolar.","Cadastre a escola no MDM seguindo o guia de solicitação de conta e ativação de senha.","Acesse o suporte oficial e encontre os guias do editor e dos óculos na seção Experiência T1M."] },
  { id:"central", title:"Central de Informação do SOATVR", area:"Central de Informação", type:"Novidade", icon:"spark", summary:"Guias, catálogo e atualizações em um só lugar.", notes:["Busca por guias e dúvidas comuns.","Atalhos do T1M para configurar o equipamento e encontrar ajuda.","Galeria de imersões do Mundo T1M e espaço para novidades do projeto."] },
];

export const immersions = [
  { id:"paraiba", title:"Centro Histórico de João Pessoa", topic:"História e patrimônio", summary:"Percorra o Centro Histórico com o T1M e observe a arquitetura e o patrimônio cultural da cidade." },
  { id:"gigi", title:"Bruxa Gigi", topic:"Língua Portuguesa", summary:"Explore as receitas da Bruxa Gigi para reconhecer palavras primitivas, derivadas e compostas." },
  { id:"videogame", title:"Museu do Videogame", topic:"História e tecnologia", summary:"Conheça diferentes gerações de consoles e veja como os videogames mudaram ao longo do tempo." },
  { id:"trilhos", title:"Museu Sobre Trilhos", topic:"História e transportes", summary:"Visite uma estação virtual e observe o papel das ferrovias na história do transporte." },
  { id:"rupestre", title:"Museu Rupestre", topic:"História e arte", summary:"Observe pinturas rupestres e discuta como suas representações ajudam a estudar sociedades do passado." },
  { id:"itaipu", title:"Itaipu", topic:"Ciências e energia", summary:"Explore o cenário da usina e use seus elementos como ponto de partida para discutir energia hidrelétrica." },
  { id:"terras", title:"Museu de Terras Áridas", topic:"Geografia", summary:"Observe a paisagem e os elementos do cenário para discutir como diferentes condições ambientais moldam os territórios." },
  { id:"santos", title:"Museu Santos Dumont", topic:"História e ciência", summary:"Visite um ambiente inspirado na trajetória de Santos Dumont e nos primeiros experimentos da aviação." },
  { id:"rio", title:"Rio de Janeiro", topic:"Geografia e patrimônio", summary:"Observe a paisagem carioca a partir do Cristo Redentor." },
  { id:"tia-nair", title:"Parque Tia Nair", topic:"Geografia e espaços urbanos", summary:"Explore os caminhos e a paisagem do parque em um cenário virtual." }
];
