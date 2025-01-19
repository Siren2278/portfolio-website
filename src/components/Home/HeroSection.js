import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 px-4 min-h-screen flex items-center bg-gray-900"
    >
      <div className="max-w-7xl mx-auto py-20 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="profile.jpg"
            alt="Profile"
            className="rounded-full mx-auto mb-6 border-4 border-blue-500 w-32 h-32 object-cover"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-bold mb-4"
        >
          Dominic Muuo
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-semibold mb-4 text-blue-500"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          With over 5 years of experience in building scalable web applications,
          I specialize in creating robust solutions using modern technologies.
          Passionate about clean code and user-centric design.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;