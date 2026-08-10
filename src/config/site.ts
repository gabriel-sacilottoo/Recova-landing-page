/**
 * RECOVA — central template configuration.
 * Adapted from the Aston template for the RECOVA product.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const siteConfig = {
  /** Brand name, used in metadata, alt text and the footer. */
  name: "RECOVA",
  /** One-line positioning statement shown in the footer. */
  tagline: "A camada de IA que recupera vendas quando a busca nativa falha.",
  /**
   * Canonical production URL — feeds canonicals, the sitemap and OG tags.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  /** Default social-share image (served from /public). */
  ogImage: "/images/illustrations/hero-dashboard.png",

  logo: {
    /** Wordmark used on the dark nav pill. */
    light: "/images/logos/recova-wordmark.svg",
    /** Wordmark used in the footer. */
    footer: "/images/logos/recova-wordmark.svg",
    /** Standalone glyph. */
    mark: "/images/logos/recova-mark.svg",
  },

  /** Primary navigation shown inside the header pill. */
  nav: [
    { label: "Início", href: "/" },
    { label: "Preços", href: "/pricing" },
  ] satisfies NavLink[],

  /** Contents of the header's "All Pages" dropdown. */
  navDropdown: {
    label: "Páginas",
    links: [
      { label: "Início", href: "/" },
      { label: "Preços", href: "/pricing" },
      { label: "Contato", href: "/contact" },
      { label: "Lista de espera", href: "/waitlist" },
      { label: "Changelog", href: "/changelog" },
      { label: "Política de privacidade", href: "/privacy-policy" },
      { label: "404", href: "/404" },
    ] satisfies NavLink[],
  },

  /** Header call-to-action. */
  cta: {
    label: "Agendar demo",
    href: "/contact",
  },

  /** Hero call-to-action. */
  heroCta: {
    label: "Começar piloto grátis",
    href: "/waitlist",
  },

  contact: {
    generalEmail: "ola@recova.ai",
    salesEmail: "vendas@recova.ai",
    bookACallUrl: "https://cal.com/",
  },

  /** Footer link columns. */
  footer: {
    copyright: "RECOVA © 2026 — Recupere as vendas que sua busca perde",
    disclaimer:
      "A RECOVA é uma camada de IA que atua sobre a busca nativa do seu e-commerce, recuperando vendas quando o shopper não encontra o que procura. Resultados podem variar conforme o tráfego e o catálogo de cada loja.",
    columns: [
      {
        title: "Seções",
        links: [
          { label: "Benefícios", href: "/#benefits" },
          { label: "Recursos", href: "/#features" },
          { label: "O que tem dentro", href: "/#what-in" },
          { label: "Preços", href: "/#pricing" },
          { label: "Números", href: "/#numbers" },
          { label: "Comparação", href: "/#comparison" },
          { label: "Começar", href: "/#get-started" },
        ],
      },
      {
        title: "Produto",
        links: [
          { label: "Como funciona", href: "/#mobile-app" },
          { label: "Painel", href: "/#download-app" },
          { label: "Destaque", href: "/#highlight" },
          { label: "Sobre", href: "/#about" },
          { label: "FAQ", href: "/#faq" },
          { label: "Depoimentos", href: "/#testimonial" },
        ],
      },
      {
        title: "Páginas",
        links: [
          { label: "Início", href: "/" },
          { label: "Contato", href: "/contact" },
          { label: "Lista de espera", href: "/waitlist" },
          { label: "Preços", href: "/pricing" },
          { label: "Privacidade", href: "/privacy-policy" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
    ] satisfies FooterColumn[],
  },

  /** Attribution required by the original template licence. */
  credit: {
    label: "Template by Praha",
    href: "https://www.framer.com/@praha/",
    avatar: "/images/illustrations/praha-avatar.png",
    figma: {
      label: "Get Figma File",
      href: "https://www.figma.com/",
      badge: "/images/illustrations/figma-badge.png",
    },
  },

  seo: {
    titleTemplate: "%s",
    defaultTitle: "RECOVA — Recupere as vendas que sua busca perde",
    defaultDescription:
      "A camada de IA que recupera vendas quando a busca nativa de e-commerce falha. Conversa com o shopper, entende a intenção e mostra alternativas reais — sem trocar a busca que você já tem.",
    twitterHandle: "@recova",
  },
} as const;

export type SiteConfig = typeof siteConfig;
