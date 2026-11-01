/**
 * Configuração comercial e dados institucionais oficiais da Web Arcanjo Solutions (WAS).
 * Centralizados para fácil edição e manutenção.
 */

export interface PlanFeature {
  name: string;
  included: boolean | string;
  tooltip?: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  price: string;
  periodLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  targetAudience: string;
  benefits: string[];
  scopeNote: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  segment: string;
  category: 'architecture' | 'clinic' | 'restaurant' | 'corporate' | 'store' | 'professional';
  isConceptual: boolean;
  image: string;
  shortSummary: string;
  conceptDescription: string;
  visualDirection: {
    colors: string[];
    typography: string;
    style: string;
  };
  recommendedSections: string[];
  targetAudience: string;
  deliverables: string[];
}

export const SITE_CONFIG = {
  brand: {
    fullName: "Web Arcanjo Solutions",
    shortName: "WAS",
    tagline: "ESTRATÉGIA. DESIGN. PRESENÇA DIGITAL.",
    slogan: "Presença digital construída com propósito.",
    heroTitle: "Seu negócio merece uma presença digital extraordinária.",
    heroSubtitle: "Criamos sites profissionais que valorizam sua marca, apresentam seus serviços com clareza e ajudam sua empresa a conquistar novas oportunidades.",
  },
  contacts: {
    email: "webarcanjosolutions@gmail.com",
    whatsappNumber: "5511999999999", // Número internacional para WhatsApp Web / App
    whatsappDisplay: "(11) 99999-9999", // Exibição formatada
    instagram: "@webarcanjosolutions",
    instagramUrl: "https://instagram.com/webarcanjosolutions",
    location: "São Paulo, SP — Atendimento para empresas em todo o Brasil",
    availability: "Segunda a sexta, das 09h às 18h",
  },
  assets: {
    heroImage: "/src/assets/images/hero_agency_workspace_1793493712952.jpg",
    architectureMockup: "/src/assets/images/mockup_architecture_1793493713430.jpg",
    clinicMockup: "/src/assets/images/mockup_clinic_1793493714115.jpg",
    restaurantMockup: "/src/assets/images/mockup_restaurant_1793493715082.jpg",
    corporateMockup: "/src/assets/images/mockup_corporate_1793493714122.jpg",
    logoWas: "/src/assets/images/logo-was.jpg",
    showcaseDesktop: "/src/assets/images/showcase_site_desktop_1793503946171.jpg",
    showcaseMobile: "/src/assets/images/showcase_site_mobile_1793503946730.jpg",
  },
  plans: [
    {
      id: "essencial",
      name: "Plano Essencial",
      price: "699,90",
      periodLabel: "pagamento único do projeto",
      description: "O ponto de partida para estabelecer uma presença digital profissional.",
      popular: false,
      features: [
        "Site institucional de escopo compacto",
        "Até 3 páginas ou seções principais definidas no briefing",
        "Layout responsivo para celular, tablet e computador",
        "Personalização visual alinhada à identidade da marca",
        "Estrutura organizada para apresentar a empresa e seus serviços",
        "Botão de contato direto via WhatsApp",
        "Formulário de contato simples integrado",
        "Configuração técnica básica de títulos e descrições para SEO",
        "Publicação do site após validação e aprovação",
        "1 rodada de ajustes após a apresentação no escopo acordado",
      ],
      ctaLabel: "Contratar plano Essencial",
    },
    {
      id: "profissional",
      name: "Plano Profissional",
      badge: "MAIS COMPLETO",
      price: "1.149,90",
      periodLabel: "pagamento único do projeto",
      description: "Mais espaço para apresentar sua marca, seus diferenciais e seus serviços.",
      popular: true,
      features: [
        "Site institucional com estrutura ampliada",
        "Até 6 páginas ou seções organizadas conforme briefing",
        "Layout responsivo e personalizado com direção visual refinada",
        "Organização estratégica de conteúdo e jornada do visitante",
        "Galeria de imagens, portfólio ou seção de projetos",
        "Formulário de contato com validação e canais diretos",
        "Integração estratégica com WhatsApp comercial",
        "Configuração técnica básica de SEO para páginas individuais",
        "Links conectados para redes sociais oficiais",
        "Configuração de domínio próprio e publicação inclusa",
        "2 rodadas de ajustes dentro do escopo acordado",
      ],
      ctaLabel: "Contratar plano Profissional",
    },
  ] as PlanItem[],
  comparisonRows: [
    {
      feature: "Número de páginas / seções",
      essencial: "Até 3 seções/páginas",
      profissional: "Até 6 páginas completas",
      detail: "Estruturadas e planejadas a partir do briefing inicial",
    },
    {
      feature: "Personalização visual",
      essencial: "Alinhada à identidade",
      profissional: "Personalização aprofundada",
      detail: "Cores, tipografia e hierarquia adaptadas à marca",
    },
    {
      feature: "Layout responsivo (Desktop/Mobile)",
      essencial: "Sim, adaptado",
      profissional: "Sim, otimização avançada",
      detail: "Compatível com smartphones, tablets e notebooks",
    },
    {
      feature: "Formulário de contato",
      essencial: "Simples",
      profissional: "Validado e estruturado",
      detail: "Campos de contato com envio direto e validação",
    },
    {
      feature: "Integração com WhatsApp",
      essencial: "Botão direto",
      profissional: "Botão e chamadas estratégicas",
      detail: "Acesso facilitado para conversão rápida de visitantes",
    },
    {
      feature: "Galeria de imagens ou portfólio",
      essencial: "Não incluído",
      profissional: "Incluso (até 12 itens)",
      detail: "Para exibição de produtos, serviços ou projetos anteriores",
    },
    {
      feature: "Otimização técnica básica de SEO",
      essencial: "Meta tags principais",
      profissional: "Meta tags por página e semântica",
      detail: "Configuração técnica básica para indexadores",
    },
    {
      feature: "Rodadas de ajustes pós-apresentação",
      essencial: "1 rodada de ajustes",
      profissional: "2 rodadas de ajustes",
      detail: "Refinamentos no escopo contratado antes da publicação final",
    },
    {
      feature: "Publicação do site",
      essencial: "Incluso",
      profissional: "Incluso com apontamento de DNS",
      detail: "Assistência para colocar o projeto no ar",
    },
    {
      feature: "Suporte e garantia após entrega",
      essencial: "15 dias de garantia técnica",
      profissional: "30 dias de garantia técnica",
      detail: "Correção de eventuais instabilidades do código entregue",
    },
  ],
  commercialTerms: [
    {
      title: "Início do desenvolvimento",
      description: "O projeto tem início oficial imediatamente após a aprovação da proposta comercial e a confirmação do pagamento acordado.",
    },
    {
      title: "Prazos e cronograma",
      description: "O prazo de desenvolvimento é definido com base no escopo escolhido, condicionado ao envio dos materiais (textos, fotos, logotipos) pelo cliente.",
    },
    {
      title: "Domínio e hospedagem",
      description: "Registros de domínio (ex: .com.br) e planos de hospedagem são serviços de provedores terceiros contratados pelo cliente. A WAS fornece toda a orientação e faz a configuração técnica.",
    },
    {
      title: "Manutenção e serviços adicionais",
      description: "Alterações estruturais fora do escopo acordado, criação recorrente de conteúdo ou manutenções mensais podem ser contratadas de maneira pontual ou contínua.",
    },
    {
      title: "Validação em contrato",
      description: "Todos os detalhes de escopo, entregáveis, prazos e responsabilidades são descritos com transparência em proposta comercial e contrato de prestação de serviços.",
    },
  ],
  services: [
    {
      id: "institucionais",
      number: "01",
      title: "Criação de sites institucionais",
      shortDescription: "Apresente sua empresa com sofisticação, organização e alto padrão estético para clientes e parceiros.",
      fullDescription: "Desenvolvemos sites institucionais completos que funcionam como a sede digital da sua empresa. Projetados com arquitetura de informação clara, design alinhado à sua marca e navegação fluida em qualquer tela.",
      deliverables: [
        "Estrutura completa de apresentação da empresa",
        "Páginas de serviços, sobre nós, diferenciais e contato",
        "Layout responsivo e design exclusivo",
        "Integração com canais oficiais de atendimento",
      ],
      targetAudience: "Empresas estabelecidas, consultorias, indústrias, escritórios corporativos e prestadores de serviços de médio porte.",
      benefits: [
        "Aumento expressivo na percepção de valor do negócio",
        "Organização centralizada de todas as informações comerciais",
        "Disponibilidade ininterrupta para parceiros e compradores",
      ],
      scopeNote: "O volume de páginas e seções varia conforme o plano contratado (Essencial ou Profissional) ou proposta personalizada.",
    },
    {
      id: "landing-pages",
      number: "02",
      title: "Landing pages de alto impacto",
      shortDescription: "Páginas focadas em um objetivo único: transformar visitantes qualificados em contatos e oportunidades comerciais.",
      fullDescription: "Criamos páginas de aterrissagem estruturadas para campanhas de anúncios e divulgação de ofertas específicas. Cada bloco de conteúdo é posicionado com precisão para conduzir o visitante até a ação desejada.",
      deliverables: [
        "Página única com narrativa persuasiva e direta",
        "Apresentação da solução, benefícios e chamada para ação",
        "Formulário dedicado com validação",
        "Botão fixo ou proeminente de WhatsApp",
      ],
      targetAudience: "Negócios promovendo serviços específicos, lançamentos de novos produtos ou campanhas pagas no Google e redes sociais.",
      benefits: [
        "Maior taxa de conversão em comparação a sites dispersos",
        "Mensagem direta sem distrações ou links secundários",
        "Velocidade de carregamento otimizada",
      ],
      scopeNote: "Escopo focado em uma única página longa com seções estratégicas de conversão.",
    },
    {
      id: "profissionais-autonomos",
      number: "03",
      title: "Sites para profissionais liberais e autônomos",
      shortDescription: "Destaque sua autoridade técnica, especialidade e portfólio com uma página pessoal refinada.",
      fullDescription: "Projetado para arquitetos, médicos, advogados, consultores e especialistas que precisam transmitir segurança e elegância aos clientes antes do primeiro contato comercial.",
      deliverables: [
        "Apresentação do perfil profissional e credenciais",
        "Detalhamento das áreas de atuação e procedimentos",
        "Espaço para galeria de trabalhos ou casos de estudo",
        "Canal de agendamento ou solicitação de contato direto",
      ],
      targetAudience: "Profissionais liberais, peritos, consultores independentes e criativos autônomos.",
      benefits: [
        "Diferenciação clara frente a concorrentes genéricos",
        "Filtro prévio de clientes qualificados",
        "Facilidade para compartilhar propostas e apresentações",
      ],
      scopeNote: "Pode ser executado no formato Essencial (3 seções) ou Profissional com galeria detalhada.",
    },
    {
      id: "redesign",
      number: "04",
      title: "Redesign e modernização de sites",
      shortDescription: "Renove um site desatualizado, lento ou incompatível com celulares para os padrões modernos de design e usabilidade.",
      fullDescription: "Analisamos a estrutura atual do seu site para identificar gargalos visuais e de navegação. Reconstruímos o layout com uma identidade contemporânea, sem perder o histórico do seu negócio.",
      deliverables: [
        "Reestruturação visual completa com tipografia e cores modernas",
        "Adaptação integral para telas de smartphones e tablets",
        "Reorganização dos textos e imagens existentes",
        "Limpeza de elementos visuais antiquados ou poluídos",
      ],
      targetAudience: "Empresas com sites desenvolvidos há anos que já não representam a maturidade e qualidade atual da marca.",
      benefits: [
        "Recuperação imediata da credibilidade visual",
        "Experiência amigável em dispositivos móveis modernos",
        "Aproveitamento da base de conteúdo já construída",
      ],
      scopeNote: "Requer análise prévia do site atual para dimensionamento de escopo e migração de conteúdo.",
    },
    {
      id: "arquitetura-conteudo",
      number: "05",
      title: "Organização de conteúdo e arquitetura de páginas",
      shortDescription: "Estruturamos os textos, hierarquias e fluxos do site para que o visitante entenda seu negócio em poucos segundos.",
      fullDescription: "Muitas empresas têm ótimos serviços mas têm dificuldade em explicá-los de forma objetiva na internet. Atuamos na organização das seções e clareza dos tópicos para maximizar o entendimento.",
      deliverables: [
        "Mapeamento das seções essenciais do site",
        "Hierarquização dos títulos, subtítulos e chamadas",
        "Direcionamento para textos objetivos e profissionais",
        "Fluxo de leitura pensado para rápida absorção",
      ],
      targetAudience: "Negócios que possuem materiais dispersos e desejam sintetizar sua oferta de forma profissional.",
      benefits: [
        "Comunicação clara sem ruídos conceituais",
        "Redução no tempo de explicação em reuniões comerciais",
        "Maior engajamento dos visitantes nas páginas",
      ],
      scopeNote: "Incluso no planejamento estrutural dos planos Essencial e Profissional.",
    },
    {
      id: "configuracao-publicacao",
      number: "06",
      title: "Configuração de domínio e publicação",
      shortDescription: "Cuidamos de toda a parte técnica de DNS, servidores e apontamento para colocar seu site no ar com segurança.",
      fullDescription: "Evite dores de cabeça com termos técnicos de hospedagem e provedores de internet. Cuidamos do apontamento de registros DNS, publicação de arquivos e verificação dos certificados de segurança.",
      deliverables: [
        "Apontamento de DNS para o domínio próprio do cliente",
        "Configuração de certificado SSL (navegação segura HTTPS)",
        "Testes finais de carregamento e links",
        "Verificação de funcionamento em múltiplos navegadores",
      ],
      targetAudience: "Todos os clientes que contratam o desenvolvimento com a Web Arcanjo Solutions.",
      benefits: [
        "Publicação sem estresse técnico para a empresa",
        "Certificado de segurança ativo que transmite confiança ao visitante",
        "Site 100% no ar e operando com domínio próprio",
      ],
      scopeNote: "Custos de registro do domínio e mensalidade da hospedagem são pagos diretamente aos respectivos provedores.",
    },
    {
      id: "otimizacao-seo",
      number: "07",
      title: "Otimização técnica básica para busca (SEO)",
      shortDescription: "Configuração correta das tags, títulos, descrições e estrutura semântica para indexação nos mecanismos de pesquisa.",
      fullDescription: "Preparamos as páginas com as boas práticas técnicas que facilitam a leitura do site pelos motores de busca. Sem falsas promessas de topo de ranking, focando em fundamentos sólidos.",
      deliverables: [
        "Definição de Title Tags e Meta Descriptions estratégicas",
        "Estruturação correta de cabeçalhos semânticos (H1, H2, H3)",
        "Otimização de imagens com textos alternativos descritivos",
        "Geração de metadados para pré-visualização em redes sociais (OpenGraph)",
      ],
      targetAudience: "Empresas que desejam uma base técnica limpa e compatível com indexadores e compartilhamentos digitais.",
      benefits: [
        "Identificação adequada do nome da empresa no Google",
        "Compartilhamento visualmente atraente no WhatsApp e redes",
        "Código limpo e acessível",
      ],
      scopeNote: "Trata-se de SEO On-page técnico estrutural; não inclui gestão de backlinks ou campanhas continuadas de SEO.",
    },
  ] as ServiceItem[],
  differentials: [
    {
      number: "01",
      title: "Design alinhado à sua marca",
      description: "Não usamos soluções genéricas de massa. Cada projeto recebe uma direção de arte sob medida com paleta de cores, tipografia e espaçamentos pensados para o seu segmento.",
    },
    {
      number: "02",
      title: "Layout 100% responsivo",
      description: "Mais de 70% dos acessos acontecem pelo celular. Seu site é construído para oferecer uma leitura impecável em telas de qualquer tamanho, de smartphones a monitores amplos.",
    },
    {
      number: "03",
      title: "Navegação intuitiva e estratégica",
      description: "Estrutura focada em facilitar o entendimento e guiar o cliente até os canais de contato, reduzindo fricções e dúvidas sobre como contratar seus serviços.",
    },
    {
      number: "04",
      title: "Processo com escopo e etapas claras",
      description: "Você sabe exatamente o que será entregue, quais são os prazos de cada fase e como funcionam as rodadas de ajuste. Transparência do briefing à publicação final.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Conversa e briefing",
      description: "Compreendemos seu negócio, público-alvo, serviços oferecidos e referências estéticas por meio de um questionário guiado e alinhamento inicial.",
    },
    {
      step: "02",
      title: "Planejamento e estrutura",
      description: "Definimos o mapa de páginas, a hierarquia das seções e a organização dos conteúdos para garantir uma navegação lógica e comercialmente clara.",
    },
    {
      step: "03",
      title: "Desenvolvimento e ajustes",
      description: "Criamos a interface com design refinado, montamos o layout funcional e apresentamos o projeto para a rodada de ajustes dentro do escopo acordado.",
    },
    {
      step: "04",
      title: "Aprovação e publicação",
      description: "Com tudo aprovado, configuramos o domínio e colocamos seu site oficial no ar com certificado de segurança e canais de contato prontos.",
    },
  ],
  portfolioProjects: [
    {
      id: "axon-arquitetura",
      title: "Axon Arquitetura & Interiores",
      segment: "Escritório de Arquitetura",
      category: "architecture",
      isConceptual: true,
      image: "/src/assets/images/mockup_architecture_1793493713430.jpg",
      shortSummary: "Presença digital sóbria e imersiva para estúdio de arquitetura contemporânea, com foco em fotografias amplas de projetos e estética brutalista refinada.",
      conceptDescription: "Desenvolvido com inspiração no design editorial de publicações arquitetônicas europeias. O projeto prioriza o protagonismo das obras através de contrastes de concreto escuro, linhas ultrafinas douradas e tipografia serifada de alto impacto.",
      visualDirection: {
        colors: ["#0E0F12", "#1C1D22", "#C6A15B", "#EAE7DF"],
        typography: "Playfair Display & Plus Jakarta Sans",
        style: "Minimalismo brutalista com acabamentos em bronze e madeira escura",
      },
      recommendedSections: [
        "Apresentação do manifesto do estúdio",
        "Galeria de projetos por tipologia (Residencial, Comercial, Interiores)",
        "Ficha técnica com memorial descritivo",
        "Publicações e reconhecimentos",
        "Canal exclusivo para briefing de novos projetos",
      ],
      targetAudience: "Clientes de alto padrão em busca de projetos arquitetônicos autorais e exclusivos.",
      deliverables: ["Layout responsivo", "Galeria em alta resolução", "Tipografia editorial", "Formulário de consultoria"],
    },
    {
      id: "aura-clinica",
      title: "Aura Clínica Dermatológica & Estética",
      segment: "Clínica de Estética e Saúde",
      category: "clinic",
      isConceptual: true,
      image: "/src/assets/images/mockup_clinic_1793493714115.jpg",
      shortSummary: "Site sofisticado para clínica de biomedicina estética e dermatologia, transmitindo higiene visual, acolhimento e excelência técnica.",
      conceptDescription: "Projetado para estabelecer credibilidade imediata em tratamentos de estética avançada. A composição visual combina tons grafite profundos, detalhes em champanhe suave e cards com explicações transparentes de procedimentos.",
      visualDirection: {
        colors: ["#121316", "#202126", "#DFC590", "#F8F7F4"],
        typography: "Manrope & Inter",
        style: "Luxo clínico contemporâneo, iluminação suave e precisão anatômica",
      },
      recommendedSections: [
        "Apresentação da médica responsável e certificações técnicas",
        "Menu de procedimentos explicados de forma simples e segura",
        "Tour visual pelas instalações da clínica",
        "Orientações pré e pós consulta",
        "Integração direta com o WhatsApp da recepção para agendamento",
      ],
      targetAudience: "Pacientes que valorizam segurança médica, discrição e tratamentos dermatológicos de vanguarda.",
      deliverables: ["Catálogo de procedimentos", "Botão de WhatsApp integrado", "Apresentação de equipe", "SEO local"],
    },
    {
      id: "obsidian-restaurante",
      title: "Obsidian Bistrô & Wine Bar",
      segment: "Gastronomia & Hospitalidade",
      category: "restaurant",
      isConceptual: true,
      image: "/src/assets/images/mockup_restaurant_1793493715082.jpg",
      shortSummary: "Identidade digital atmosférica para bistrô contemporâneo com menu degustação, carta de vinhos selecionados e reservas online.",
      conceptDescription: "Uma experiência digital que recria a atmosfera intimista do salão do restaurante. Fundo preto aveludado, tipografia refinada e fotos gastronômicas em destaque convidam o visitante a conhecer o cardápio sazonal.",
      visualDirection: {
        colors: ["#0B0B0C", "#18181A", "#CCA35A", "#F4F2EC"],
        typography: "Plus Jakarta Sans & Cormorant Garamond",
        style: "Gastronomia sensorial, iluminação de velas e paleta mineral",
      },
      recommendedSections: [
        "Cardápio degustação completo com harmonizações",
        "História do chef e filosofia dos ingredientes locais",
        "Galeria fotográfica de pratos autorais",
        "Sistema de solicitação de reserva de mesas",
        "Horários de funcionamento e localização com mapa",
      ],
      targetAudience: "Apreciadores de alta gastronomia, casais e encontros de negócios para jantares executivos.",
      deliverables: ["Cardápio digital responsivo", "Módulo de reservas", "Carta de vinhos", "Indicação geográfica"],
    },
    {
      id: "aurum-consultoria",
      title: "Aurum Strategic Advisory",
      segment: "Empresa de Serviços & Consultoria",
      category: "corporate",
      isConceptual: true,
      image: "/src/assets/images/mockup_corporate_1793493714122.jpg",
      shortSummary: "Portal corporativo para consultoria estratégica e governança empresarial, transmitindo solidez jurídica e rigor analítico.",
      conceptDescription: "Projetado com estrutura assimétrica de alto rigor. Os blocos de conteúdo organizam práticas de mercado, metodologias proprietárias e materiais de liderança de pensamento em uma arquitetura limpa e confiável.",
      visualDirection: {
        colors: ["#0A0B0E", "#161820", "#C6A15B", "#E4E3DF"],
        typography: "Manrope & Plus Jakarta Sans",
        style: "Engenharia corporativa, linhas geométricas precisas e sobriedade",
      },
      recommendedSections: [
        "Áreas de prática (Fusões e Aquisições, Gestão de Riscos, Governança)",
        "Metodologia de diagnóstico empresarial",
        "Artigos técnicos e notas de mercado",
        "Perfil dos sócios consultores",
        "Canal sigiloso para solicitação de proposta",
      ],
      targetAudience: "Diretores executivos, conselhos de administração e fundadores de médias e grandes empresas.",
      deliverables: ["Estrutura multicamadas", "Formulário corporativo confidencial", "Áreas de prática", "Otimização técnica"],
    },
    {
      id: "lumina-produtos",
      title: "Lúmina Studio Design de Objetos",
      segment: "Loja & Marca de Produtos Autorais",
      category: "store",
      isConceptual: true,
      image: "/src/assets/images/mockup_architecture_1793493713430.jpg",
      shortSummary: "Vitrine digital para marca de luminárias e mobiliário escultural com foco em detalhes materiais e vendas sob encomenda.",
      conceptDescription: "Composição visual limpa e arejada pensada para valorizar a textura de mármores, metais escovados e vidros soprados. A página guia o cliente do conceito do produto até a solicitação de catálogo comercial.",
      visualDirection: {
        colors: ["#0D0D0E", "#1A1A1D", "#D4B06A", "#F5F4EF"],
        typography: "Plus Jakarta Sans",
        style: "Design industrial de luxo com foco em proporções geométricas",
      },
      recommendedSections: [
        "Catálogo de coleções ativas",
        "Fichas dimensionais e especificações técnicas",
        "Processo de fabricação artesanal",
        "Download de arquivos 3D para arquitetos",
        "Solicitação de orçamento comercial com frete",
      ],
      targetAudience: "Arquitetos, designers de interiores e apreciadores de design assinado.",
      deliverables: ["Catálogo digital", "Fichas técnicas", "Formulário de especificação", "Mobile first"],
    },
    {
      id: "valente-advocacia",
      title: "Valente & Associados Advocacia",
      segment: "Profissional Autônomo & Escritório",
      category: "professional",
      isConceptual: true,
      image: "/src/assets/images/mockup_corporate_1793493714122.jpg",
      shortSummary: "Site institucional para banca de advocacia especializada em direito societário e patrimonial, focado em discrição e clareza.",
      conceptDescription: "Layout austero e contemporâneo que elimina jargões desnecessários e organiza os ramos de atuação de forma didática, facilitando o contato de clientes que demandam consultoria preventiva.",
      visualDirection: {
        colors: ["#0A0A0B", "#17181C", "#BE974B", "#F6F5F2"],
        typography: "Manrope",
        style: "Tradicionalismo contemporâneo com tipografia sóbria e leitura fluida",
      },
      recommendedSections: [
        "Áreas de atuação jurídica detalhadas",
        "Artigos informativos de atualização legislativa",
        "Apresentação da trajetória profissional dos advogados",
        "Compromisso ético e sigilo profissional",
        "Canais de contato imediato via WhatsApp e e-mail",
      ],
      targetAudience: "Empresários, investidores e famílias que necessitam de estruturação patrimonial segura.",
      deliverables: ["Páginas por especialidade", "Canal de WhatsApp seguro", "Blog de artigos jurídicos", "Conformidade OAB"],
    },
  ] as PortfolioProject[],
};
