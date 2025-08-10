import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import '../styles/Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">Omar Alissa</a>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <a href="#home">Hem</a>
          <a href="#about">Om mig</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>

          <div className="navbar-social">
            <button onClick={toggleDarkMode} className="theme-toggle-btn">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="mobile-controls">
          <button onClick={toggleMenu} className="mobile-menu-btn">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <a href="#home" onClick={toggleMenu}>Hem</a>
          <a href="#about" onClick={toggleMenu}>Om mig</a>
          <a href="#projects" onClick={toggleMenu}>Projekt</a>
          <a href="#contact" onClick={toggleMenu}>Kontakt</a>
          <div className="mobile-menu-social">
            <button onClick={toggleDarkMode} className="theme-toggle-btn">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
