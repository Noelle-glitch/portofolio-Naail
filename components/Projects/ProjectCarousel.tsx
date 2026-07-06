"use client";

import { AnimatePresence, motion } from "framer-motion";

import { projects } from "@/lib/data";
import { useCarousel } from "@/Hooks/useCarousel";
import { carouselVariants } from "@/Hooks/carouselVariant";

import ProjectCard from "./ProjectCard";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";

export default function ProjectCarousel() {
  const {
    current,
    direction,
    next,
    prev,
    goTo,
    pause,
    resume,
  } = useCarousel({
    total: projects.length,
    autoPlay: true,
    interval: 5000,
  });

  return (
    <div
      className="relative mt-16"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
            }}
          >
            <ProjectCard
              project={projects[current]}
              index={current}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <CarouselControls
        next={next}
        prev={prev}
      />

      <CarouselDots
        total={projects.length}
        current={current}
        goTo={goTo}
      />
    </div>
  );
}