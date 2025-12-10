import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, CheckCircle, ZoomIn, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-900 z-50 relative pb-20"
    >
      {/* Navigation / Header */}
      <div className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-gradient-to-b from-slate-900/90 to-transparent pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:-translate-x-1 group shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
             <motion.div
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
             >
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all hover:scale-105"
                    >
                      <Github className="w-5 h-5" /> View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-white/20 rounded-full font-bold hover:bg-slate-700 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <h2 className="text-3xl font-display font-bold text-white">The Challenge</h2>
               <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-indigo-500 pl-6">
                 {project.problem}
               </p>
             </motion.div>

             <motion.div
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <h2 className="text-3xl font-display font-bold text-white">My Approach</h2>
               <p className="text-lg text-slate-300 leading-relaxed bg-slate-800/30 p-8 rounded-3xl border border-white/5">
                 {project.approach}
               </p>
             </motion.div>

             <motion.div
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <h2 className="text-3xl font-display font-bold text-white">Key Features</h2>
               <div className="grid sm:grid-cols-2 gap-4">
                 {project.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                     <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                     <span className="text-slate-300">{feature}</span>
                   </div>
                 ))}
               </div>
             </motion.div>

             {/* Gallery Grid */}
             {project.gallery && project.gallery.length > 0 && (
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="space-y-6 pt-8 border-t border-white/10"
               >
                 <h2 className="text-3xl font-display font-bold text-white">Project Gallery</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                   {project.gallery.map((img, idx) => (
                     <div 
                        key={idx} 
                        className={`group relative rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in ${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}
                        onClick={() => setSelectedImage(img)}
                     >
                       <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="px-4 py-2 bg-black/50 backdrop-blur rounded-full text-white text-sm font-bold flex items-center gap-2 border border-white/20">
                            <ZoomIn className="w-4 h-4" /> View Full
                          </span>
                       </div>
                     </div>
                   ))}
                 </div>
               </motion.div>
             )}
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 border border-white/10 p-8 rounded-3xl sticky top-24 backdrop-blur-md"
            >
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <Code className="w-5 h-5 text-indigo-400" /> Tech Stack
               </h3>
               <div className="flex flex-wrap gap-2 mb-8">
                 {project.techStack.map((tech) => (
                   <span key={tech} className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium">
                     {tech}
                   </span>
                 ))}
               </div>

               <h3 className="text-xl font-bold text-white mb-4">Learnings</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 {project.learned}
               </p>

               <div className="h-px bg-white/10 my-6"></div>

               <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-500">Category</span>
                   <span className="text-slate-200 font-medium">{project.category}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-500">ID</span>
                   <span className="text-slate-200 font-medium">#{project.id.padStart(3, '0')}</span>
                 </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;