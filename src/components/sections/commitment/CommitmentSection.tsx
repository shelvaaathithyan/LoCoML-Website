import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { FadeUp } from '@/components/animations/Animations';
import { CommitmentTimeline } from './CommitmentTimeline';

export function CommitmentSection() {
  return (
    <section className="relative w-full bg-slate-50 py-32 lg:py-48 overflow-hidden border-t border-border/50">
      
      {/* Very Subtle Background Grid (2% opacity) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <Container className="relative z-10">
        
        {/* Main Manifesto */}
        <div className="flex flex-col items-center text-center">
          <FadeUp>
            <Tag className="mb-10 bg-white">OUR COMMITMENT</Tag>
          </FadeUp>
          
          <FadeUp delay={0.1} className="w-full">
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[84px] font-bold tracking-tight text-heading leading-[1.2] mb-5">
              Open Source.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full">
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[84px] font-bold tracking-tight text-heading leading-[1.2] mb-16">
              Research Driven.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.3} className="w-full max-w-[850px] mx-auto">
            <h3 className="text-[26px] md:text-[32px] lg:text-[44px] xl:text-[52px] font-semibold tracking-tight text-primary leading-[1.3]">
              Engineering the next generation of intelligent machine learning systems.
            </h3>
          </FadeUp>
        </div>

        {/* Lightweight Roadmap Timeline */}
        <FadeUp delay={0.4}>
          <CommitmentTimeline />
        </FadeUp>

      </Container>
    </section>
  );
}
