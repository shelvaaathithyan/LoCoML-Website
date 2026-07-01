import { FadeUp, StaggerContainer } from '@/components/animations/Animations';

const activeResearch = [
  "Semantic Validation",
  "Autonomous Resolution",
  "Adaptive Routing",
  "Synthetic Failure Injection",
  "Pipeline Portability"
];

const futureResearch = [
  "Multi-Agent ML Systems",
  "Self-Evolving Pipelines",
  "Autonomous Benchmarking"
];

export function ResearchFocus() {
  return (
    <div className="w-full max-w-2xl mx-auto py-16 lg:py-24 font-mono z-10 relative">
      <div className="flex flex-col gap-12">
        
        {/* Active Research */}
        <div>
          <FadeUp>
            <h3 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">
              Active Research
            </h3>
          </FadeUp>
          <StaggerContainer delay={0.1} staggerChildren={0.1} className="flex flex-col gap-4">
            {activeResearch.map((item, idx) => (
              <FadeUp key={idx} className="flex items-center gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-heading text-lg font-medium">{item}</span>
              </FadeUp>
            ))}
          </StaggerContainer>
        </div>

        {/* Divider */}
        <FadeUp delay={0.3}>
          <div className="w-full h-px bg-slate-200" />
        </FadeUp>

        {/* Future Research */}
        <div>
          <FadeUp delay={0.4}>
            <h3 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6 mt-4">
              Future Research
            </h3>
          </FadeUp>
          <StaggerContainer delay={0.5} staggerChildren={0.1} className="flex flex-col gap-4">
            {futureResearch.map((item, idx) => (
              <FadeUp key={idx} className="flex items-center gap-4">
                <span className="text-slate-300 font-bold">○</span>
                <span className="text-slate-400 text-lg font-medium">{item}</span>
              </FadeUp>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </div>
  );
}
