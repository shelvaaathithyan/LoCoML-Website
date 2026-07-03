import { ResearchHero } from '@/components/sections/research/ResearchHero';
import { FeaturedPublication } from '@/components/sections/research/FeaturedPublication';
import { ResearchEpilogue } from '@/components/sections/research/ResearchEpilogue';

export function Research() {
  return (
    <>
      <ResearchHero />
      <FeaturedPublication />
      <ResearchEpilogue />
    </>
  );
}
