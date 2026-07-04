export const personal = {
  name: 'Lia Costa',
  role: 'Desenvolvedora Full Stack',
  tagline: 'Construo sistemas completos com alma de front-end - da API à interface, com propósito.',
  location: 'Brasília, DF',
  email: 'seu@email.com',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  github: 'https://github.com/seu-usuario',
  cv: '/cv-lia-costa.pdf',
  about: `Comecei do zero no técnico SENAI e hoje, a um semestre de me formar em Análise e Desenvolvimento de Sistemas, já entreguei projetos reais para empresas como Ideia Space e NowSocial.\n\nTenho afinidade com front-end e sensibilidade visual, mas atuo como full stack — de APIs REST com autenticação JWT a interfaces modernas. Acredito que tecnologia com propósito transforma vidas, e isso guia cada projeto que construo.`,
}

export const skills = {
  frontend: ['HTML5','CSS3','JavaScript','React','Bootstrap','Tailwind CSS','Figma'],
  backend:  ['C#','ASP.NET Core','Node.js','Express','Java','MVC','Entity Framework','JWT','Swagger'],
  database: ['SQL Server','MySQL','MongoDB'],
  tools:    ['Git','GitHub','Selenium','JMeter','Jasmine','Vite'],
}

export const projects = [
  { id:1, title:'MarvelsAPI', type:'Backend', color:'purple', featured:true, realAcademic:true,
    description:'API RESTful para gerenciamento de clientes, produtos, vendas e usuários. Arquitetura em camadas com autenticação JWT e documentação Swagger.',
    highlight:'Nome dado pelo professor pois éramos as únicas três mulheres da turma, as Marvels. 💜',
    techs:['C#','ASP.NET 8','Entity Framework','SQL Server','JWT','Swagger'], github:'#', deploy:null, image:'/marvelsApi.svg' },

  { id:2, title:'Semear', type:'Full Stack', color:'blue', featured:true, realAcademic:true,
    description:'Marketplace de sementes nativas conectando pequenos produtores ao consumidor. Dual database: MySQL para transações, MongoDB para conteúdo educativo.',
    highlight:'Nasceu como protótipo de UX para a Embrapa e ganhou vida como sistema real.',
    techs:['Node.js','Express','MySQL','MongoDB','JavaScript', 'SPA'], github:'#', deploy:'#', image:'/semear.svg' },

  { id:3, title:'Elysium Beauty', type:'Full Stack', color:'purple', featured:true, realAcademic:true,
    description:'Plataforma de agendamentos para estética com painel administrativo, relatórios e gestão completa de clientes.',
    highlight:'Projeto final do curso técnico — sistema do zero ao deploy.',
    techs:['C#','ASP.NET MVC','Entity Framework','SQL Server'], github:'#', deploy:null, image:'/elysiumBeauty.svg' },

  { id:4, title:'DITL — Ideia Space', type:'Full Stack', color:'cyan', featured:true, realClient:true,
    description:'Sistema de automação de operações de satélite com cronômetro, registro com foto e geração automática de relatórios. Entregue para a Ideia Space.',
    highlight:'De "não entendi nada" na primeira reunião à entrega completa. 🛰️',
    techs:['HTML','CSS','JavaScript', 'MySQL'], github:null, deploy:'#', image:'/ideiaSpace.svg' },

  { id:5, title:'NowGo Social', type:'Front-end', color:'blue', featured:false, realClient:true,
    description:'Plataforma de cursos online para populações vulneráveis, adaptada para a empresa NowSocial via Residência Porto Digital.',
    highlight:'Sistema de cursos online com gamificação, ranking e certificados digitais, entregue para a NowSocial.',
    techs:['Bootstrap','Animate.css','Swiper.js','jQuery'], github:null, deploy:null, image:'/nowgoSocial.svg' },

  { id:6, title:'Confeitaria Ana Alves', type:'Frontend', color:'purple', featured:false, realAcademic:true,
    description:'Site com catálogo, galeria, sistema de encomendas via WhatsApp, área logada e timeline interativa.',
    highlight:'Website desenvolvido como projeto acadêmico para a Confeitaria Ana Alves, uma confeitaria artesanal.',
    techs:['HTML','CSS','JavaScript'], github:'#', deploy:'#', image:'/confeitariaAnaAlves.svg' },
    
  { id:7, title:'Technaveia', type:'Frontend', color:'purple', featured:true, realAcademic:true, 
    description:'Aplicativo mobile que conecta clientes a técnicos de serviços diversos (manutenção, TI, elétrica, etc.). ',
    highlight:'Marketplace criado para conectar usuários que precisam de suporte tecnológico a técnicos qualificados.',
    techs:['React Native','Expo','TypeScript'], github:'#', deploy:null, image:'/technaveia.svg' },
]

export const competitions = [
  { id:1, title:'GRANDPRIX SENAI — O.S Engenharia', result:'2º lugar', year:'2024', event:'Etapa Escolar',
    description:'Plataforma inteligente de rastreamento de equipamentos com IoT, biometria e monitoramento em tempo real.',
    role:'Líder de equipe', color:'purple' },
  { id:2, title:'GRANDPRIX SENAI - Ecobriks', result:'2º lugar', year:'2024', event:'Etapa Regional · Semana Nacional de C&T',
    description:'Sistema modular de transporte sustentável para tijolos ecológicos com caixas reforçadas e divisórias móveis.',
    role:'Líder de equipe', color:'purple' },
  { id:3, title:'SNEPT 2024 — Ponto Comum', result:'Representante SENAI', year:'2024', event:'Estádio Mané Garrincha',
    description:'App de acessibilidade no transporte público para pessoas com deficiência visual com alertas em tempo real.',
    role:'Desenvolvedora', color:'blue' },
  { id:4, title:'Hackathon SESI LAB - PerifaRecicla', result:'3º lugar', year:'Dez/2024', event:'SESI LAB 1ª Edição',
    description:'Paradas de ônibus sustentáveis com estrutura solar, painel digital e coleta de resíduos eletrônicos.',
    role:'Desenvolvedora', color:'blue' },
  { id:5, title:'Hackathon SESI LAB - EcoSentinelas', result:'3º lugar', year:'2025', event:'SESI LAB 2ª Edição',
    description:'Sistema de irrigação inteligente com sensores de umidade e plataforma de monitoramento para agricultura familiar.',
    role:'Desenvolvedora', color:'blue' },
  { id:6, title:'Memória Viva - Porto Digital', result:'Residência Tecnológica', year:'2024', event:'Desafio Cultural',
    description:'Plataforma exclusiva para ensino e preservação de língua indígena com jogos, reconhecimento de voz e interface culturalmente sensível.',
    role:'Idealizadora e líder', color:'purple', highlight:true },
]
