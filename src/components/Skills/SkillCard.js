import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-700 p-6 rounded-lg"
    >
      <div className="flex items-center mb-4">
        {skill.icon}
        <h3 className="ml-2 text-xl font-semibold">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-blue-500 h-2 rounded-full"
        />
      </div>
      <p className="mt-4 text-gray-300 text-sm">{skill.description}</p>
    </motion.div>
  );
};

export default SkillCard;