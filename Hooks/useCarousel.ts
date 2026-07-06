"use client";

import { useCallback, useEffect, useState } from "react";

interface UseCarouselOptions {
  total: number;
  autoPlay?: boolean;
  interval?: number;
}

export function useCarousel({
  total,
  autoPlay = true,
  interval = 5000,
}: UseCarouselOptions) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;

      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const pause = () => setIsPaused(true);

  const resume = () => setIsPaused(false);

  // autoplay
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, next]);

  // keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return {
    current,
    direction,

    next,
    prev,
    goTo,

    pause,
    resume,

    isPaused,
  };
}