import { Brain, Code2, Database, Smartphone, Cog, CircuitBoard } from 'lucide-react';
import { Section } from './Sections';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['C/C++', 'Python', 'Java', 'JavaScript', 'Dart', 'Bash'],
  },
  {
    title: 'Frontend',
    icon: Brain,
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter', 'Framer Motion'],
  },
  {
    title: 'Backend & DB',
    icon: Database,
    items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Mobile & System',
    icon: Smartphone,
    items: ['Android SDK', 'AOSP', 'Custom ROMs', 'Kernel Optimization', 'Flutter'],
  },
  {
    title: 'DevOps & Tools',
    icon: Cog,
    items: ['Git', 'GitHub Actions', 'Linux', 'SSH', 'VPS', 'Gerrit', 'CI/CD'],
  },
  {
    title: 'AI/ML',
    icon: CircuitBoard,
    items: ['NLP', 'OpenAI API', 'TensorFlow', 'Model Integration'],
  },
];

export default function Skills() {
  return (
    <Section title="Technical Skills" subtitle="A well-rounded stack across systems, mobile, web, and AI.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <SkillCard key={group.title} {...group} />)
        )}
      </div>
    </Section>
  );
}

function SkillCard({ title, icon: Icon, items }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <motion.span key={item} whileHover={{ scale: 1.05 }} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
