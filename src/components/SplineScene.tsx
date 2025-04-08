
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`spline-container ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-robot-purple/10 to-robot-blue/10 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-robot-purple border-r-transparent border-b-robot-blue border-l-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Loading 3D scene...</p>
          </div>
        </div>
      )}
      
      <Spline
        scene={scene}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default SplineScene;
