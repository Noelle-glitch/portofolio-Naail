"use client";

import { useEffect, useRef } from "react";

interface ProjectImageProps {
  preview?: string;
  title: string;
  isHovered?: boolean;
}

export default function ProjectImage({
  preview,
  title,
  isHovered = false,
}: ProjectImageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div className="overflow-hidden rounded-cottage bg-[#E7E0D2] aspect-[16/10]">
      {preview ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-500"
        >
          <source src={preview} type="video/webm" />
        </video>
      ) : (
        <div className="flex h-full items-center justify-center text-muted">
          Project Preview
        </div>
      )}
    </div>
  );
}