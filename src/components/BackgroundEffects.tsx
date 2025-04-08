
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-robot-purple/20 to-robot-blue/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-1/3 h-60 w-60 rounded-full bg-gradient-to-br from-robot-cyan/20 to-robot-blue/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-robot-purple/10 to-robot-cyan/20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Light beams */}
      <motion.div
        className="absolute -top-10 left-1/4 h-40 w-1 bg-gradient-to-b from-robot-purple/40 to-transparent blur-md"
        animate={{
          height: [160, 200, 160],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -top-10 right-1/3 h-80 w-1 bg-gradient-to-b from-robot-blue/30 to-transparent blur-md"
        animate={{
          height: [320, 380, 320],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
