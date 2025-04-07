
import React, { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value) => value.toLocaleString(),
  className,
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<number>(start);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            startAnimation();
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.1,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timerRef.current !== null) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [end, duration, delay]);

  const startAnimation = () => {
    startTimeRef.current = Date.now();
    if (timerRef.current !== null) {
      cancelAnimationFrame(timerRef.current);
    }
    
    const step = () => {
      const now = Date.now();
      const elapsed = now - (startTimeRef.current || now);
      const progress = Math.min(elapsed / duration, 1);
      
      countRef.current = start + Math.floor((end - start) * progress);
      setCount(countRef.current);
      
      if (progress < 1) {
        timerRef.current = requestAnimationFrame(step);
      }
    };
    
    timerRef.current = requestAnimationFrame(step);
  };

  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={elementRef} className={className}>
      {formatter(count)}
    </div>
  );
};

export default AnimatedNumber;
