"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-[2px] border-b border-line">
      <div className="container-cottage flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/icon/bungahejo.svg"
            alt="flowers green"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div className="leading-none">
            <h1 className="text-lg font-semibold text-ink"> MY PORTFOLIO</h1>
            <p className="text-xs text-muted">
              Frontend Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-brown transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-px bg-ink" />
          <span className="w-6 h-px bg-ink" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden container-cottage pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted hover:text-brown transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}