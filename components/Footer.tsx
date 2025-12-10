import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050914] py-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Designed with a cosmic vibe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;