import React from 'react';
import { Monitor, Server, Code, Cloud, Layout, Lock } from 'lucide-react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
    const skills = [
      {
        name: 'React',
        icon: <Monitor className="w-6 h-6" />,
        level: 90,
        description: 'Building responsive and interactive UIs with modern React, including hooks and context'
      },
      {
        name: 'Django',
        icon: <Server className="w-6 h-6" />,
        level: 85,
        description: 'Creating robust backend systems with Django REST framework and PostgreSQL'
      },
      {
        name: 'Laravel',
        icon: <Code className="w-6 h-6" />,
        level: 80,
        description: 'Developing scalable PHP applications with Laravel and MySQL'
      },
      {
        name: 'DevOps',
        icon: <Cloud className="w-6 h-6" />,
        level: 75,
        description: 'CI/CD pipelines, Docker containerization, and AWS cloud services'
      },
      {
        name: 'UI/UX Design',
        icon: <Layout className="w-6 h-6" />,
        level: 85,
        description: 'Creating intuitive user interfaces with Figma and implementing with Tailwind CSS'
      },
      {
        name: 'Security',
        icon: <Lock className="w-6 h-6" />,
        level: 80,
        description: 'Implementing secure authentication and authorization systems'
      }
    ];
  
    return (
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;