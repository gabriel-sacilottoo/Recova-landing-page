import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Code2,
  Database,
  FileCheck2,
  Filter,
  Gauge,
  GitCompareArrows,
  Github,
  House,
  Info,
  Layers3,
  Link2,
  Linkedin,
  ListChecks,
  Mail,
  Menu,
  MessageCircle,
  PackageSearch,
  Palette,
  Play,
  Plus,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  SpellCheck,
  Star,
  Store,
  Tag,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Workflow,
  X,
  Zap,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  activity: Activity,
  arrow: ArrowUpRight,
  chart: BarChart3,
  bot: Bot,
  briefcase: BriefcaseBusiness,
  calendar: CalendarDays,
  check: Check,
  "check-circle": CheckCircle2,
  chevron: ChevronDown,
  money: CircleDollarSign,
  clock: Clock3,
  code: Code2,
  database: Database,
  "file-check": FileCheck2,
  filter: Filter,
  gauge: Gauge,
  comparison: GitCompareArrows,
  github: Github,
  home: House,
  info: Info,
  layers: Layers3,
  link: Link2,
  linkedin: Linkedin,
  checklist: ListChecks,
  mail: Mail,
  menu: Menu,
  message: MessageCircle,
  products: PackageSearch,
  palette: Palette,
  play: Play,
  plus: Plus,
  refresh: RefreshCcw,
  search: Search,
  settings: Settings2,
  shield: ShieldCheck,
  store: Store,
  bag: ShoppingBag,
  sparkles: Sparkles,
  spellcheck: SpellCheck,
  star: Star,
  tag: Tag,
  target: Target,
  trend: TrendingUp,
  user: UserRound,
  users: Users,
  workflow: Workflow,
  close: X,
  zap: Zap,
} as const;

type IconComponent = (props: LucideProps) => React.ReactNode;

function normalized(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "");
}

/** Maps legacy template asset names and section copy to product-relevant icons. */
function resolveIcon(value: string): IconComponent {
  const key = normalized(value);

  if (key.includes("linkedin")) return iconMap.linkedin;
  if (key.includes("github")) return iconMap.github;
  if (key.includes("menu")) return iconMap.menu;
  if (key.includes("chevron")) return iconMap.chevron;
  if (key.includes("plus")) return iconMap.plus;
  if (key.includes("arrow") || key.includes("up-right")) return iconMap.arrow;
  if (key.includes("check") || key.includes("tick")) return iconMap.check;
  if (key.includes("cross") || key.includes("close")) return iconMap.close;

  if (key.includes("our-team") || key.includes("nosso time") || key.includes("team")) return iconMap.users;
  if (key.includes("comparison") || key.includes("comparacao")) return iconMap.comparison;
  if (key.includes("about") || key === "sobre") return iconMap.info;
  if (key.includes("privacy") || key.includes("privacidade")) return iconMap.shield;
  if (key.includes("contact") || key.includes("contato")) return iconMap.message;
  if (key.includes("waitlist") || key.includes("lista de espera")) return iconMap.clock;
  if (key.includes("changelog")) return iconMap.refresh;
  if (key.includes("pricing") || key.includes("precos")) return iconMap.money;
  if (key.includes("numbers") || key.includes("numeros")) return iconMap.chart;
  if (key.includes("process") || key.includes("processo")) return iconMap.workflow;
  if (key.includes("faq")) return iconMap.message;
  if (key.includes("mobile-app") || key.includes("como funciona")) return iconMap.workflow;
  if (key.includes("download-app") || key.includes("painel")) return iconMap.gauge;
  if (key.includes("benefits") || key.includes("beneficios")) return iconMap.target;
  if (key.includes("features") || key === "recursos") return iconMap.layers;
  if (key.includes("whats-inside") || key.includes("tipos de falha")) return iconMap.search;
  if (key.includes("testimonials") || key.includes("depoimentos")) return iconMap.message;
  if (key.includes("who-can-use") || key.includes("quem pode usar")) return iconMap.users;

  if (key.includes("zero") || key.includes("falha") || key.includes("busca") || key.includes("search")) return iconMap.search;
  if (key.includes("conversa") || key.includes("agente") || key.includes("chat")) return iconMap.bot;
  if (key.includes("alternativa") || key.includes("produto") || key.includes("catalogo")) return iconMap.products;
  if (key.includes("recupera") || key.includes("venda") || key.includes("conversao") || key.includes("impacto")) return iconMap.trend;
  if (key.includes("reengaja") || key.includes("abandono")) return iconMap.refresh;
  if (key.includes("metric") || key.includes("numero") || key.includes("dados") || key.includes("analytics")) return iconMap.chart;
  if (key.includes("atribu") || key.includes("mensur") || key.includes("resultado")) return iconMap.check;
  if (key.includes("camada") || key.includes("nativa") || key.includes("integr")) return iconMap.layers;
  if (key.includes("implant") || key.includes("conect") || key.includes("setup")) return iconMap.zap;
  if (key.includes("filtro") || key.includes("match")) return iconMap.filter;
  if (key.includes("coloquial") || key.includes("sinon") || key.includes("marca") || key.includes("generico")) return iconMap.tag;
  if (key.includes("esgotado") || key.includes("indispon") || key.includes("categoria")) return iconMap.store;
  if (key.includes("ortografia")) return iconMap.spellcheck;
  if (key.includes("tamanho") || key.includes("cor") || key.includes("estilo")) return iconMap.palette;
  if (key.includes("ocasiao") || key.includes("presente")) return iconMap.bag;
  if (key.includes("voz")) return iconMap.message;
  if (key.includes("e-commerce") || key.includes("loja")) return iconMap.store;
  if (key.includes("plataforma")) return iconMap.database;
  if (key.includes("github")) return iconMap.github;
  if (key.includes("calendar") || key.includes("agendar")) return iconMap.calendar;
  if (key.includes("play") || key.includes("demo")) return iconMap.play;
  if (key.includes("star") || key.includes("rating")) return iconMap.star;
  if (key.includes("mail") || key.includes("email")) return iconMap.mail;
  if (key.includes("user") || key.includes("shopper")) return iconMap.user;

  return iconMap.sparkles;
}

export function MeaningfulIcon({
  name,
  size = 24,
  strokeWidth = 1.8,
  ...props
}: LucideProps & { name: string }) {
  const Icon = resolveIcon(name);
  return <Icon aria-hidden size={size} strokeWidth={strokeWidth} {...props} />;
}
