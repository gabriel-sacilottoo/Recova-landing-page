/**
 * RECOVA — home-page content.
 * English copy — new solution: quality-gated full search recovery with safe substitution.
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
    text: "Quality-gated AI layer for e-commerce",
    avatars: [
      "/images/avatars/hero-1.svg",
      "/images/avatars/hero-2.svg",
      "/images/avatars/hero-3.svg",
    ],
  },
  title: "Stop selling the wrong product",
  description:
    "RECOVA quality-gates every search. When a shopper can't find the right product — or a result would violate size, compatibility or brand — RECOVA recovers the sale with safe alternatives. Without replacing the search you already have.",
  note: "Recovers sales from zero-results AND wrong-result searches",
  visual: "/images/illustrations/hero-dashboard.png",
  trustedText:
    "Built for any platform — Shopify, VTEX, Wix, Nuvemshop.",
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
  title:
    "Search fails at the exact moment a shopper is closest to buying.",
  stats: [
    { value: "10–20", suffix: "%", label: "of on-site searches return zero results", from: 10, to: 20 },
    { value: "80", suffix: "%", label: "of shoppers leave after a poor search", from: 80, to: 80 },
    { value: "<2", suffix: "ms", label: "for RECOVA to quality-gate every search", from: 2, to: 2 },
  ] satisfies StatItem[],
};

/* -------------------------------------------------------------------------- */
/* What's In (benefits)                                                        */
/* -------------------------------------------------------------------------- */

export const whatsIn = {
  title: "What RECOVA recovers",
  description:
    "A layer that turns search failure — and unsafe results — into a recovered, attributed sale.",
  cards: [
    {
      image: "/images/illustrations/whats-in-card-1.svg",
      background: "/images/illustrations/whats-in-card-1-bg.svg",
      title: "Recovered sales",
      description:
        "Every failed search becomes a conversation with the shopper — and a real chance to buy.",
      aspect: 3.05357,
    },
    {
      image: "/images/illustrations/whats-in-card-2.svg",
      background: "/images/illustrations/whats-in-card-2-bg.svg",
      title: "Safe alternatives",
      description: "Shows options that respect size, compatibility and brand constraints — never a random best-seller.",
      aspect: 2.00712,
    },
    {
      image: "/images/illustrations/whats-in-card-3.svg",
      background: "/images/illustrations/whats-in-card-3-bg.svg",
      title: "Re-engagement",
      description: "Returns to shoppers who left, with the right product at the right moment.",
      aspect: 1.49107,
    },
    {
      image: "/images/illustrations/whats-in-card-4.svg",
      background: "/images/illustrations/whats-in-card-4-bg.svg",
      title: "Keep your search",
      description: "Acts as a layer on top of the native search you already have.",
      aspect: 1.75446,
    },
    {
      image: "/images/illustrations/whats-in-card-5.svg",
      background: "/images/illustrations/whats-in-card-5-bg.svg",
      title: "Measurable impact",
      description: "Every recovered sale is attributed to RECOVA — never estimated.",
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
  badge: { icon: "/images/icons/badge/whats-inside.svg", label: "Search failure types" },
  title: "Works across every type of search failure",
  tags: [
    { icon: "/images/icons/ticker/web-design.svg", label: "Zero results" },
    { icon: "/images/icons/ticker/data-science.svg", label: "Wrong result" },
    { icon: "/images/icons/ticker/digital-marketing.svg", label: "Out of stock" },
    { icon: "/images/icons/ticker/software-development.svg", label: "Synonym search" },
    { icon: "/images/icons/ticker/machine-learning.svg", label: "Constraint violated" },
    { icon: "/images/icons/ticker/graphic-design.svg", label: "Empty category" },
    { icon: "/images/icons/ticker/ai-tools.svg", label: "Ambiguous intent" },
    { icon: "/images/icons/ticker/project-management.svg", label: "Typo" },
    { icon: "/images/icons/ticker/cybersecurity.svg", label: "Plural / singular" },
    { icon: "/images/icons/ticker/cloud-computing.svg", label: "Brand vs. generic" },
    { icon: "/images/icons/ticker/ux-ui-design.svg", label: "Size unavailable" },
    { icon: "/images/icons/ticker/business-analytics.svg", label: "Color unavailable" },
    { icon: "/images/icons/ticker/programming-languages.svg", label: "Price range" },
    { icon: "/images/icons/ticker/seo-techniques.svg", label: "Occasion search" },
    { icon: "/images/icons/ticker/financial-modeling.svg", label: "Colloquial use" },
    { icon: "/images/icons/ticker/mobile-development.svg", label: "Voice search" },
    { icon: "/images/icons/ticker/content-creation.svg", label: "Gift intent" },
    { icon: "/images/icons/ticker/e-commerce.svg", label: "E-commerce" },
  ] satisfies TickerTag[],
};

/* -------------------------------------------------------------------------- */
/* Core features                                                               */
/* -------------------------------------------------------------------------- */

export const coreFeatures = {
  badge: { icon: "/images/icons/badge/features.svg", label: "Features" },
  title: "One layer, three recovery moves",
  description:
    "RECOVA quality-gates every search and guides the shopper safely back to checkout.",
  items: [
    {
      icon: "/images/icons/feature/smart-prioritization.svg",
      title: "Quality-gates every search",
      description: "A deterministic gate scores each search (0–100) and routes it to SILENT, ASSISTED or FULL.",
    },
    {
      icon: "/images/icons/feature/offline-access.svg",
      title: "Understands the real intent",
      description: "Extracts size, compatibility, brand and function — the constraints that matter.",
    },
    {
      icon: "/images/icons/feature/real-time-sync.svg",
      title: "Recovers and re-engages",
      description: "Shows safe alternatives and returns to shoppers who abandoned.",
    },
    {
      icon: "/images/icons/feature/automated-workflows.svg",
      title: "Real attribution",
      description: "Every recovered sale is counted — never estimated.",
    },
    {
      icon: "/images/icons/feature/user-management.svg",
      title: "Blocks unsafe substitutes",
      description: "Never shows 'sneakers → flip-flops'. Constraints hard/soft are enforced by policy.",
    },
    {
      icon: "/images/icons/feature/real-time-notifications.svg",
      title: "Deploys in minutes",
      description: "Connect your store and start recovering the same day.",
    },
  ] satisfies FeatureItem[],
};

/* -------------------------------------------------------------------------- */
/* Numbers                                                                     */
/* -------------------------------------------------------------------------- */

export const numbers = {
  badge: { icon: "/images/icons/badge/numbers.svg", label: "Numbers" },
  title: "The impact of search recovery",
  description:
    "Market data shows the size of the opportunity RECOVA captures.",
  stats: [
    { value: "10–20", suffix: "%", label: "of searches return zero results" },
    { value: "80", suffix: "%", label: "leave after a poor search" },
    { value: "66", suffix: "%", label: "get no alternatives when item is unavailable" },
    { value: "<0.5", suffix: "%", label: "unsafe substitute rate enforced by policy" },
  ] satisfies StatItem[],
};

/* -------------------------------------------------------------------------- */
/* Powerful features (tabs + cards)                                            */
/* -------------------------------------------------------------------------- */

export const powerfulFeatures = {
  badge: { icon: "/images/icons/badge/benefits.svg", label: "Features" },
  title: "What RECOVA does for you",
  highlights: [
    "Quality Gate (0–100) on every search",
    "SILENT · ASSISTED · FULL routing",
    "Safe substitution with constraint blocking",
    "Real order-attributed recovery",
  ],
  items: [
    {
      icon: "/images/icons/feature/resource-library.svg",
      title: "Smart conversation",
      description: "The Rev agent understands intent and refines the search with the shopper.",
    },
    {
      icon: "/images/icons/feature/collaborative-projects.svg",
      title: "Safe alternatives",
      description: "Shows products that meet the intent — and block substitutes that violate constraints.",
    },
    {
      icon: "/images/icons/feature/live-qa.svg",
      title: "Re-engagement",
      description: "Returns to shoppers who left at the right moment.",
    },
    {
      icon: "/images/icons/feature/smart-analytics.svg",
      title: "Clear metrics",
      description: "Exposure, interaction, click and attributed purchase.",
    },
  ] satisfies FeatureItem[],
};

/* -------------------------------------------------------------------------- */
/* Mobile app                                                                  */
/* -------------------------------------------------------------------------- */

export const mobileApp = {
  badge: { icon: "/images/icons/badge/mobile-app.svg", label: "How it works" },
  title: "Watch the recovery happen",
  cardTags: ["Quality-gates the search", "Understands intent"],
  features: [
    { icon: "/images/icons/list/mobile-1.svg", label: "Quality-gates every search" },
    { icon: "/images/icons/list/mobile-2.svg", label: "Understands the intent" },
    { icon: "/images/icons/list/mobile-3.svg", label: "Shows safe alternatives" },
    { icon: "/images/icons/list/mobile-4.svg", label: "Recovers the sale" },
    { icon: "/images/icons/list/mobile-5.svg", label: "Attributes the result" },
    { icon: "/images/icons/list/mobile-6.svg", label: "Re-engages the shopper" },
  ],
  video: {
    title: "See the interactive demo",
    subtitle: "Try the Rev agent",
    thumbnail: "/images/illustrations/mobile-app-video-thumb.png",
  },
};

/* -------------------------------------------------------------------------- */
/* Download app                                                                */
/* -------------------------------------------------------------------------- */

export const downloadApp = {
  badge: { icon: "/images/icons/badge/download-app.svg", label: "Dashboard" },
  title: "See recovery happening, in real time",
  stats: [
    { icon: "/images/icons/list/download-1.svg", label: "+12% conversion" },
    { icon: "/images/icons/list/download-2.svg", label: "$48k recovered / month" },
  ],
  buttons: [
    {
      icon: "/images/icons/google-play.svg",
      small: "View on",
      large: "GitHub",
      href: "https://github.com/patrickpassosb/recova",
    },
    {
      icon: "/images/icons/app-store.svg",
      small: "Book a",
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
  "Quality Gate on every search",
  "SILENT / ASSISTED / FULL routing",
  "Safe substitution with constraint blocking",
  "Re-engagement after 30 seconds",
  "Recovery metrics",
  "Layer on top of your native search",
  "Dedicated support",
];

export const pricing = {
  badge: { icon: "/images/icons/badge/pricing.svg", label: "Pricing" },
  title: "Plans for every store size",
  description:
    "Start with a pilot and scale as recovered revenue grows.",
  plans: [
    {
      name: "Pilot",
      audience: "To validate",
      bestFor: "Best to test",
      price: "Free",
      billingNote: "30-day pilot. No credit card.",
      ctaLabel: "Start pilot",
      ctaHref: "/waitlist",
      includedLabel: "What's included",
      features: BASE_FEATURES,
      activeCount: 4,
      layout: "card",
    },
    {
      name: "Growth",
      audience: "Stores at scale",
      bestFor: "Best for your business",
      price: "$99/mo",
      billingNote: "Billed monthly or yearly. Cancel anytime.",
      ctaLabel: "Start now",
      ctaHref: "/waitlist",
      includedLabel: "What's included",
      features: BASE_FEATURES,
      activeCount: 7,
      layout: "card",
    },
    {
      name: "Enterprise",
      audience: "High volume",
      bestFor: "Best for the whole operation",
      price: "Custom",
      billingNote: "High volume, multiple stores and dedicated SLAs.",
      ctaLabel: "Talk to sales",
      ctaHref: "/contact",
      includedLabel: "What's included",
      features: [
        ...BASE_FEATURES,
        "Multiple stores",
        "Dedicated SLA",
        "Assisted onboarding",
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
  badge: { icon: "/images/icons/badge/comparison.svg", label: "Comparison" },
  title: "RECOVA vs. native search",
  othersLabel: "Native search",
  rows: [
    { others: "Zero results = abandonment", aston: "Zero results = conversation and sale" },
    { others: "Only answers the typed term", aston: "Understands the real intent" },
    { others: "No alternatives when it can't find", aston: "Shows safe, constraint-respecting alternatives" },
    { others: "Shopper who leaves never returns", aston: "Re-engages who abandoned" },
    { others: "Wrong product shown = brand damage", aston: "Blocks unsafe substitutes by policy" },
    { others: "Lost sale is not measured", aston: "Every recovered sale is attributed" },
    { others: "Requires replacing search", aston: "Layer on top of the search you already have" },
    { others: "No recovery metrics", aston: "Dashboard with exposure, click and purchase" },
  ] satisfies ComparisonRow[],
};

/* -------------------------------------------------------------------------- */
/* About us                                                                    */
/* -------------------------------------------------------------------------- */

export const about = {
  badge: { icon: "/images/icons/badge/about-us.svg", label: "About" },
  title: "RECOVA is born from search failure",
  description:
    "Every e-commerce loses sales when search fails — and risks its brand when the wrong product is shown. RECOVA is the AI layer that quality-gates every search, recovers the sale with safe substitutes, and blocks the unsafe ones. Without forcing you to replace the search you already have.",
  primaryCta: { label: "View on GitHub", href: "https://github.com/patrickpassosb/recova" },
  secondaryCta: { label: "Talk to us", href: "/contact" },
  stats: [
    { value: "10–20", suffix: "%", label: "of searches return zero results", from: 10, to: 20 },
    { value: "80", suffix: "%", label: "leave after a poor search", from: 80, to: 80 },
    { value: "<2", suffix: "ms", label: "to quality-gate every search", from: 2, to: 2 },
  ] satisfies StatItem[],
  students: [
    "/images/illustrations/about-student-1.png",
    "/images/illustrations/about-student-2.png",
    "/images/illustrations/about-student-3.png",
  ],
  testimonials: [
    { name: "Fashion retailer", quote: "Search failed and I lost the sale. Now the shopper finds a safe path.", avatar: "/images/avatars/about-1.svg" },
    { name: "Beauty e-commerce", quote: "Zero-results became a conversation. Recovery is real and measurable.", avatar: "/images/avatars/about-2.svg" },
    { name: "Home & decor store", quote: "Without replacing search, we recovered sales we didn't know we were losing.", avatar: "/images/avatars/about-3.svg" },
    { name: "Marketplace", quote: "Attribution is clear: every recovered sale shows up in the dashboard.", avatar: "/images/avatars/about-4.svg" },
    { name: "Shoe store", quote: "The agent understands intent and shows the right size. Impressive.", avatar: "/images/avatars/about-5.svg" },
    { name: "Electronics e-commerce", quote: "Minutes to deploy and results the same day.", avatar: "/images/avatars/about-6.svg" },
  ] satisfies MiniTestimonial[],
};

/* -------------------------------------------------------------------------- */
/* Who can use                                                                 */
/* -------------------------------------------------------------------------- */

export const whoCanUse = {
  badge: { icon: "/images/icons/badge/who-can-use.svg", label: "Who it's for" },
  title: "Made for your type of store",
  items: [
    {
      title: "Fashion & apparel",
      description:
        "Sizes, colors and styles the native search can't understand — RECOVA recovers.",
    },
    { title: "Beauty & cosmetics", description: "Colloquial terms and brands become sales." },
    { title: "Home & decor", description: "Occasion and gift intent, recovered." },
  ] satisfies AudienceItem[],
  panel: {
    image: "/images/illustrations/who-can-use-panel.png",
    avatar: "/images/avatars/who-can-use.png",
    kicker: "Built for retailers",
    title: "Ready to recover?",
    subtitle: "Talk to us now",
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
  },
};

/* -------------------------------------------------------------------------- */
/* Team                                                                        */
/* -------------------------------------------------------------------------- */

export const team = {
  badge: { icon: "/images/icons/badge/our-team.svg", label: "Our team" },
  title: "Who is behind RECOVA",
  members: [
    { name: "Patrick Passos", role: "Tech Lead", photo: "/images/avatars/patrick-passos.png", social: "https://www.linkedin.com/in/patrickpassosb/" },
    { name: "Gabriel Sacilotto", role: "Product & Branding", photo: "/images/avatars/gabriel-sacilotto.jfif", social: "https://www.linkedin.com/in/gabriel-sacilotto-819343365/" },
  ] satisfies TeamMember[],
};

/* -------------------------------------------------------------------------- */
/* Process                                                                     */
/* -------------------------------------------------------------------------- */

export const process = {
  badge: { icon: "/images/icons/badge/process.svg", label: "Process" },
  title: "From zero to your first recovered sale",
  ctaLabel: "Start now",
  ctaHref: "/waitlist",
  steps: [
    {
      step: "Step 01",
      title: "Connect your store",
      description: "Connect RECOVA to your platform in minutes, without replacing search.",
      screen: "/images/illustrations/process-screen-1.png",
    },
    {
      step: "Step 02",
      title: "Validate in the pilot",
      description: "See the first recovered sales and the impact on the dashboard.",
      screen: "/images/illustrations/process-screen-2.png",
    },
    {
      step: "Step 03",
      title: "Scale and measure",
      description: "Grow coverage and track recovered revenue in $.",
      screen: "/images/illustrations/process-screen-3.png",
    },
  ] satisfies ProcessStep[],
};

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export const faq = {
  badge: { icon: "/images/icons/badge/faq.svg", label: "FAQ" },
  title: "Frequently asked questions",
  items: [
    {
      question: "Do I need to replace my search?",
      answer:
        "No. RECOVA acts as a layer on top of the native search you already have. It only engages when the shopper can't find the right product.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Minutes. Connect your store and RECOVA starts recovering sales the same day, without front-end changes.",
    },
    {
      question: "How do I know it's working?",
      answer:
        "The dashboard shows every recovered sale clearly: exposure, interaction, click and attributed purchase. No promises — evidence.",
    },
    {
      question: "Does it work with my platform?",
      answer:
        "RECOVA is platform-agnostic. It works with Shopify, VTEX, Wix, Nuvemshop and others, as a layer on top of search.",
    },
    {
      question: "Does RECOVA respect my brand?",
      answer:
        "Yes. Conversations and alternatives follow your store's tone and visuals — and unsafe substitutes that would damage your brand are blocked.",
    },
    {
      question: "What about the shopper who leaves?",
      answer:
        "RECOVA re-engages shoppers who left, returning with the right product at the right moment — recovering sales native search would lose.",
    },
    {
      question: "How am I charged?",
      answer:
        "Start with a free pilot. After that, plans based on recovery volume, cancellable anytime.",
    },
  ] satisfies FaqItem[],
};

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                   */
/* -------------------------------------------------------------------------- */

export const finalCta = {
  title: "No search deserves to end without an answer",
  description:
    "Book a demo and see RECOVA recover a sale your native search lost — on your store, with your products, and never showing the wrong one.",
  points: ["Deploys in minutes", "Real attribution", "Blocks unsafe substitutes"],
  ctaLabel: "Book a demo",
  ctaHref: "/contact",
};

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export const testimonials = {
  badge: { icon: "/images/icons/badge/testimonials.svg", label: "Testimonials" },
  title: "What retailers gain",
  description:
    "Based on market benchmarks and e-commerce search-recovery patterns.",
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
    { quote: "Stores that recover no-result searches see an average conversion lift — because the shopper who searches is closest to buying.", name: "Market benchmark", role: "Search recovery", avatar: "/images/avatars/testimonial-1.svg" },
    { quote: "More than half of shoppers continue the journey when they receive relevant alternatives at the moment an item is unavailable.", name: "Nosto", role: "Behavior research", avatar: "/images/avatars/testimonial-2.svg" },
    { quote: "The ideal zero-result rate is below 2%. Above 3–5%, the store is losing recoverable sales.", name: "Algolia", role: "Zero-results playbook", avatar: "/images/avatars/testimonial-3.svg" },
    { quote: "80% of shoppers leave a store because of a poor search.", name: "Market benchmark", role: "Search experience", avatar: "/images/avatars/testimonial-4.svg" },
    { quote: "66% of shoppers receive no alternatives when a product is unavailable.", name: "E-commerce research", role: "Zero-results", avatar: "/images/avatars/testimonial-5.svg" },
    { quote: "Shown the wrong substitute, shoppers lose trust — safe substitution is a brand asset.", name: "Market benchmark", role: "Brand integrity", avatar: "/images/avatars/testimonial-6.svg" },
    { quote: "74% of buyers choose the provider that first helps them build the business case.", name: "B2B research", role: "Purchase decision", avatar: "/images/avatars/testimonial-7.svg" },
    { quote: "Social proof near the CTA can lift conversion by up to 34%.", name: "Conversion benchmark", role: "Social proof", avatar: "/images/avatars/testimonial-8.svg" },
    { quote: "Structured data schema can increase traffic by up to 43%.", name: "SEO benchmark", role: "Structured data", avatar: "/images/avatars/testimonial-9.svg" },
  ] satisfies Testimonial[],
};
