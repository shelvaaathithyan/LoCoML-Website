import { motion } from 'framer-motion';

export function CommitmentTimeline() {
  const duration = 4; // 4 seconds for pulse to travel

  const steps = [
    { label: "Open Source", pos: 0, nodeHit: 0 },
    { label: "Intelligence", pos: 33.33, nodeHit: 0.3333 },
    { label: "Autonomous ML", pos: 66.66, nodeHit: 0.6666 },
    { label: "Self-Evolving Systems", pos: 100, nodeHit: 1 }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 relative mt-20 md:mt-24 lg:mt-[100px]">
      
      {/* Mobile/Tablet Stacked Version */}
      <div className="md:hidden flex flex-col items-start gap-12 font-mono tracking-widest uppercase text-[13px] relative">
        
        {/* Track Line */}
        <div className="absolute left-[5px] top-1 bottom-1 w-[1px] bg-slate-200" />
        
        {/* Pulse (Mobile Vertical) */}
        <motion.div 
          className="absolute left-[3.5px] w-1 h-[6px] bg-primary rounded-full z-10 opacity-80"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />

        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          
          return (
            <div key={i} className="flex items-center gap-6 relative z-10 h-3">
              {/* Node */}
              {!isLast ? (
                <motion.div 
                  className="w-3 h-3 rounded-full border-[1.5px] bg-slate-50 flex-shrink-0"
                  animate={{ 
                    borderColor: ["#cbd5e1", "#2563eb", "#cbd5e1", "#cbd5e1"],
                  }}
                  transition={{ 
                    duration, 
                    repeat: Infinity, 
                    times: [
                      Math.max(0, step.nodeHit - 0.01), 
                      step.nodeHit, 
                      Math.min(1, step.nodeHit + 0.08), 
                      1
                    ],
                    ease: "linear" 
                  }}
                />
              ) : (
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary flex-shrink-0"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              
              <span className={isLast ? "text-primary font-semibold" : "text-slate-500"}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop Horizontal Version */}
      <div className="hidden md:flex flex-col relative w-full h-12">
        
        {/* Track Line */}
        <div className="absolute top-[5px] left-0 right-0 h-[1px] bg-slate-200" />
        
        {/* Pulse (Desktop Horizontal) */}
        <motion.div 
          className="absolute top-[3.5px] h-1 w-[6px] bg-primary rounded-full z-10 opacity-80"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />

        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          
          return (
            <div 
              key={i} 
              className="absolute top-0 flex flex-col items-center justify-start gap-4 -translate-x-1/2"
              style={{ left: `${step.pos}%` }}
            >
              {/* Node */}
              {!isLast ? (
                <motion.div 
                  className="w-3 h-3 rounded-full border-[1.5px] bg-slate-50 z-10"
                  animate={{ 
                    borderColor: ["#cbd5e1", "#2563eb", "#cbd5e1", "#cbd5e1"],
                  }}
                  transition={{ 
                    duration, 
                    repeat: Infinity, 
                    times: [
                      Math.max(0, step.nodeHit - 0.01), 
                      step.nodeHit, 
                      Math.min(1, step.nodeHit + 0.08), 
                      1
                    ],
                    ease: "linear" 
                  }}
                />
              ) : (
                <motion.div 
                  className="w-3 h-3 rounded-full bg-primary z-10"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              
              <span className={`font-mono tracking-widest uppercase text-[13px] whitespace-nowrap ${isLast ? "text-primary font-semibold" : "text-slate-500"}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
