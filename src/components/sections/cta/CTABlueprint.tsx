import { motion } from 'framer-motion';

export function CTABlueprint() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden flex items-end justify-center pb-12 opacity-[0.03]">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1200 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[1200px] h-auto object-cover object-bottom"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Static Lines */}
        <path d="M 100 300 L 250 200 L 400 250 L 550 150 L 750 200 L 900 100 L 1100 250" stroke="currentColor" strokeWidth="1" />
        <path d="M 250 200 L 300 100 L 550 150" stroke="currentColor" strokeWidth="1" />
        <path d="M 400 250 L 500 350 L 750 200" stroke="currentColor" strokeWidth="1" />
        <path d="M 750 200 L 850 300 L 1100 250" stroke="currentColor" strokeWidth="1" />
        
        {/* Ambient Animated Lines */}
        <motion.path 
          d="M 100 300 L 250 200 L 400 250" 
          stroke="currentColor" 
          strokeWidth="2" 
          animate={{ strokeOpacity: [0, 0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 12, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 550 150 L 750 200 L 900 100" 
          stroke="currentColor" 
          strokeWidth="2" 
          animate={{ strokeOpacity: [0, 0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 15, delay: 4, ease: "easeInOut" }}
        />
        
        {/* Nodes */}
        <circle cx="100" cy="300" r="4" fill="currentColor" />
        <circle cx="250" cy="200" r="4" fill="currentColor" />
        <circle cx="400" cy="250" r="4" fill="currentColor" />
        <circle cx="550" cy="150" r="4" fill="currentColor" />
        <circle cx="750" cy="200" r="4" fill="currentColor" />
        <circle cx="900" cy="100" r="4" fill="currentColor" />
        <circle cx="1100" cy="250" r="4" fill="currentColor" />
        <circle cx="300" cy="100" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="500" cy="350" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="850" cy="300" r="3" stroke="currentColor" strokeWidth="1.5" />

        {/* Ambient Pulsing Nodes */}
        <motion.circle 
          cx="400" cy="250" r="6" 
          fill="currentColor" 
          animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="750" cy="200" r="6" 
          fill="currentColor" 
          animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 10, delay: 3, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="1100" cy="250" r="6" 
          fill="currentColor" 
          animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 14, delay: 6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
