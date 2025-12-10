import React from 'react';
import { EDUCATION, EXPERIENCE, PUBLICATIONS } from '../constants';
import { GraduationCap, Calendar, Trophy, BookOpen, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">My Path</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">Journey & Achievements</h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Education Timeline */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl bg-slate-800/40 border border-white/10 h-full"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 border border-indigo-500/10">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Education</h3>
              </div>
              
              <div className="space-y-12 relative border-l-2 border-slate-700/50 ml-4 pl-8 py-2">
                {EDUCATION.map((edu, index) => (
                  <div key={edu.id} className="relative group">
                    <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-4 border-slate-900 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors font-display">{edu.institution}</h4>
                      <p className="text-slate-200 font-medium mt-1 text-lg">{edu.degree}</p>
                      <div className="flex flex-wrap gap-3 mt-3 text-slate-400 text-sm">
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md"><Calendar className="w-4 h-4 text-indigo-400"/> {edu.year}</span>
                        {edu.score && <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full font-semibold border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">{edu.score}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Hackathons */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl bg-slate-800/40 border border-white/10 h-full"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/10">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Hackathons & Roles</h3>
              </div>
              
              <div className="space-y-10 relative border-l-2 border-slate-700/50 ml-4 pl-8 py-2">
                {EXPERIENCE.map((exp, index) => (
                  <div key={exp.id} className="relative group">
                     <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-4 border-slate-900 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-display">{exp.company}</h4>
                      <p className="text-slate-200 font-medium mt-1 text-base flex items-center gap-2">
                        {exp.role} 
                        {exp.type === 'hackathon' && <span className="text-[10px] uppercase bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">Hackathon</span>}
                        {exp.type === 'position' && <span className="text-[10px] uppercase bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">Leadership</span>}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {exp.description.map((desc, i) => (
                           <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                             {desc}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>

        {/* Publications */}
        {PUBLICATIONS.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-3xl bg-slate-800/30 border border-white/10"
          >
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 border border-purple-500/10">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Publications</h3>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PUBLICATIONS.map((pub, idx) => (
                  <div key={pub.id} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1 group">
                    <h4 className="font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{pub.title}</h4>
                    <p className="text-xs text-indigo-300 mb-3 uppercase tracking-wider">{pub.journal}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{pub.description}</p>
                  </div>
                ))}
             </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Experience;