import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button';
      
      // Check for loading states (aria-busy or class 'loading')
      // This allows buttons to communicate "working" state to the cursor
      const closestBtn = target.closest('button');
      const isLoadingState = 
         target.getAttribute('aria-busy') === 'true' || 
         (closestBtn && closestBtn.getAttribute('aria-busy') === 'true') ||
         target.classList.contains('loading');

      setIsHovering(!!isInteractive);
      setIsLoading(!!isLoadingState);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%', 
          translateY: '-50%' 
        }}
      >
        <motion.div
            animate={{ 
                scale: isClicking ? 0.8 : isHovering ? 0 : 1, // Disappear inner dot on hover to let ring take over
            }}
            className="w-2 h-2 bg-cyan-400 rounded-full"
        />
      </motion.div>

      {/* Main HUD Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex items-center justify-center mix-blend-exclusion"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%', 
          translateY: '-50%' 
        }}
      >
        <motion.div 
            className="relative flex items-center justify-center"
            animate={{ 
                width: isHovering ? 48 : 24,
                height: isHovering ? 48 : 24,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Rotating Outer Ring */}
            <motion.div 
                className={`absolute inset-0 rounded-full border border-white/80`}
                animate={{ 
                    rotate: isLoading ? 360 : isHovering ? 90 : 0,
                    scale: isClicking ? 0.8 : 1,
                    borderColor: isClicking ? '#22d3ee' : 'rgba(255, 255, 255, 0.8)'
                }}
                transition={{ 
                    rotate: { duration: isLoading ? 1 : 0.4, repeat: isLoading ? Infinity : 0, ease: isLoading ? "linear" : "easeInOut" },
                    scale: { duration: 0.1 }
                }}
            />
            
            {/* Crosshair Ticks - Only visible on Hover */}
            <motion.div 
                className="absolute inset-0"
                animate={{ 
                    opacity: isHovering ? 1 : 0, 
                    rotate: isClicking ? 45 : 0 
                }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-cyan-400"></div>
            </motion.div>

            {/* Loading Spinner Indicator */}
            {isLoading && (
                <motion.div 
                    className="absolute inset-[-6px] border-2 border-cyan-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                />
            )}
            
            {/* Click Ripple Effect */}
            {isClicking && (
                <motion.div 
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
            )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Cursor;