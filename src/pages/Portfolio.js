import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import HeroSection from '../components/Home/HeroSection';
import SkillsSection from '../components/Skills/SkillsSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layout/Footer';
import LoadingSpinner from '../components/Layout/LoadingSpinner';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;