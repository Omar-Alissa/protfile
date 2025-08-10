import { FaArrowDown } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { StaggerContainer, StaggerItem } from './animations/AnimatedSection';
import '../styles/Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const arrowRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const arrow = arrowRef.current;
    
    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        title.style.transition = 'opacity 0.8s, transform 0.8s';
      }, 100);
    }
    
    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        subtitle.style.transition = 'opacity 0.8s, transform 0.8s';
      }, 300);
    }
    
    if (arrow) {
      arrow.style.opacity = '0';
      setTimeout(() => {
        arrow.style.opacity = '1';
        arrow.style.transition = 'opacity 0.8s';
      }, 1200);
    }
  }, []);
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient" />
      
      <div className="container hero-content">
        <h1 ref={titleRef} className="hero-title">
          Hej! Jag är <span className="hero-name">Omar Alissa</span>
        </h1>
        
        <p ref={subtitleRef} className="hero-subtitle">
          Utvecklare med passion för att skapa moderna och användarvänliga webbapplikationer
        </p>
        
        <StaggerContainer>
          <div className="buttons-container">
            <StaggerItem>
              <a 
                href="#projects" 
                className="btn-primary"
              >
                Se mina projekt
              </a>
            </StaggerItem>
            <StaggerItem>
              <a 
                href="#contact" 
                className="btn-secondary"
              >
                Kontakta mig
              </a>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
      
      <a ref={arrowRef} href="#about" className="scroll-down-arrow">
        <FaArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
