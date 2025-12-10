import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-purple-400 font-bold tracking-widest uppercase text-xs">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">Let's Work Together</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm currently looking for new opportunities in Machine Learning and Data Engineering. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-white text-lg font-semibold hover:text-indigo-400 transition-colors">
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-white text-lg font-semibold hover:text-indigo-400 transition-colors">
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white text-lg font-semibold">{PERSONAL_DETAILS.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-4 p-8 bg-slate-800/40 rounded-3xl border border-white/10 shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-slate-600"
                placeholder="Hello..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              aria-busy={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
                submitted ? 'bg-green-600 shadow-[0_0_20px_#16a34a]' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]'
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;