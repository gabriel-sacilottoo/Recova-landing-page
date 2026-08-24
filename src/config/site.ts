/**
 * RECOVA — central template configuration.
 * Adapted from the Aston template for the RECOVA product.
 * English copy — new solution (full search, Quality Gate, safe substitution).
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
  tagline:
    "The AI layer that prevents your store from selling the wrong product — and recovers the sale when search fails.",
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
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ] satisfies NavLink[],

  /** Contents of the header's "All Pages" dropdown. */
  navDropdown: {
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Waitlist", href: "/waitlist" },
      { label: "Changelog", href: "/changelog" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "404", href: "/404" },
    ] satisfies NavLink[],
  },

  /** Header call-to-action. */
  cta: {
    label: "Book a demo",
    href: "/contact",
  },

  /** Hero call-to-action. */
  heroCta: {
    label: "Start a free pilot",
    href: "/waitlist",
  },

  contact: {
    generalEmail: "hello@recova.ai",
    salesEmail: "sales@recova.ai",
    bookACallUrl: "https://cal.com/",
  },

  /** Footer link columns. */
  footer: {
    copyright: "RECOVA © 2026 — Recover the sales your search loses",
    disclaimer:
      "RECOVA is an AI layer that sits on top of your native e-commerce search, recovering sales when a shopper can't find the right product — and blocking unsafe substitutions that damage your brand. Results vary by store traffic and catalog.",
    columns: [
      {
        title: "Sections",
        links: [
          { label: "Benefits", href: "/#benefits" },
          { label: "Features", href: "/#features" },
          { label: "What's inside", href: "/#what-in" },
          { label: "Pricing", href: "/#pricing" },
          { label: "Numbers", href: "/#numbers" },
          { label: "Comparison", href: "/#comparison" },
          { label: "Get started", href: "/#get-started" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "How it works", href: "/#mobile-app" },
          { label: "Dashboard", href: "/#download-app" },
          { label: "Highlights", href: "/#highlight" },
          { label: "About", href: "/#about" },
          { label: "FAQ", href: "/#faq" },
          { label: "Testimonials", href: "/#testimonial" },
        ],
      },
      {
        title: "Pages",
        links: [
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Waitlist", href: "/waitlist" },
          { label: "Pricing", href: "/pricing" },
          { label: "Privacy", href: "/privacy-policy" },
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
    defaultTitle: "RECOVA — Stop selling the wrong product",
    defaultDescription:
      "RECOVA is the AI layer that prevents your store from selling the wrong product and recovers the sale when search fails. Quality-gated search recovery with safe substitution — without replacing the search you already have.",
    twitterHandle: "@recova",
  },
} as const;

export type SiteConfig = typeof siteConfig;
