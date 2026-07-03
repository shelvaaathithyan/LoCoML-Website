import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';

export function AboutEpilogue() {
  return (
    <section className="relative w-full pt-[160px] pb-[80px] bg-white overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center justify-center text-center max-w-[700px]">
        
        <div className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.05] tracking-[-0.03em] w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Building the future.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Advancing research.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-slate-400 block w-full"
          >
            Empowering intelligence.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="text-primary font-extrabold mt-8 block w-full leading-[1.12]"
          >
            Driven by research.<br className="hidden sm:block" />
            Built by people.
          </motion.div>
          
        </div>
        
      </Container>
    </section>
  );
}
