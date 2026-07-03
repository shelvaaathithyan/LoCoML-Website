import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';

export function ResearchEpilogue() {
  return (
    <section className="relative w-full pt-[160px] pb-[80px] bg-white overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center justify-center text-center max-w-[700px]">
        
        <div className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.05] tracking-[-0.03em] w-full text-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Every workflow.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Every decision.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Every deployment.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="text-primary font-extrabold mt-6 block w-full leading-[1.12]"
          >
            Powered by semantic intelligence.
          </motion.div>
          
        </div>
        
      </Container>
    </section>
  );
}
