import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            whileHover={{ y: -2 }}
            className="inline-flex items-center text-gray-300 hover:text-white"
          >
            <Github className="w-5 h-5 mr-1" /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ y: -2 }}
            className="inline-flex items-center text-gray-300 hover:text-white"
          >
            <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;