import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent"
      />
    </div>
  );
};

export default LoadingSpinner;