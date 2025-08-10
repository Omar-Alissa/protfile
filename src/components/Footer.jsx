import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">            <a 
              href="https://github.com/Omar-Alissa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/omar-al-issa-5a659b156/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a              href="mailto:omarissa179@gmail.com" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {year} Omar Alissa. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
