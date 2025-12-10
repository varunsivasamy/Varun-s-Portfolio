import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ChevronRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_DETAILS.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 relative">
          {/* Decorative blur behind text */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-300 text-xs font-bold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1] mb-6">
              I build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                Intelligent
              </span> <br/>
              Systems.
            </h1>
            
            <div className="h-12 overflow-hidden flex items-center">
               <span className="text-xl md:text-2xl text-slate-400 font-light mr-3">I am a</span>
               <motion.span 
                 key={roleIndex}
                 initial={{ y: 40, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -40, opacity: 0 }}
                 transition={{ duration: 0.5, type: "spring" }}
                 className="text-xl md:text-2xl font-bold text-indigo-300 border-b-2 border-indigo-500/50"
               >
                 {PERSONAL_DETAILS.roles[roleIndex]}
               </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light"
          >
             {PERSONAL_DETAILS.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="#projects" className="group px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center gap-2">
              View Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <div className="flex gap-2">
              <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-white/20 rounded-full transition-all hover:-translate-y-1"><Github className="w-5 h-5"/></a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 border border-white/10 text-slate-300 hover:text-blue-400 hover:bg-slate-700 hover:border-white/20 rounded-full transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5"/></a>
              <a href={`mailto:${PERSONAL_DETAILS.email}`} className="p-4 bg-slate-800/50 border border-white/10 text-slate-300 hover:text-purple-400 hover:bg-slate-700 hover:border-white/20 rounded-full transition-all hover:-translate-y-1"><Mail className="w-5 h-5"/></a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 text-sm text-slate-400 pt-6"
          >
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5"><MapPin className="w-4 h-4 text-indigo-400"/> {PERSONAL_DETAILS.location}</div>
          </motion.div>
        </div>

        {/* Abstract Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ delay: 0.2, duration: 1, type: "spring" }}
           className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto perspective-1000">
            {/* Spinning Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-indigo-500/30 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-purple-500/30 border-dotted"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 rounded-full border border-cyan-500/20"
            />
            
            {/* Central Card Stack */}
            <div className="absolute inset-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group transform hover:rotate-y-12 transition-transform duration-500">
               <div className="absolute inset-0 bg-noise opacity-20"></div>
               <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Varun S" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-display font-bold text-3xl text-white">Varun S.</div>
                  <div className="text-indigo-300 font-medium">Machine Learning Engineer</div>
               </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl"
            >
               <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Current Focus</div>
               <div className="font-bold text-white flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                 Data Analytics
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-slate-800/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl"
            >
               <div className="font-bold text-white text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">5+</div>
               <div className="text-xs text-slate-400 uppercase tracking-wider">Projects Completed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;