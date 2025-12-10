import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-panel p-8 md:p-12 rounded-3xl bg-slate-800/30 border border-white/10 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-2 block">About Me</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Driven by Data. <br/>
              <span className="text-slate-400">Defined by Discipline.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
              {PERSONAL_DETAILS.about}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
            {[
              { label: "Years Coding", value: "1+" },
              { label: "Projects", value: "5+" },
              { label: "Internships", value: "0" },
              { label: "Hackathons", value: "1" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-indigo-300 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;