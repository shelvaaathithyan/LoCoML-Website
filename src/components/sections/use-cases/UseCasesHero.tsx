import React, { useState, useRef, useEffect } from 'react';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion, useAnimationFrame, useMotionValue, animate, MotionValue } from 'framer-motion';
import { cn } from '@/utils/cn';

const INDUSTRIES = [
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'smart-cities', label: 'Smart Cities' },
];

function getOrbitPos(progress: number, width: number, height: number, radius: number) {
  const top = width - 2 * radius;
  const right = height - 2 * radius;
  const bottom = top;
  const left = right;
  const corner = (Math.PI * radius) / 2;

  const total = top + corner + right + corner + bottom + corner + left + corner;
  let d = (progress % 1) * total;

  if (d < top) return { x: radius + d, y: 0 };
  d -= top;
  if (d < corner) {
    const angle = (d / corner) * (Math.PI / 2) - Math.PI / 2;
    return { x: width - radius + radius * Math.cos(angle), y: radius + radius * Math.sin(angle) };
  }
  d -= corner;
  if (d < right) return { x: width, y: radius + d };
  d -= right;
  if (d < corner) {
    const angle = (d / corner) * (Math.PI / 2);
    return { x: width - radius + radius * Math.cos(angle), y: height - radius + radius * Math.sin(angle) };
  }
  d -= corner;
  if (d < bottom) return { x: width - radius - d, y: height };
  d -= bottom;
  if (d < corner) {
    const angle = (d / corner) * (Math.PI / 2) + Math.PI / 2;
    return { x: radius + radius * Math.cos(angle), y: height - radius + radius * Math.sin(angle) };
  }
  d -= corner;
  if (d < left) return { x: 0, y: height - radius - d };
  d -= left;
  const angle = (d / corner) * (Math.PI / 2) + Math.PI;
  return { x: radius + radius * Math.cos(angle), y: radius + radius * Math.sin(angle) };
}

interface IndustryCardProps {
  industry: typeof INDUSTRIES[0];
  isActive: boolean;
  isTravelingTo: boolean;
  onSelect: (id: string) => void;
  dotX: MotionValue<number>;
  dotY: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement>;
  index: number;
}

const IndustryCard = React.forwardRef<HTMLButtonElement, IndustryCardProps>(
  ({ industry, isActive, isTravelingTo, onSelect, dotX, dotY, containerRef, index }, forwardedRef) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const cx = useMotionValue(0);
    const cy = useMotionValue(0);

    useAnimationFrame(() => {
      if (!localRef.current || !containerRef.current) return;
      const cardRect = localRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      // Offset by 3 (half of 6px dot) to center the mask precisely over the dot
      cx.set(dotX.get() - (cardRect.left - containerRect.left) + 3);
      cy.set(dotY.get() - (cardRect.top - containerRect.top) + 3);
    });

    const showGlow = isActive || isTravelingTo;

    return (
      <motion.button
        ref={(el) => {
          localRef.current = el;
          if (typeof forwardedRef === 'function') forwardedRef(el);
          else if (forwardedRef) forwardedRef.current = el;
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.05, ease: 'easeOut' }}
        onClick={() => onSelect(industry.id)}
        role="radio"
        aria-checked={isActive}
        className={cn(
          'group relative flex items-center justify-center text-center w-[120px] h-[44px] rounded-[16px] bg-white border border-[#E7EAF3] shadow-[0_6px_18px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] focus-visible:ring-offset-4',
          'hover:shadow-[0_8px_20px_rgba(15,23,42,0.07)] hover:border-[#CBD5E1] hover:-translate-y-[2px]'
        )}
      >
        {showGlow && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-[16px]">
            <defs>
              <radialGradient id={`glow-grad-${industry.id}`}>
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id={`glow-mask-${industry.id}`}>
                <motion.circle cx={cx} cy={cy} r="26" fill={`url(#glow-grad-${industry.id})`} />
              </mask>
            </defs>
            <rect
              x="0.5"
              y="0.5"
              width="119"
              height="43"
              rx="15.5"
              fill="none"
              stroke="#2F6BFF"
              strokeWidth="1.5"
              mask={`url(#glow-mask-${industry.id})`}
            />
          </svg>
        )}
        <span
          className={cn(
            'relative z-10 text-[15px] tracking-[-0.02em] leading-none transition-colors duration-200',
            isActive ? 'text-[#2F6BFF] font-semibold' : 'text-[#1E293B] font-medium'
          )}
        >
          {industry.label}
        </span>
      </motion.button>
    );
  }
);
IndustryCard.displayName = 'IndustryCard';

export function UseCasesHero() {
  const [state, setState] = useState<{ active: string; travelingTo: string | null }>({
    active: INDUSTRIES[0].id,
    travelingTo: null,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const orbitProgress = useRef(0);
  const isTraveling = useRef(false);

  const CARD_W = 120;
  const CARD_H = 44;
  const CARD_R = 16;
  const OFFSET = 3; // 3px dot center offset

  // Initial positioning
  useEffect(() => {
    if (!containerRef.current || !cardsRef.current[state.active]) return;
    const targetEl = cardsRef.current[state.active];
    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    const { x, y } = getOrbitPos(0, CARD_W, CARD_H, CARD_R);
    dotX.set(targetRect.left - containerRect.left + x - OFFSET);
    dotY.set(targetRect.top - containerRect.top + y - OFFSET);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useAnimationFrame((time, delta) => {
    if (!containerRef.current || isTraveling.current) return;

    const targetEl = cardsRef.current[state.active];
    if (!targetEl) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    orbitProgress.current += delta / 4000;
    if (orbitProgress.current > 1) orbitProgress.current -= 1;

    const { x, y } = getOrbitPos(orbitProgress.current, CARD_W, CARD_H, CARD_R);

    dotX.set(targetRect.left - containerRect.left + x - OFFSET);
    dotY.set(targetRect.top - containerRect.top + y - OFFSET);
  });

  const handleIndustrySelect = (id: string) => {
    if (id === state.active || isTraveling.current) return;

    isTraveling.current = true;
    setState((prev) => ({ ...prev, travelingTo: id }));

    const targetEl = cardsRef.current[id];
    const containerEl = containerRef.current;
    if (!targetEl || !containerEl) {
      isTraveling.current = false;
      return;
    }

    const targetRect = targetEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    const newLocal = getOrbitPos(0, CARD_W, CARD_H, CARD_R);
    const targetAbsX = targetRect.left - containerRect.left + newLocal.x - OFFSET;
    const targetAbsY = targetRect.top - containerRect.top + newLocal.y - OFFSET;

    animate(dotX, targetAbsX, { type: 'spring', stiffness: 70, damping: 16 });
    animate(dotY, targetAbsY, {
      type: 'spring',
      stiffness: 70,
      damping: 16,
      onComplete: () => {
        orbitProgress.current = 0;
        isTraveling.current = false;
        setState({ active: id, travelingTo: null });
      },
    });
  };

  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Subtle Blueprint Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          className="w-1.5 h-1.5 bg-currentColor rounded-full"
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100], opacity: [0, 0.5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Container className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            USE CASES
          </Tag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-[850px] mb-8"
        >
          One Platform.<br />
          Every Machine Learning Problem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[760px] text-lg text-slate-500 leading-relaxed mb-16"
        >
          From healthcare to finance, manufacturing to retail, LoCoML intelligently generates, validates, optimizes and
          deploys machine learning workflows tailored to diverse real-world applications.
        </motion.p>

        <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }}>
            <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-8 block">
              EXPLORE BY INDUSTRY
            </span>
          </motion.div>

          <div className="relative w-full max-w-[420px] mx-auto" ref={containerRef}>
            {/* The Single Animated Intelligence Dot */}
            <motion.div
              className="absolute top-0 left-0 w-[6px] h-[6px] rounded-full bg-[#2F6BFF] z-20 pointer-events-none"
              style={{
                x: dotX,
                y: dotY,
                boxShadow: '0 0 6px rgba(47,107,255,0.35)',
              }}
            />

            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-4 place-items-center"
              role="radiogroup"
              aria-label="Select an industry"
            >
              {INDUSTRIES.map((industry, index) => {
                const isActive = state.active === industry.id;
                const isTravelingTo = state.travelingTo === industry.id;

                return (
                  <IndustryCard
                    key={industry.id}
                    ref={(el) => (cardsRef.current[industry.id] = el)}
                    industry={industry}
                    isActive={isActive}
                    isTravelingTo={isTravelingTo}
                    onSelect={handleIndustrySelect}
                    dotX={dotX}
                    dotY={dotY}
                    containerRef={containerRef}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
