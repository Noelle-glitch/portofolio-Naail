"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/Skills";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/50">
      <div className="container-cottage">
        <SectionHeading eyebrow="Toolkit" title="Skills" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {skills.map((s) => (
            <Badge key={s} label={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
