"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const handleDownload = () => {
  toast.success("📄 Resume sedang diunduh, harap tunggu...");

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/resume/Naail_Rizq_Widiyanto_CV.pdf";
    link.download = "Naail_Rizq_Widiyanto_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 300);
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-cottage grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center pt-20 pb-24 md:pt-28 md:pb-32">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="eyebrow mb-6 text-xl md:text-2xl text-ink font-medium"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] font-medium text-ink mb-7"
          >
            Naail Rizq Widiyanto
          </motion.h1>

          <motion.h2
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-2xl md:text-2xl lg:text-[4.2rem] leading-[1.08] font-medium text-ink mb-7"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-muted text-lg leading-relaxed max-w-xl mb-10"
          >
            Frontend Developer specializing in React, Next.js, and modern web
            technologies. Passionate about creating responsive, accessible, and
            meaningful digital products.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary">
              Explore Projects
            </Button>
            <Button variant="secondary" onClick={handleDownload}>
              Download Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0"
        >
          <div
            className="relative w-72 h-80 md:w-80 md:h-96 bg-surface shadow-soft"
            style={{
              borderRadius: "42% 58% 60% 40% / 46% 40% 60% 54%",
            }}
          >
            <div
              className="absolute inset-3 flex items-center justify-center"
              style={{
                borderRadius: "42% 58% 60% 40% / 46% 40% 60% 54%",
                background:
                  "linear-gradient(160deg, #E7E0D2 0%, #DCCBB0 60%, #C7A27C 100%)",
              }}
            >
              <div
                className="w-full aspect-[4/5] relative overflow-hidden"
                style={{ borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/cewekopi.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-olive/40" />
        </motion.div>
      </div>
    </section>
  );
}
