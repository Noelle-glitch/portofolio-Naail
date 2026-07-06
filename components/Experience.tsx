"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-cottage max-w-3xl">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="mt-16 relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

          <div className="flex flex-col gap-14">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-brown" />
                <p className="eyebrow mb-2">{e.period}</p>
                <h3 className="font-display text-2xl font-medium text-ink mb-1">
                  {e.role}
                </h3>
                <p className="text-brown text-sm mb-3">{e.org}</p>
                <p className="text-muted leading-relaxed">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
