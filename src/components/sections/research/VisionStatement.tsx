import { FadeUp } from '@/components/animations/Animations';

export function VisionStatement() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20 lg:py-32">
      <FadeUp>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-heading leading-[1.3]">
          Today's machine learning platforms execute pipelines.
        </h2>
      </FadeUp>
      <FadeUp delay={0.1} className="mt-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-400 leading-[1.3]">
          Tomorrow's platforms understand them.
        </h2>
      </FadeUp>
      <FadeUp delay={0.2} className="mt-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary leading-[1.3]">
          LoCoML is building the intelligence between them.
        </h2>
      </FadeUp>
    </div>
  );
}
