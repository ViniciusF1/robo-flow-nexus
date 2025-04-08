
import { useEffect } from 'react';

// This component enables smooth scrolling behavior across the site
const SmoothScroll = () => {
  useEffect(() => {
    // Save original styles
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
    
    // Apply smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up function to restore original style
    return () => {
      document.documentElement.style.scrollBehavior = originalStyle;
    };
  }, []);

  return null;
};

export default SmoothScroll;
