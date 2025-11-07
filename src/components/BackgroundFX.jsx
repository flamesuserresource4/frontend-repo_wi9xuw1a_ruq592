import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundFX() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const hue = useTransform(scrollYProgress, [0, 1], [220, 280]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.16]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0">
      {/* Subtle animated gradient backdrop */}
      <motion.div
        style={{ background: hue.to((h) => `radial-gradient(1200px 800px at 15% 10%, hsla(${h},100%,60%,0.12), transparent), radial-gradient(1000px 700px at 85% 80%, hsla(${(hue.get()+40)%360},100%,60%,0.12), transparent)`), opacity }}
        className="absolute inset-0"
      />
      {/* Wireframe grid parallax */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(600px_600px_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
}
