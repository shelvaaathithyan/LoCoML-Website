import React from 'react';
import { cn } from '@/utils/cn';

interface GoogleDriveVideoProps {
  url: string;
  className?: string;
}

export function GoogleDriveVideo({ url, className }: GoogleDriveVideoProps) {
  return (
    <div className={cn("w-full aspect-video overflow-hidden flex items-center justify-center", className)}>
      <iframe
        src={url}
        allow="autoplay"
        allowFullScreen
        className="w-full h-full border-none"
        loading="lazy"
        title="Google Drive Video Player"
      />
    </div>
  );
}
