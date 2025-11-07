import { Github, Mail, Phone, MapPin, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D scene as background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-cyan-400" />
              <span>Android Developer • AI & Web Specialist</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Ibrahim Abdul Razzak Shaikh
            </h1>
            <p className="mt-3 text-lg text-white/80">CSE (AIML) student with hands-on expertise in Android development, custom ROM engineering, and full‑stack applications. Passionate about performance optimization, system‑level programming, and crafting exceptional user experiences.</p>

            <motion.div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80" initial="hidden" animate="show" variants={{hidden:{},show:{transition:{staggerChildren:0.08}}}}>
              {[{Icon:MapPin, text:'Mumbai, Maharashtra, India', href:null},{Icon:Mail, text:'askibrahim06@gmail.com', href:'mailto:askibrahim06@gmail.com'},{Icon:Phone, text:'+91 99692 79339', href:'tel:+919969279339'},{Icon:Github, text:'github.com/Musafir02', href:'https://github.com/Musafir02'}].map(({Icon,text,href})=> (
                <motion.a key={text} href={href ?? undefined} target={href?.startsWith('http')? '_blank': undefined} rel={href?.startsWith('http')? 'noreferrer': undefined} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 hover:bg-white/10">
                  <Icon className="h-4 w-4 text-cyan-300" /> {text}
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat number="6+" label="Custom ROMs" />
              <Stat number="10K+" label="Downloads" />
              <Stat number="8+" label="Full‑stack apps" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:mx-0"
          >
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mt-1 text-sm text-white/80">B.E. Computer Science & Engineering (AIML)</p>
              <p className="text-sm text-white/60">Theem College of Engineering, Mumbai University</p>
              <p className="mt-1 text-xs text-white/60">Sep 2024 – May 2027 (Expected)</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-white/90">Relevant Coursework</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-white/70">
                  <li>Data Structures & Algorithms, OOP</li>
                  <li>DBMS, Operating Systems</li>
                  <li>AI, Machine Learning</li>
                  <li>Mobile App Development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-semibold text-white">{number}</div>
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
    </motion.div>
  );
}
