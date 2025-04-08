
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  text: string;
  type: 'robot' | 'thinking';
}

interface MousePosition {
  x: number;
  y: number;
}

const SpeakingRobot: React.FC = () => {
  const [message, setMessage] = useState<Message | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  const robotMessages = [
    "Hello! I'm your AI automation assistant.",
    "I can help streamline your enterprise workflows.",
    "Ask me about process automation!",
    "Want to see how I can save you time?",
    "I learn and adapt to your business needs.",
  ];
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    // Show initial message
    setTimeout(() => {
      showRandomMessage();
    }, 2000);
    
    // Set up message cycle
    const intervalId = setInterval(() => {
      showRandomMessage();
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const showRandomMessage = () => {
    // Show thinking animation
    setMessage({ text: "...", type: 'thinking' });
    setIsAnimating(true);
    
    // Then show actual message
    setTimeout(() => {
      const randomMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
      setMessage({ text: randomMessage, type: 'robot' });
      setIsAnimating(false);
    }, 1500);
  };

  // Calculate eye movement based on mouse position
  const calculateEyePosition = (eyeRef: React.RefObject<HTMLDivElement>) => {
    if (!eyeRef.current) return { x: 0, y: 0 };
    
    const eye = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;
    
    // Limit eye movement
    const maxMovement = 1.5;
    
    // Calculate direction
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;
    
    // Normalize and apply max movement
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const normalizedX = distance > 0 ? deltaX / distance : 0;
    const normalizedY = distance > 0 ? deltaY / distance : 0;
    
    return {
      x: normalizedX * maxMovement,
      y: normalizedY * maxMovement
    };
  };
  
  // Refs for eye positions
  const leftEyeRef = React.useRef<HTMLDivElement>(null);
  const rightEyeRef = React.useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Robot visualization */}
      <motion.div 
        className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-robot-blue/10 to-robot-purple/5 flex items-center justify-center relative overflow-hidden border border-white/10 backdrop-blur-sm">
          {/* Robot face/head */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-robot-purple/80 to-robot-blue/80 flex items-center justify-center shadow-lg relative">
            {/* Robot eyes */}
            <div ref={leftEyeRef} className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-inner">
              <motion.div 
                className="w-3 h-3 rounded-full bg-robot-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  x: leftEyeRef.current ? calculateEyePosition(leftEyeRef).x : 0,
                  y: leftEyeRef.current ? calculateEyePosition(leftEyeRef).y : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
              />
            </div>
            
            <div ref={rightEyeRef} className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-inner">
              <motion.div 
                className="w-3 h-3 rounded-full bg-robot-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  x: rightEyeRef.current ? calculateEyePosition(rightEyeRef).x : 0,
                  y: rightEyeRef.current ? calculateEyePosition(rightEyeRef).y : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
              />
            </div>
            
            {/* Robot mouth */}
            <motion.div 
              className="absolute bottom-1/4 w-16 h-2 bg-white/80 rounded-full"
              animate={isAnimating ? {
                scaleY: [1, 1.5, 1, 1.8, 1],
                scaleX: [1, 0.8, 1, 0.7, 1],
              } : {}}
              transition={{ duration: 0.8, repeat: isAnimating ? Infinity : 0 }}
            />
            
            {/* Antenna */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300">
              <motion.div 
                className="w-3 h-3 rounded-full bg-robot-cyan absolute -top-2 left-1/2 transform -translate-x-1/2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            
            {/* Light effects */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20"></div>
          </div>
          
          {/* Orbiting particles */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-robot-purple/70 shadow-lg shadow-robot-purple/30"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: "center center",
              top: "calc(50% - 60px)",
              left: "calc(50% - 2px)",
            }}
          />
          
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-robot-cyan/70 shadow-lg shadow-robot-cyan/30"
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: "center center",
              top: "calc(50% - 2px)",
              left: "calc(50% - 70px)",
            }}
          />
        </div>
      </motion.div>
      
      {/* Speech bubble */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-xs bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg mb-8 text-center"
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white dark:bg-gray-800"></div>
          {message.type === 'thinking' ? (
            <div className="flex justify-center space-x-1">
              <motion.div 
                className="w-2 h-2 rounded-full bg-robot-purple"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-robot-blue"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop", delay: 0.1 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-robot-cyan"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
              />
            </div>
          ) : (
            <p className="text-gray-800 dark:text-gray-100">{message.text}</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SpeakingRobot;
