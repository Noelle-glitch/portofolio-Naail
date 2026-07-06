"use client";

import SectionHeading from "../ui/SectionHeading";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-cottage relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
        />

        <ProjectCarousel />
      </div>
    </section>
  );
}