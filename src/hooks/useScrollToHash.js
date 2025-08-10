import { useEffect } from 'react';

const useScrollToHash = () => {
  useEffect(() => {
    // Funktion för att hantera länk-klick och smidigt skrolla till ankarpunkter
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Beräkna offset för fixed navbar
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Uppdatera URLens hash för att spegla den aktiva sektionen
          history.pushState(null, null, targetId);
        }
      }
    };

    // Lägg till event listeners på alla interna länkar
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Ta bort event listeners vid cleanup
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};

export default useScrollToHash;
