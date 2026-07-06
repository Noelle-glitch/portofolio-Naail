"use client";

import Image from "next/image";

interface ProjectImageProps {
  image?: string;
  title: string;
}

export default function ProjectImage({ image, title }: ProjectImageProps) {
  return (
    <div className="overflow-hidden rounded-cottage bg-[#E7E0D2] aspect-[16/10]">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-muted">
          Project Preview
        </div>
      )}
    </div>
  );
}