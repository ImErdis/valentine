import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeartBackground from './components/HeartBackground';
import StoryCard from './components/StoryCard';
import FinalSurprise from './components/FinalSurprise';
import { STORY_MESSAGES } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const isStoryComplete = step >= STORY_MESSAGES.length;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-rose-50">
      <HeartBackground />

      <div className="relative z-10 w-full flex justify-center items-center h-full">
        <AnimatePresence mode="wait">
          {!isStoryComplete ? (
            <StoryCard
              key="story-card"
              index={step}
              text={STORY_MESSAGES[step]}
              onNext={handleNext}
            />
          ) : (
            <FinalSurprise key="final-surprise" />
          )}
        </AnimatePresence>
      </div>

      {/* Progress Indicator for the story phase */}
      {!isStoryComplete && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {STORY_MESSAGES.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? 'w-8 bg-rose-600' : 'w-2 bg-rose-200'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;