import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md"
      >
        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Sidan kunde inte hittas</h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sidan du söker finns inte eller har flyttats. Kontrollera URL:en eller återvänd till startsidan.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
        >
          <FaHome className="mr-2" /> Gå till startsidan
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
