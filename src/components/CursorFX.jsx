import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFX() {
  // Track mouse and create a smooth trailing cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSlow = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const ySlow = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });
  const xFast = useSpring(x, { stiffness: 300, damping: 25, mass: 0.2 });
  const yFast = useSpring(y, { stiffness: 300, damping: 25, mass: 0.2 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
      {/* Outer glow */}
      <motion.div
        style={{ translateX: xSlow, translateY: ySlow }}
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-2xl"
      />
      {/* Core dot */}
      <motion.div
        style={{ translateX: xFast, translateY: yFast }}
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/90 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
      />
    </div>
  );
}
