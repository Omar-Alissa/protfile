import { useEffect, useRef } from 'react';
import '../../styles/AnimatedSection.css';

export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            ref.current.classList.add('visible');
          }, delay * 1000);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={ref} className="fade-in-up">
      {children}
    </div>
  );
};

export const StaggerContainer = ({ children }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('visible');
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <div ref={ref} className="stagger-container">
      {children}
    </div>
  );
};

export const StaggerItem = ({ children }) => {
  return (
    <div className="stagger-item">
      {children}
    </div>
  );
};
