"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface/50">
      <div className="container-cottage grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xs mx-auto md:mx-0 cursor-hover"
        >
          <div
                className="w-full aspect-[4/5] relative overflow-hidden"
                style={{ borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
              >
            <Image
              src="/icon/naail.jpeg"
              alt="Naail Rizq Widiyanto"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading eyebrow="A Little About Me" title="About" />

          <div className="mt-8 space-y-5 text-muted leading-relaxed text-lg max-w-xl">
            <p>
              I'm Naail Rizq Widiyanto, a frontend developer who finds real
              satisfaction in the small, unglamorous details — the way a page
              loads quietly, the way a button feels just right to click, the way
              spacing can make an interface feel calm instead of cluttered.
            </p>
            <p>
              Most of my work sits at the intersection of design and
              engineering: taking a visual idea and building it with care, in
              React and Next.js, so it holds up on a slow connection and an old
              phone as well as it does on a designer's monitor.
            </p>
            <p>
              Outside of client work, I like slow mornings, secondhand books,
              and rebuilding old side projects until the code feels as
              considered as the design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
