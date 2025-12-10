import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import Cursor from './components/Cursor';
import { PROJECTS } from './constants';
import { AnimatePresence } from 'framer-motion';

// Simple Particle Component for visual flair
const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    animate();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};

function App() {
  // Simple Router State
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    setCurrentView('project');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
  };

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1e1b4b] to-indigo-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden relative">
      <div className="bg-noise fixed inset-0 z-0 opacity-[0.03]"></div>
      
      <Particles />

      {/* Global Gradient Ambient Light */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <Cursor />
      
      {/* Conditionally render Navbar only on Home for cleaner detail view, or modify Navbar to support routing */}
      {currentView === 'home' && <Navbar />}

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <div key="home">
               <Home onProjectSelect={handleProjectSelect} />
            </div>
          ) : (
            currentProject && (
              <div key="detail">
                <ProjectDetail project={currentProject} onBack={handleBackToHome} />
              </div>
            )
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;