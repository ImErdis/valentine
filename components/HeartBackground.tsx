import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Generate random hearts
const generateHearts = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    delay: Math.random() * 20,
    duration: 10 + Math.random() * 20,
    size: 10 + Math.random() * 40,
  }));
};

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    setHearts(generateHearts(30));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/40 select-none"
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0, scale: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0],
            scale: 1,
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            fontSize: `${heart.size}px`,
            left: 0, 
          }}
        >
          ❤️
        </motion.div>
      ))}
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
    </div>
  );
};

export default HeartBackground;