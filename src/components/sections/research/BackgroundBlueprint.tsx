import { motion } from 'framer-motion';

export function BackgroundBlueprint() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.03] text-slate-900 flex items-center justify-center">
      {/* Base Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}
      />

      {/* Semantic Graphic: Dataset -> Task -> Pipeline -> Validation */}
      <div className="relative w-[800px] h-[400px] font-mono text-[10px]">
        {/* Nodes */}
        <div className="absolute left-[10%] top-[30%] w-3 h-3 border-[1.5px] border-current rounded-full" />
        <div className="absolute left-[30%] top-[30%] w-3 h-3 border-[1.5px] border-current rounded-full" />
        <div className="absolute left-[60%] top-[30%] w-3 h-3 border-[1.5px] border-current rounded-full" />
        <div className="absolute left-[80%] top-[30%] w-3 h-3 border-[1.5px] border-current rounded-full" />
        
        {/* Text Labels */}
        <div className="absolute left-[10%] top-[34%] -translate-x-1/2">DATASET</div>
        <div className="absolute left-[30%] top-[34%] -translate-x-1/2">TASK_INFERENCE</div>
        <div className="absolute left-[60%] top-[34%] -translate-x-1/2">PIPELINE_GRAPH</div>
        <div className="absolute left-[80%] top-[34%] -translate-x-1/2">SEMANTIC_VALIDATION</div>

        {/* Static Connections */}
        <div className="absolute left-[10%] top-[calc(30%+5px)] w-[20%] h-[1.5px] bg-current origin-left" />
        <div className="absolute left-[30%] top-[calc(30%+5px)] w-[30%] h-[1.5px] bg-current origin-left" />
        <div className="absolute left-[60%] top-[calc(30%+5px)] w-[20%] h-[1.5px] bg-current origin-left" />

        {/* Subtle Micro-Animation: Node Pulse (pulsing the 3rd node) */}
        <motion.div 
          className="absolute left-[60%] top-[30%] w-3 h-3 bg-current rounded-full"
          animate={{ opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1], ease: "easeInOut" }}
        />

        {/* Subtle Micro-Animation: Line Draw (Task -> Pipeline) */}
        <div className="absolute left-[30%] top-[calc(30%+5px)] w-[30%] h-[2px] bg-current origin-left scale-x-0" />
        <motion.div 
          className="absolute left-[30%] top-[calc(30%+5px)] w-[30%] h-[2px] bg-current origin-left"
          animate={{ scaleX: [0, 1, 1, 0, 0], opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.3, 0.4, 1], ease: "easeInOut" }}
        />

        {/* Secondary Branches for technical feel */}
        <div className="absolute left-[60%] top-[calc(30%+5px)] w-[1.5px] h-20 bg-current" />
        <div className="absolute left-[60%] top-[calc(30%+85px)] w-2 h-2 border border-current rotate-45 -translate-x-[3px]" />
        
        {/* Decorative structural elements */}
        <div className="absolute right-[5%] bottom-[10%] border border-current p-2 tracking-widest uppercase">
          Sys_Architecture_v2.0
        </div>
      </div>
    </div>
  );
}
