
import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom class to body for better scrolling
    document.body.classList.add('custom-scroll');
    
    // Add CSS for custom scrollbar
    const style = document.createElement('style');
    style.textContent = `
      .custom-scroll {
        overflow-y: overlay;
      }
      
      /* Custom scrollbar */
      .custom-scroll::-webkit-scrollbar {
        width: 6px;
      }
      
      .custom-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .custom-scroll::-webkit-scrollbar-thumb {
        background: rgba(122, 40, 203, 0.4);
        border-radius: 10px;
      }
      
      .custom-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(122, 40, 203, 0.7);
      }
    `;
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('custom-scroll');
      document.head.removeChild(style);
    };
  }, []);
  
  return null; // This is a behavior component, no UI
};

export default SmoothScroll;
