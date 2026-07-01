import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { FadeUp } from '@/components/animations/Animations';
import { BackgroundBlueprint } from './BackgroundBlueprint';
import { VisionStatement } from './VisionStatement';
import { ResearchFocus } from './ResearchFocus';
import { ResearchTimeline } from './ResearchTimeline';
import { ClosingStatement } from './ClosingStatement';

export function ResearchSection() {
  return (
    <section className="relative w-full bg-slate-50 py-24 lg:py-40 overflow-hidden border-t border-border/50">
      <BackgroundBlueprint />
      
      <Container className="max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="mb-32 flex flex-col items-center text-center">
          <FadeUp>
            <Tag className="mb-8 bg-white">RESEARCH & VISION</Tag>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl md:text-6xl leading-[1.1] max-w-4xl mx-auto">
              Building the Future of Autonomous Machine Learning.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2} className="mt-10">
            <p className="max-w-3xl text-xl text-paragraph leading-relaxed">
              LoCoML is an open-source research platform exploring how machine learning workflows can become self-validating, self-correcting, and increasingly autonomous through intelligent system design.
            </p>
          </FadeUp>
        </div>

        {/* Narrative Flow */}
        <div className="flex flex-col gap-12 lg:gap-24 relative">
          <VisionStatement />
          <ResearchFocus />
          <ResearchTimeline />
          <ClosingStatement />
        </div>

      </Container>
    </section>
  );
}
