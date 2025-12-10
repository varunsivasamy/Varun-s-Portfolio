import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

interface HomeProps {
  onProjectSelect: (projectId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProjectSelect }) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects onProjectClick={onProjectSelect} />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;