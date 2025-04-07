
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineRobotProps {
  className?: string;
}

const SplineRobot: React.FC<SplineRobotProps> = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`spline-robot-container pointer-events-none fixed inset-0 z-50 ${className}`}>
      {!isLoaded && (
        <div className="fixed bottom-4 right-4 bg-robot-purple/80 text-white px-3 py-1 rounded-full text-xs animate-pulse">
          Loading 3D robot...
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/yZaL0SLqdQQ7-DRi/scene.splinecode" 
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default SplineRobot;
