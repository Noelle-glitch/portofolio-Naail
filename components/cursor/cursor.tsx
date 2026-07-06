"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovering, setHovering] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      const target = e.target as HTMLElement;
      console.log(target);
      console.log(target.closest(".cursor-hover"));

      setHovering(!!target.closest(".cursor-hover"));
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        scale: hovering ? 1.2 : 1,
        rotate: hovering ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <Image
        src={hovering ? "/icon/kucingsenyum.svg" : "/icon/kucingsmirk.svg"}
        alt="cursor"
        width={32}
        height={32}
        priority
      />
    </motion.div>
  );
}
