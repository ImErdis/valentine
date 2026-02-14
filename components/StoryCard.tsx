import React from 'react';
import { motion } from 'framer-motion';

interface StoryCardProps {
  text: string;
  onNext: () => void;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ text, onNext, index }) => {
  return (
    <motion.div
      key={index} // Key change triggers animation
      className="relative z-10 p-8 max-w-md w-full text-center cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={onNext}
    >
      <h1 className="font-handwriting text-4xl md:text-6xl text-rose-600 mb-6 drop-shadow-sm">
        {text}
      </h1>
      <motion.p
        className="text-rose-400 text-sm font-medium uppercase tracking-widest mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        (Tap to continue)
      </motion.p>
    </motion.div>
  );
};

export default StoryCard;