"use client";

interface ProjectTechListProps {
  tech: string[];
}

export default function ProjectTechList({ tech }: ProjectTechListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-line px-3 py-1 text-xs text-brown"
        >
          {item}
        </span>
      ))}
    </div>
  );
}