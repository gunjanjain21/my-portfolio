import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
      style={{
        transformOrigin: "0%"
      }}
    >
      <motion.div
        className="h-full bg-[#FF5A5F]"
        style={{ scaleX }}
      />
    </motion.div>
  );
};