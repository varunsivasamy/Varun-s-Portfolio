import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(targetId);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] md:w-auto`}
      >
        <div className={`
          flex items-center justify-between md:justify-center px-6 py-3 
          rounded-full border border-white/10 backdrop-blur-xl shadow-lg
          ${isScrolled ? 'bg-slate-900/80 shadow-indigo-500/20 border-white/20' : 'bg-slate-800/60 border-white/10'}
          transition-all duration-300
        `}>
          {/* Logo */}
          <a href="#" className="md:hidden text-xl font-display font-bold text-white flex items-center gap-1 mr-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">VS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
             <a href="#" className="font-display font-bold text-white text-lg mr-6 tracking-tight flex items-center hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs mr-2 shadow-lg text-white font-bold">VS</div>
             </a>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] relative group ${
                  activeSection === link.href.substring(1) 
                    ? 'text-white bg-white/10' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            
            <div className="w-px h-4 bg-white/20 mx-3"></div>

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-200 hover:text-white bg-white/5 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-40 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-display font-medium text-slate-300 hover:text-indigo-400 p-3 rounded-xl hover:bg-white/5 transition-all flex justify-between items-center group"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <a
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;