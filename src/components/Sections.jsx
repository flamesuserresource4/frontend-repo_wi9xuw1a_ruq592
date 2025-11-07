import { motion } from 'framer-motion';

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
