"use client";

import { Figma, Github, ExternalLink } from "lucide-react";

interface ProjectLinksProps {
  linkType: string;
  linkUrl: string;
  demo?: string;
}

const linkIcons: Record<string, typeof Github> = {
  github: Github,
  figma: Figma,
};

const linkLabels: Record<string, string> = {
  github: "GitHub",
  figma: "Figma",
};

export default function ProjectLinks({
  linkType,
  linkUrl,
  demo,
}: ProjectLinksProps) {
  const Icon = linkIcons[linkType] ?? Github;
  const label = linkLabels[linkType] ?? "GitHub";

  return (
    <div className="flex gap-6">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-brown transition cursor-hover"
      >
        <Icon size={18} />
        <span>{label}</span>
      </a>

      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-brown transition cursor-hover"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
}