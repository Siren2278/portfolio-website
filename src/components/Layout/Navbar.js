import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'skills', 'projects', 'contact'];
  
  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white"
          >
            Dominic muuo
          </motion.div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveSection(item);
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium text-white ${
                  activeSection === item ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
