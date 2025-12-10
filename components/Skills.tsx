import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs shadow-[0_0_10px_rgba(34,211,238,0.4)] px-3 py-1 rounded-full border border-cyan-500/20">My Arsenal</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mt-6 mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Profficiency</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-indigo-500/20"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl shadow-lg text-indigo-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-display tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group/skill cursor-default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl blur opacity-0 group-hover/skill:opacity-60 transition-opacity duration-300"></div>
                    <div className="relative px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-slate-300 text-sm font-medium group-hover/skill:text-white group-hover/skill:border-white/30 transition-all flex items-center gap-2">
                       {/* Unique detail: small glowing dot */}
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_8px_#22d3ee] transition-all"></span>
                       {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;