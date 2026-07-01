import { FadeUp } from '@/components/animations/Animations';

export function ResearchTimeline() {
  const steps = [
    { label: "Foundation", color: "text-slate-400" },
    { label: "Intelligence", color: "text-slate-400" },
    { label: "Autonomy", color: "text-primary font-semibold" },
    { label: "Future", color: "text-slate-400" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-24 lg:py-32 z-10 relative">
      <FadeUp>
        {/* Mobile View: Vertical */}
        <div className="md:hidden flex flex-col items-center gap-8 font-mono tracking-widest uppercase text-sm">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-8">
              <span className={step.color}>{step.label}</span>
              {i !== steps.length - 1 && (
                <div className="w-[1.5px] h-8 bg-slate-200" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal */}
        <div className="hidden md:flex items-center justify-between font-mono tracking-widest uppercase text-sm">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <span className={step.color}>{step.label}</span>
              {i !== steps.length - 1 && (
                <div className="w-16 lg:w-32 h-[1.5px] bg-slate-200 mx-6 lg:mx-8" />
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
