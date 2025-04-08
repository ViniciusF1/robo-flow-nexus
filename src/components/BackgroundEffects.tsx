
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-robot-dark"
        style={{
          opacity: 1 - Math.min(scrollY / 1000, 0.3)
        }}
      />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-robot-purple/10 dark:bg-robot-purple/5 blur-3xl"
        animate={{
          x: ['-25vw', '-15vw', '-25vw'],
          y: ['10vh', '30vh', '10vh'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '10%',
          left: '20%',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-robot-blue/10 dark:bg-robot-blue/5 blur-3xl"
        animate={{
          x: ['10vw', '20vw', '10vw'],
          y: ['5vh', '-5vh', '5vh'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          bottom: '10%',
          right: '20%',
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-robot-cyan/10 dark:bg-robot-cyan/5 blur-3xl"
        animate={{
          x: ['-10vw', '0vw', '-10vw'],
          y: ['-15vh', '-5vh', '-15vh'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          bottom: '30%',
          left: '50%',
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Light beam effect */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[50vw] h-[60vh] bg-gradient-to-b from-robot-purple/20 to-transparent blur-3xl"
        style={{
          opacity: 0.3 - (scrollY / 2000)
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
