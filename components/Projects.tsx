import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-slate-800/40 rounded-3xl overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(129, 140, 248, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-4 left-4">
           <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white shadow-lg">
             {project.category}
           </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col relative">
        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-md font-medium">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs rounded-md font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
           <span className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all">
             View Project <ArrowRight className="w-4 h-4 text-indigo-400" />
           </span>
           
           {project.githubLink && (
             <div 
               onClick={(e) => { e.stopPropagation(); window.open(project.githubLink, '_blank'); }}
               className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
             >
               <Github className="w-5 h-5" />
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">Selected Works</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-right hidden md:block"
          >
            A collection of projects showcasing my journey in ML, Web Dev, and Automation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} onClick={() => onProjectClick(project.id)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;