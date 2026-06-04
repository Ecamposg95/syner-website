import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number;
  preset?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'clip-x';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  preset = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      threshold
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) {
      if (preset === 'zoom-in') return 'scale(1)';
      return 'none';
    }
    switch (preset) {
      case 'fade-up': return 'translateY(24px)';
      case 'fade-down': return 'translateY(-24px)';
      case 'fade-left': return 'translateX(-24px)';
      case 'fade-right': return 'translateX(24px)';
      case 'zoom-in': return 'scale(0.96)';
      case 'clip-x': return 'none';
      default: return 'translateY(24px)';
    }
  };

  const getClipPath = () => {
    if (preset !== 'clip-x') return undefined;
    return isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        clipPath: getClipPath(),
        WebkitClipPath: getClipPath(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;

