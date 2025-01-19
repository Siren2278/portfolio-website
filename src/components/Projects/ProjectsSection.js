import React from 'react';
import ProjectCard from './ProjectCard'; 

const ProjectsSection = () => {
    const projects = [
      {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
        tech: ['React', 'Django', 'PostgreSQL', 'Stripe', 'Redis'],
        github: '#',
        demo: '#'
      },
      {
        title: 'Task Management System',
        description: 'Enterprise task management app with real-time updates, file sharing, and team collaboration features.',
        tech: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
        github: '#',
        demo: '#'
      },
      {
        title: 'AI Content Generator',
        description: 'Web application that leverages OpenAI API to generate and optimize content for different platforms.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI'],
        github: '#',
        demo: '#'
      },
      {
        title: 'DevOps Dashboard',
        description: 'Monitoring dashboard for tracking CI/CD pipelines, server health, and deployment status.',
        tech: ['React', 'Express', 'Docker', 'AWS'],
        github: '#',
        demo: '#'
      }
    ];
  
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;