import { ExternalLink, Sparkles, Bot, Store, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'Custom ROM Development',
    stack: ['Infinity X ROM', 'Matrixx OS', 'Rising OS Revived', 'AlphaDroid', 'Lineage OS', 'Custom Kernel'],
    description:
      'Built and maintained multiple Android ROMs with performance optimizations and active user communities (10K+ downloads).',
  },
  {
    title: 'PashuPehchan',
    stack: ['Flutter', 'Firebase', 'ML'],
    description:
      'AI-powered cattle breed recognition with real-time inference using Firebase ML Kit, achieving 87% accuracy across 15+ breeds.',
    icon: Sparkles,
  },
  {
    title: 'Vertex AI Chat Application',
    stack: ['React', 'Node', 'Gemini 2.5 Flash', 'WebSockets'],
    description:
      'Real-time chat with custom prompt engineering and WebSockets for instant delivery; 92% user satisfaction on relevance.',
    icon: Bot,
  },
  {
    title: 'Bookstore E‑Commerce Platform',
    stack: ['Full‑stack'],
    description:
      'End-to-end e-commerce implementation with product listings, cart, and checkout flows.',
    icon: Store,
  },
  {
    title: 'Anya Telegram Bot',
    stack: ['Python', 'Telegram API'],
    description:
      'Feature-rich bot serving 50+ groups with moderation, welcomes, analytics, and plugin system with admin panel.',
    icon: MessageSquare,
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-white/70">Selected work across Android, AI/ML, and full‑stack development.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, stack, description, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          {Icon ? <Icon className="h-5 w-5 text-cyan-300" /> : <Sparkles className="h-5 w-5 text-cyan-300" />}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/75">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{s}</span>
        ))}
      </div>
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
    </div>
  );
}
