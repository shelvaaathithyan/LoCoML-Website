import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';
import { Icons } from '@/constants/icons';

export function ResearchHero() {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      <Container className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center text-center">
        
        {/* Step 1: Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            RESEARCH
          </Tag>
        </motion.div>

        {/* Step 2: Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-[850px] mb-8"
        >
          Research that powers<br />
          autonomous machine learning.
        </motion.h1>

        {/* Step 3: Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[760px] text-lg text-slate-500 leading-relaxed mb-20"
        >
          LoCoML is built on research focused on autonomous machine learning,
          semantic pipeline understanding, adaptive intelligence, and resilient
          ML workflow execution. Explore the ideas, architecture, and scientific
          contributions behind the platform.
        </motion.p>

        {/* Step 4: Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-4 mb-24"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl md:text-4xl font-semibold text-slate-900">1</span>
            <span className="text-sm font-medium text-slate-500">Research Paper</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl md:text-4xl font-semibold text-slate-900">2025</span>
            <span className="text-sm font-medium text-slate-500">Published</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl md:text-4xl font-semibold text-slate-900">Open Source</span>
            <span className="text-sm font-medium text-slate-500">Framework</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl md:text-4xl font-semibold text-slate-900">arXiv</span>
            <span className="text-sm font-medium text-slate-500">Publication</span>
          </div>
        </motion.div>

        {/* Step 5: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wide">Featured Publication</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          >
            <Icons.ArrowDown className="h-5 w-5 text-slate-400" />
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
