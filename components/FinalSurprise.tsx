import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { FINAL_BUTTON_TEXT, FINAL_NOTIFICATION_TITLE, FINAL_NOTIFICATION_BODY } from '../constants';

const FinalSurprise: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-4">
      <AnimatePresence mode="wait">
        {!showNotification ? (
          <motion.button
            key="button"
            className="group relative bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-6 px-12 rounded-full shadow-2xl flex items-center gap-3 text-xl md:text-2xl overflow-hidden hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            {/* Pulsing effect behind the button */}
            <span className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:animate-ping"></span>
            
            <Heart className="w-6 h-6 fill-white animate-pulse" />
            {FINAL_BUTTON_TEXT}
          </motion.button>
        ) : (
          <motion.div
            key="notification"
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-sm mx-4 border-2 border-rose-100"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-rose-100 p-4 rounded-full">
                <Mail className="w-12 h-12 text-rose-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{FINAL_NOTIFICATION_TITLE}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {FINAL_NOTIFICATION_BODY}
            </p>
            
            <div className="mt-8">
               <p className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                 Happy Valentine's Day Mawra
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalSurprise;