import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold">Let's build something great</h3>
            <p className="mt-2 text-sm text-white/70">Open to internships, freelance, and collaborations in Android, AI/ML, and full‑stack.</p>
          </motion.div>
          <div className="space-y-2 text-sm">
            <a href="mailto:askibrahim06@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" /> askibrahim06@gmail.com
            </a>
            <a href="tel:+919969279339" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Phone className="h-4 w-4 text-cyan-300" /> +91 99692 79339
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4 text-cyan-300" /> Mumbai, Maharashtra, India
            </div>
            <a href="https://github.com/Musafir02" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Github className="h-4 w-4 text-cyan-300" /> github.com/Musafir02
            </a>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm text-white/60 md:text-right">
            <p>© {new Date().getFullYear()} Ibrahim A. R. Shaikh. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
