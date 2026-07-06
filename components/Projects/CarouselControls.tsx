"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  prev: () => void;
  next: () => void;
}

export default function CarouselControls({
  prev,
  next,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between mt-8">
      <button
        onClick={prev}
        aria-label="Previous Project"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 backdrop-blur transition-all duration-300 hover:bg-surface hover:scale-105"
      >
        <ChevronLeft
          size={18}
          className="transition-transform group-hover:-translate-x-0.5"
        />
      </button>

      <button
        onClick={next}
        aria-label="Next Project"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 backdrop-blur transition-all duration-300 hover:bg-surface hover:scale-105"
      >
        <ChevronRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}