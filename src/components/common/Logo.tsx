import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export function Logo({ className, iconSize = 36 }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-3 relative z-10 group", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="LoCoML Logo"
      >
        {/* Vibrant blue rounded square background */}
        <rect width="100" height="100" rx="24" fill="#2563EB" />
        
        {/* Clean semantic pipeline connecting lines */}
        <path
          d="M 22 36 L 78 36 M 22 36 L 22 64 L 78 64 M 50 36 L 50 64"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Regular Pipeline Nodes */}
        <circle cx="22" cy="36" r="4.5" fill="white" />
        <circle cx="50" cy="36" r="4.5" fill="white" />
        <circle cx="78" cy="36" r="4.5" fill="white" />
        <circle cx="22" cy="64" r="4.5" fill="white" />
        <circle cx="78" cy="64" r="4.5" fill="white" />
        
        {/* Validation / Checkpoint Engine Node */}
        <circle cx="50" cy="64" r="9" fill="white" />
        <path
          d="M 46 64.5 L 48.5 67 L 54.5 61"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-heading text-[22px] font-bold tracking-[0.015em] text-[#0F172A] transition-colors group-hover:text-primary leading-none mt-0.5">
        LoCoML
      </span>
    </Link>
  );
}
