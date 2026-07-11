"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectImage from "./projectimage";
import ProjectTechList from "./projecttechlist";
import ProjectLinks from "./projectlink";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {

  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-cottageLg border border-line bg-surface shadow-soft p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Background Number */}
      <span className="absolute right-8 top-4 text-8xl font-display font-bold text-brown/5 select-none">
        {(index + 1).toString().padStart(2, "0")}
      </span>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ProjectImage
          preview={project.preview}
          title={project.title}
          isHovered={hovered}
        />

        <div>
          <h3 className="font-display text-4xl text-ink mb-4">
            {project.title}
          </h3>

          <p className="text-muted leading-8 mb-6">
            {project.description}
          </p>

          <ProjectTechList tech={project.tech} />

          <ProjectLinks
            linkType={project.linkType}
            linkUrl={project.linkUrl}
            demo={project.demo}
          />
        </div>
      </div>
    </article>
  );
}