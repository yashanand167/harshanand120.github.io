'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex justify-center">
      <div className="w-full max-w-4xl relative">
        <motion.div
          className="absolute top-0 right-2 bottom-0 w-0.5 bg-zinc-900 dark:bg-zinc-100 origin-top"
          style={{ scaleY }}
        />
      </div>
    </div>
  );
}
