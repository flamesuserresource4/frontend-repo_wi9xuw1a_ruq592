import { Trophy, GitBranch, Wrench, Users } from 'lucide-react';
import { Section } from './Sections';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: Wrench,
    title: 'ROM Development Impact',
    detail: 'Built and maintained 6+ custom Android ROMs with 10K+ downloads and active communities (1,500+ members).',
  },
  {
    icon: Trophy,
    title: 'Automation Excellence',
    detail: 'Reduced manual build processes by 85% via GitHub Actions and custom scripting.',
  },
  {
    icon: GitBranch,
    title: 'Open Source Contributions',
    detail: '50+ merged pull requests across 3+ open-source Android projects.',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    detail: 'Provided support and documentation to 1,500+ users across XDA and Telegram.',
  },
];

export default function Achievements() {
  return (
    <Section title="Key Achievements" subtitle="Impact across engineering, automation, and open-source.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => (
          <AchievementCard key={a.title} {...a} />
        ))}
      </div>
    </Section>
  );
}

function AchievementCard({ icon: Icon, title, detail }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/75">{detail}</p>
    </motion.div>
  );
}
