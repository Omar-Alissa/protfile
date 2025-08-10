import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import useScrollToHash from './hooks/useScrollToHash';
import './App.css';

function App() {
  // På första render, skrolla tillbaka till toppen (om användaren refreshar på någon position)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Använd vår scroll-hook
  useScrollToHash();

  return (
    <ThemeProvider>
      <div className="app-container">
        <a href="#main" className="skip-to-content">Skippa till innehåll</a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
