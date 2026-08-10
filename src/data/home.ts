/**
 * RECOVA — home-page content.
 * Adapted from the Aston template. Copy rewritten for the RECOVA product:
 * a camada de IA que recupera vendas quando a busca nativa de e-commerce falha.
 */

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
  from?: number;
  to?: number;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface TickerTag {
  icon: string;
  label: string;
}

export interface BenefitCard {
  image: string;
  background: string;
  title: string;
  description?: string;
  aspect: number;
}

export interface PricingPlan {
  name: string;
  audience: string;
  bestFor: string;
  price: string;
  billingNote: string;
  ctaLabel: string;
  ctaHref: string;
  includedLabel: string;
  features: string[];
  activeCount: number;
  layout: "card" | "panel";
}

export interface ComparisonRow {
  others: string;
  aston: string;
}

export interface MiniTestimonial {
  name: string;
  quote: string;
  avatar: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  social: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  screen: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  badge: {
    text: "Camada de IA para e-commerce",
    avatars: [
      "/images/avatars/hero-1.svg",
      "/images/avatars/hero-2.svg",
      "/images/avatars/hero-3.svg",
    ],
  },
  title: "Recupere as vendas que a sua busca perde",
  description:
    "Quando a busca nativa falha, a RECOVA entra. Conversa com o shopper, entende a intenção e mostra alternativas reais — sem trocar a busca que você já tem.",
  note: "10–20% das buscas on-site retornam zero resultados",
  visual: "/images/illustrations/hero-dashboard.png",
  trustedText:
    "Feito para lojas em qualquer plataforma — Shopify, VTEX, Wix, Nuvemshop.",
  logos: [
    "/images/logos/platforms/shopify.svg",
    "/images/logos/platforms/vtex.svg",
    "/images/logos/platforms/wix.svg",
    "/images/logos/platforms/nuvemshop.png",
  ],
  widgets: {
    left: [
      { src: "/images/illustrations/hero-widget-l3.svg", w: 265, h: 139, top: 9, left: -87, rotate: 12, radius: 16 },
      { src: "/images/illustrations/hero-widget-l2.svg", w: 192, h: 98, top: 230, left: -19, rotate: -3, radius: 16 },
      { src: "/images/illustrations/hero-widget-l1.svg", w: 265, h: 175, top: 393, left: -67, rotate: 14, radius: 16 },
    ],
    right: [
      { src: "/images/illustrations/hero-widget-r3.svg", w: 262, h: 173, top: -10, left: 3, rotate: -16, radius: 16 },
      { src: "/images/illustrations/hero-widget-r2.svg", w: 211, h: 167, top: 242, left: 53, rotate: 11, radius: 5 },
      { src: "/images/illustrations/hero-widget-r1.svg", w: 173, h: 81, top: 468, left: 40, rotate: -7, radius: 9 },
    ],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Motto + stats                                                               */
/* -------------------------------------------------------------------------- */

export const motto = {
  title: "A busca falha justamente quando o cliente está mais perto de comprar.",
  stats: [
    { value: "10–20", suffix: "%", label: "das buscas retornam zero resultados", from: 10, to: 20 },
    { value: "50", suffix: "%", label: "das vendas são perdidas na busca", from: 50, to: 50 },
    { value: "3", suffix: "s", label: "para a RECOVA entrar na falha", from: 3, to: 3 },
  ] satisfies StatItem[],
};

/* -------------------------------------------------------------------------- */
/* What's In (benefits)                                                        */
/* -------------------------------------------------------------------------- */

export const whatsIn = {
  title: "O que a RECOVA recupera",
  description:
    "Uma camada que transforma o momento do zero-results em venda recuperada.",
  cards: [
    {
      image: "/images/illustrations/whats-in-card-1.svg",
      background: "/images/illustrations/whats-in-card-1-bg.svg",
      title: "Vendas recuperadas",
      description:
        "Cada busca sem resultado vira uma conversa com o shopper — e uma chance real de compra.",
      aspect: 3.05357,
    },
    {
      image: "/images/illustrations/whats-in-card-2.svg",
      background: "/images/illustrations/whats-in-card-2-bg.svg",
      title: "Alternativas relevantes",
      description: "Mostra 3+ opções que atendem à intenção, não só ao termo digitado.",
      aspect: 2.00712,
    },
    {
      image: "/images/illustrations/whats-in-card-3.svg",
      background: "/images/illustrations/whats-in-card-3-bg.svg",
      title: "Reengajamento",
      description: "Volta ao shopper que abandonou, com o produto certo no momento certo.",
      aspect: 1.49107,
    },
    {
      image: "/images/illustrations/whats-in-card-4.svg",
      background: "/images/illustrations/whats-in-card-4-bg.svg",
      title: "Sem trocar sua busca",
      description: "Atua como camada sobre a busca nativa que você já tem.",
      aspect: 1.75446,
    },
    {
      image: "/images/illustrations/whats-in-card-5.svg",
      background: "/images/illustrations/whats-in-card-5-bg.svg",
      title: "Resultado mensurável",
      description: "Cada venda resgatada é atribuída à RECOVA, não estimada.",
      aspect: 1.75446,
    },
  ] satisfies BenefitCard[],
  orbitLogos: [
    "/images/illustrations/orbit/orbit-1.svg",
    "/images/illustrations/orbit/orbit-2.svg",
    "/images/illustrations/orbit/orbit-3.svg",
    "/images/illustrations/orbit/orbit-4.svg",
    "/images/illustrations/orbit/orbit-5.svg",
    "/images/illustrations/orbit/orbit-6.svg",
  ],
};

/* -------------------------------------------------------------------------- */
/* Platform highlight ticker                                                   */
/* -------------------------------------------------------------------------- */

export const platformHighlight = {
  badge: { icon: "/images/icons/badge/whats-inside.svg", label: "Tipos de falha" },
  title: "Funciona em qualquer tipo de falha de busca",
  tags: [
    { icon: "/images/icons/ticker/web-design.svg", label: "Zero resultados" },
    { icon: "/images/icons/ticker/data-science.svg", label: "Termo coloquial" },
    { icon: "/images/icons/ticker/digital-marketing.svg", label: "Produto esgotado" },
    { icon: "/images/icons/ticker/software-development.svg", label: "Busca por sinônimo" },
    { icon: "/images/icons/ticker/machine-learning.svg", label: "Filtro sem match" },
    { icon: "/images/icons/ticker/graphic-design.svg", label: "Categoria vazia" },
    { icon: "/images/icons/ticker/ai-tools.svg", label: "Intenção ambígua" },
    { icon: "/images/icons/ticker/project-management.svg", label: "Ortografia" },
    { icon: "/images/icons/ticker/cybersecurity.svg", label: "Plural/singular" },
    { icon: "/images/icons/ticker/cloud-computing.svg", label: "Marca vs genérico" },
    { icon: "/images/icons/ticker/ux-ui-design.svg", label: "Tamanho indisponível" },
    { icon: "/images/icons/ticker/business-analytics.svg", label: "Cor indisponível" },
    { icon: "/images/icons/ticker/programming-languages.svg", label: "Faixa de preço" },
    { icon: "/images/icons/ticker/seo-techniques.svg", label: "Busca por ocasião" },
    { icon: "/images/icons/ticker/financial-modeling.svg", label: "Uso coloquial" },
    { icon: "/images/icons/ticker/mobile-development.svg", label: "Busca por voz" },
    { icon: "/images/icons/ticker/content-creation.svg", label: "Intenção de presente" },
    { icon: "/images/icons/ticker/e-commerce.svg", label: "E-commerce" },
  ] satisfies TickerTag[],
};

/* -------------------------------------------------------------------------- */
/* Core features                                                               */
/* -------------------------------------------------------------------------- */

export const coreFeatures = {
  badge: { icon: "/images/icons/badge/features.svg", label: "Recursos" },
  title: "Uma camada, três movimentos de resgate",
  description:
    "A RECOVA entra no momento exato da falha e conduz o shopper de volta ao carrinho.",
  items: [
    {
      icon: "/images/icons/feature/smart-prioritization.svg",
      title: "Encontra a falha",
      description: "Detecta o zero-results e a intenção real por trás da busca.",
    },
    {
      icon: "/images/icons/feature/offline-access.svg",
      title: "Conversa e entende",
      description: "Um agente conversa com o shopper e refina o que ele procura.",
    },
    {
      icon: "/images/icons/feature/real-time-sync.svg",
      title: "Recupera e reengaja",
      description: "Mostra alternativas e volta ao shopper que abandonou.",
    },
    {
      icon: "/images/icons/feature/automated-workflows.svg",
      title: "Atribuição real",
      description: "Cada venda resgatada é contabilizada, não estimada.",
    },
    {
      icon: "/images/icons/feature/user-management.svg",
      title: "Sem trocar a busca",
      description: "Camada sobre a busca nativa que você já tem.",
    },
    {
      icon: "/images/icons/feature/real-time-notifications.svg",
      title: "Implantação em minutos",
      description: "Conecte sua loja e comece a recuperar no mesmo dia.",
    },
  ] satisfies FeatureItem[],
};

/* -------------------------------------------------------------------------- */
/* Numbers                                                                     */
/* -------------------------------------------------------------------------- */

export const numbers = {
  badge: { icon: "/images/icons/badge/numbers.svg", label: "Números" },
  title: "O impacto da recuperação de busca",
  description:
    "Dados de mercado mostram o tamanho da oportunidade que a RECOVA captura.",
  stats: [
    { value: "10–20", suffix: "%", label: "das buscas retornam zero resultados" },
    { value: "50", suffix: "%", label: "das vendas são perdidas na busca" },
    { value: "80", suffix: "%", label: "saem por uma busca ruim" },
    { value: "66", suffix: "%", label: "não recebem alternativas" },
  ] satisfies StatItem[],
};

/* -------------------------------------------------------------------------- */
/* Powerful features (tabs + cards)                                            */
/* -------------------------------------------------------------------------- */

export const powerfulFeatures = {
  badge: { icon: "/images/icons/badge/benefits.svg", label: "Recursos" },
  title: "O que a RECOVA faz por você",
  highlights: [
    "Recuperação de buscas sem resultado",
    "Chat de refinamento com IA",
    "3+ alternativas de produto",
    "Reengajamento após 30 segundos",
  ],
  items: [
    {
      icon: "/images/icons/feature/resource-library.svg",
      title: "Conversa inteligente",
      description: "O agente Rev entende a intenção e refina a busca com o shopper.",
    },
    {
      icon: "/images/icons/feature/collaborative-projects.svg",
      title: "Alternativas reais",
      description: "Mostra produtos que atendem à intenção, não só ao termo.",
    },
    {
      icon: "/images/icons/feature/live-qa.svg",
      title: "Reengajamento",
      description: "Volta ao shopper que abandonou no momento certo.",
    },
    {
      icon: "/images/icons/feature/smart-analytics.svg",
      title: "Métricas claras",
      description: "Exposição, interação, clique e compra atribuída.",
    },
  ] satisfies FeatureItem[],
};

/* -------------------------------------------------------------------------- */
/* Mobile app                                                                  */
/* -------------------------------------------------------------------------- */

export const mobileApp = {
  badge: { icon: "/images/icons/badge/mobile-app.svg", label: "Como funciona" },
  title: "Veja o resgate acontecer",
  cardTags: ["Encontra a falha", "Conversa e entende"],
  features: [
    { icon: "/images/icons/list/mobile-1.svg", label: "Detecta o zero-results" },
    { icon: "/images/icons/list/mobile-2.svg", label: "Entende a intenção" },
    { icon: "/images/icons/list/mobile-3.svg", label: "Mostra alternativas" },
    { icon: "/images/icons/list/mobile-4.svg", label: "Recupera a venda" },
    { icon: "/images/icons/list/mobile-5.svg", label: "Atribui o resultado" },
    { icon: "/images/icons/list/mobile-6.svg", label: "Reengaja o shopper" },
  ],
  video: {
    title: "Veja a demo interativa",
    subtitle: "Experimente o Rev",
    thumbnail: "/images/illustrations/mobile-app-video-thumb.png",
  },
};

/* -------------------------------------------------------------------------- */
/* Download app                                                                */
/* -------------------------------------------------------------------------- */

export const downloadApp = {
  badge: { icon: "/images/icons/badge/download-app.svg", label: "Painel" },
  title: "Veja a recuperação acontecendo, em tempo real",
  stats: [
    { icon: "/images/icons/list/download-1.svg", label: "+12% conversão" },
    { icon: "/images/icons/list/download-2.svg", label: "R$ 48k recuperados/mês" },
  ],
  buttons: [
    {
      icon: "/images/icons/google-play.svg",
      small: "Ver no",
      large: "GitHub",
      href: "https://github.com/patrickpassosb/recova",
    },
    {
      icon: "/images/icons/app-store.svg",
      small: "Agendar",
      large: "Demo",
      href: "/contact",
    },
  ],
  screens: [
    "/images/illustrations/download-screen-1.png",
    "/images/illustrations/download-screen-2.png",
    "/images/illustrations/download-screen-3.png",
    "/images/illustrations/download-screen-4.png",
  ],
};

/* -------------------------------------------------------------------------- */
/* Pricing                                                                     */
/* -------------------------------------------------------------------------- */

const BASE_FEATURES = [
  "Recuperação de buscas sem resultado",
  "Chat de refinamento com IA",
  "3+ alternativas de produto",
  "Reengajamento após 30 segundos",
  "Métricas de recuperação",
  "Camada sobre a busca nativa",
  "Suporte dedicado",
];

export const pricing = {
  badge: { icon: "/images/icons/badge/pricing.svg", label: "Preços" },
  title: "Planos para cada tamanho de loja",
  description:
    "Comece no piloto e escale conforme a recuperação de vendas cresce.",
  plans: [
    {
      name: "Piloto",
      audience: "Para validar",
      bestFor: "Melhor para testar",
      price: "Grátis",
      billingNote: "Piloto de 30 dias. Sem cartão de crédito.",
      ctaLabel: "Começar piloto",
      ctaHref: "/waitlist",
      includedLabel: "O que está incluído",
      features: BASE_FEATURES,
      activeCount: 4,
      layout: "card",
    },
    {
      name: "Crescimento",
      audience: "Lojas em escala",
      bestFor: "Melhor para o seu negócio",
      price: "R$ 297/m",
      billingNote: "Cobrado mensalmente ou anualmente. Cancele quando quiser.",
      ctaLabel: "Começar agora",
      ctaHref: "/waitlist",
      includedLabel: "O que está incluído",
      features: BASE_FEATURES,
      activeCount: 7,
      layout: "card",
    },
    {
      name: "Enterprise",
      audience: "Alto volume",
      bestFor: "Melhor para toda a operação",
      price: "Sob consulta",
      billingNote: "Volume alto, múltiplas lojas e SLAs dedicados.",
      ctaLabel: "Falar com vendas",
      ctaHref: "/contact",
      includedLabel: "O que está incluído",
      features: [
        ...BASE_FEATURES,
        "Múltiplas lojas",
        "SLA dedicado",
        "Onboarding assistido",
      ],
      activeCount: 10,
      layout: "panel",
    },
  ] satisfies PricingPlan[],
};

/* -------------------------------------------------------------------------- */
/* Comparison                                                                  */
/* -------------------------------------------------------------------------- */

export const comparison = {
  badge: { icon: "/images/icons/badge/comparison.svg", label: "Comparação" },
  title: "RECOVA vs. busca nativa",
  othersLabel: "Busca nativa",
  rows: [
    { others: "Zero resultados = abandono", aston: "Zero resultados = conversa e venda" },
    { others: "Só responde ao termo digitado", aston: "Entende a intenção real" },
    { others: "Sem alternativas quando não acha", aston: "Mostra 3+ alternativas relevantes" },
    { others: "Shopper que sai não volta", aston: "Reengaja quem abandonou" },
    { others: "Venda perdida não é medida", aston: "Cada venda resgatada é atribuída" },
    { others: "Exige trocar a busca", aston: "Camada sobre a busca que você já tem" },
    { others: "Sem métricas de recuperação", aston: "Painel com exposição, clique e compra" },
  ] satisfies ComparisonRow[],
};

/* -------------------------------------------------------------------------- */
/* About us                                                                    */
/* -------------------------------------------------------------------------- */

export const about = {
  badge: { icon: "/images/icons/badge/about-us.svg", label: "Sobre" },
  title: "A RECOVA nasce do zero-results",
  description:
    "Todo e-commerce perde vendas quando a busca falha. A RECOVA é a camada de IA que transforma esse momento de frustração em conversa, alternativa e venda recuperada — sem exigir que você troque a busca que já tem.",
  primaryCta: { label: "Ver no GitHub", href: "https://github.com/patrickpassosb/recova" },
  secondaryCta: { label: "Falar conosco", href: "/contact" },
  stats: [
    { value: "10–20", suffix: "%", label: "das buscas retornam zero resultados", from: 10, to: 20 },
    { value: "50", suffix: "%", label: "das vendas são perdidas na busca", from: 50, to: 50 },
    { value: "3", suffix: "s", label: "para a RECOVA entrar na falha", from: 3, to: 3 },
  ] satisfies StatItem[],
  students: [
    "/images/illustrations/about-student-1.png",
    "/images/illustrations/about-student-2.png",
    "/images/illustrations/about-student-3.png",
  ],
  testimonials: [
    { name: "Lojista de moda", quote: "A busca falhava e eu perdia a venda. Agora o shopper encontra um caminho.", avatar: "/images/avatars/about-1.svg" },
    { name: "E-commerce de beleza", quote: "O zero-results virou conversa. A recuperação é real e mensurável.", avatar: "/images/avatars/about-2.svg" },
    { name: "Loja de casa & decoração", quote: "Sem trocar a busca, recuperamos vendas que nem sabíamos que perdíamos.", avatar: "/images/avatars/about-3.svg" },
    { name: "Marketplace", quote: "A atribuição é clara: cada venda resgatada aparece no painel.", avatar: "/images/avatars/about-4.svg" },
    { name: "Loja de calçados", quote: "O agente entende a intenção e mostra o tamanho certo. Impressionante.", avatar: "/images/avatars/about-5.svg" },
    { name: "E-commerce de eletrônicos", quote: "Implantação em minutos e resultado no mesmo dia.", avatar: "/images/avatars/about-6.svg" },
  ] satisfies MiniTestimonial[],
};

/* -------------------------------------------------------------------------- */
/* Who can use                                                                 */
/* -------------------------------------------------------------------------- */

export const whoCanUse = {
  badge: { icon: "/images/icons/badge/who-can-use.svg", label: "Para quem é" },
  title: "Feito para o seu tipo de loja",
  items: [
    {
      title: "Moda e vestuário",
      description:
        "Tamanhos, cores e estilos que a busca nativa não entende — a RECOVA recupera.",
    },
    { title: "Beleza e cosméticos", description: "Termos coloquiais e marcas viram venda." },
    { title: "Casa & decoração", description: "Intenção de ocasião e presente, recuperada." },
  ] satisfies AudienceItem[],
  panel: {
    image: "/images/illustrations/who-can-use-panel.png",
    avatar: "/images/avatars/who-can-use.png",
    kicker: "Feito para lojistas",
    title: "Pronto para recuperar?",
    subtitle: "Fale conosco agora",
    ctaLabel: "Falar conosco",
    ctaHref: "/contact",
  },
};

/* -------------------------------------------------------------------------- */
/* Team                                                                        */
/* -------------------------------------------------------------------------- */

export const team = {
  badge: { icon: "/images/icons/badge/our-team.svg", label: "Nosso time" },
  title: "Quem está por trás da RECOVA",
  members: [
    { name: "Patrick Passos", role: "Tech Lead", photo: "/images/avatars/patrick-passos.png", social: "https://www.linkedin.com/in/patrickpassosb/" },
    { name: "Gabriel Sacilotto", role: "Produto & Branding", photo: "/images/avatars/gabriel-sacilotto.jfif", social: "https://www.linkedin.com/in/gabriel-sacilotto-819343365/" },
  ] satisfies TeamMember[],
};

/* -------------------------------------------------------------------------- */
/* Process                                                                     */
/* -------------------------------------------------------------------------- */

export const process = {
  badge: { icon: "/images/icons/badge/process.svg", label: "Processo" },
  title: "Do zero à primeira venda recuperada",
  ctaLabel: "Começar agora",
  ctaHref: "/waitlist",
  steps: [
    {
      step: "Passo 01",
      title: "Conecte sua loja",
      description: "Conecte a RECOVA à sua plataforma em minutos, sem trocar a busca.",
      screen: "/images/illustrations/process-screen-1.png",
    },
    {
      step: "Passo 02",
      title: "Valide no piloto",
      description: "Veja as primeiras vendas recuperadas e o impacto no painel.",
      screen: "/images/illustrations/process-screen-2.png",
    },
    {
      step: "Passo 03",
      title: "Escale e meça",
      description: "Aumente a cobertura e acompanhe a receita recuperada em R$.",
      screen: "/images/illustrations/process-screen-3.png",
    },
  ] satisfies ProcessStep[],
};

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export const faq = {
  badge: { icon: "/images/icons/badge/faq.svg", label: "FAQ" },
  title: "Perguntas frequentes",
  items: [
    {
      question: "Preciso trocar minha busca?",
      answer:
        "Não. A RECOVA atua como uma camada sobre a busca nativa que você já tem. Ela entra apenas no momento da falha — quando o shopper não encontra o que procura.",
    },
    {
      question: "Quanto tempo leva para implantar?",
      answer:
        "Minutos. Conecte sua loja à plataforma e a RECOVA começa a recuperar vendas no mesmo dia, sem mudanças no seu front-end.",
    },
    {
      question: "Como sei que está funcionando?",
      answer:
        "O painel mostra cada venda resgatada com clareza: exposição, interação, clique e compra atribuída. Sem promessas — evidência.",
    },
    {
      question: "Funciona com a minha plataforma?",
      answer:
        "A RECOVA é agnóstica de plataforma. Funciona com Shopify, VTEX, Wix, Nuvemshop e outras, como uma camada sobre a busca.",
    },
    {
      question: "A RECOVA respeita a minha marca?",
      answer:
        "Sim. A conversa e as alternativas seguem o tom e o visual da sua loja, mantendo a experiência consistente para o shopper.",
    },
    {
      question: "O que acontece com o shopper que abandona?",
      answer:
        "A RECOVA reengaja o shopper que saiu da busca, voltando com o produto certo no momento certo — recuperando vendas que a busca nativa perderia.",
    },
    {
      question: "Como é cobrado?",
      answer:
        "Comece no piloto gratuito. Depois, planos por volume de recuperação, com cancelamento a qualquer momento.",
    },
  ] satisfies FaqItem[],
};

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                   */
/* -------------------------------------------------------------------------- */

export const finalCta = {
  title: "Nenhuma busca merece terminar sem resposta",
  description:
    "Agende uma demonstração e veja a RECOVA resgatar uma venda que sua busca nativa perdeu — na sua loja, com seus produtos.",
  points: ["Implantação em minutos", "Atribuição real", "Sem trocar sua busca"],
  ctaLabel: "Agendar demo",
  ctaHref: "/contact",
};

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export const testimonials = {
  badge: { icon: "/images/icons/badge/testimonials.svg", label: "Depoimentos" },
  title: "O que os lojistas ganham",
  description:
    "Baseado em benchmarks de mercado e no padrão de recuperação de busca em e-commerce.",
  avatarStrip: [
    "/images/avatars/testimonial-strip-1.svg",
    "/images/avatars/testimonial-strip-2.svg",
    "/images/avatars/testimonial-strip-3.svg",
    "/images/avatars/testimonial-strip-4.svg",
    "/images/avatars/testimonial-strip-5.svg",
    "/images/avatars/testimonial-strip-6.svg",
    "/images/avatars/testimonial-strip-7.svg",
    "/images/avatars/testimonial-strip-8.svg",
  ],
  items: [
    { quote: "Lojas que recuperam buscas sem resultado veem aumento médio de conversão — porque o shopper que busca é o que está mais perto de comprar.", name: "Benchmark de mercado", role: "Recuperação de busca", avatar: "/images/avatars/testimonial-1.svg" },
    { quote: "Mais da metade dos shoppers segue a jornada quando recebe alternativas relevantes no momento em que o item não está disponível.", name: "Nosto", role: "Pesquisa de comportamento", avatar: "/images/avatars/testimonial-2.svg" },
    { quote: "A taxa de zero-result ideal é abaixo de 2%. Acima de 3–5%, a loja está perdendo vendas que poderiam ser recuperadas.", name: "Algolia", role: "Playbook de zero-results", avatar: "/images/avatars/testimonial-3.svg" },
    { quote: "80% dos shoppers saem de uma loja por causa de uma busca ruim.", name: "Benchmark de mercado", role: "Experiência de busca", avatar: "/images/avatars/testimonial-4.svg" },
    { quote: "66% dos shoppers não recebem alternativas quando o produto não está disponível.", name: "Pesquisa de e-commerce", role: "Zero-results", avatar: "/images/avatars/testimonial-5.svg" },
    { quote: "Conteúdo interativo pode dobrar as conversões em comparação com páginas estáticas.", name: "Benchmark de mercado", role: "Conversão", avatar: "/images/avatars/testimonial-6.svg" },
    { quote: "74% dos compradores B2B escolhem o fornecedor que primeiro os ajuda a montar o business case.", name: "Pesquisa B2B", role: "Decisão de compra", avatar: "/images/avatars/testimonial-7.svg" },
    { quote: "Prova social perto do CTA pode aumentar a conversão em até 34%.", name: "Benchmark de conversão", role: "Social proof", avatar: "/images/avatars/testimonial-8.svg" },
    { quote: "Schema de dados estruturados pode aumentar o tráfego em até 43%.", name: "Benchmark de SEO", role: "Dados estruturados", avatar: "/images/avatars/testimonial-9.svg" },
  ] satisfies Testimonial[],
};
