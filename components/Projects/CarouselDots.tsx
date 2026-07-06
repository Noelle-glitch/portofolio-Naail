"use client";

interface CarouselDotsProps {
  total: number;
  current: number;
  goTo: (index: number) => void;
}

export default function CarouselDots({
  total,
  current,
  goTo,
}: CarouselDotsProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          aria-label={`Go to project ${index + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            current === index
              ? "w-8 bg-brown"
              : "w-2 bg-line hover:bg-brown/60"
          }`}
        />
      ))}
    </div>
  );
}