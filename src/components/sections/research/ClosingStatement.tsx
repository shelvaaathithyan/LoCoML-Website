import { FadeUp } from '@/components/animations/Animations';

export function ClosingStatement() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto py-24 lg:py-40 z-10 relative">
      <FadeUp>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-heading leading-[1.2]">
          Open Source.
        </h2>
      </FadeUp>
      <FadeUp delay={0.1} className="mt-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-heading leading-[1.2]">
          Research Driven.
        </h2>
      </FadeUp>
      <FadeUp delay={0.2} className="mt-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary leading-[1.3]">
          Engineering the next generation of intelligent machine learning systems.
        </h2>
      </FadeUp>
    </div>
  );
}
