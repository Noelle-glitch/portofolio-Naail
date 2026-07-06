"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import { contact } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

const items = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", value: contact.linkedin.replace(/^https?:\/\//, ""), href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", value: contact.github.replace(/^https?:\/\//, ""), href: contact.github, icon: Github },
  { label: "Resume", value: "Download CV (PDF)", href: contact.cv, icon: FileDown },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-cottage max-w-2xl text-center">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something thoughtful."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 bg-surface rounded-cottageLg shadow-soft p-8 md:p-10 grid sm:grid-cols-2 gap-6 text-left"
        >
          {items.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-cottage hover:bg-background transition-colors duration-300 cursor-hover"
            >
              <span className="mt-0.5 text-brown">
                <Icon size={20} />
              </span>
              <span>
                <span className="block text-xs tracking-wide text-muted uppercase mb-1">
                  {label}
                </span>
                <span className="block text-ink">{value}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
