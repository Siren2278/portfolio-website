// src/components/Layout/Footer.js
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:john.doe@example.com'
  };

  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dominic Muuo</h3>
            <p className="text-gray-300">
              Full Stack Developer specialized in building exceptional digital experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScroll('home')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('skills')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('projects')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.email}
                className="text-gray-300 hover:text-white"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Dominic Muuo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;