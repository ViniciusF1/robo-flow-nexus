
import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          mixBlendMode: 'difference'
        }}
      >
        <div className="h-3 w-3 rounded-full bg-white ring-2 ring-robot-purple/50 shadow-lg shadow-robot-purple/30"></div>
      </div>
      
      {/* Trailing effect */}
      <div 
        className="pointer-events-none fixed z-40 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(2)`,
          opacity: 0.3
        }}
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-robot-purple/20 to-robot-blue/20 blur-sm"></div>
      </div>
    </>
  );
};

export default CursorFollower;
