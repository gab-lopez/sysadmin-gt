"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ScrollArrowProps {
  targetId: string;
  direction?: "down" | "up";
  light?: boolean;
}

export default function ScrollArrow({ targetId, direction = "down", light = false }: ScrollArrowProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Icon = direction === "down" ? ChevronDown : ChevronUp;

  return (
    <div className="flex justify-center py-6">
      <motion.button
        onClick={handleClick}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className={`flex flex-col items-center gap-1 group ${light ? "text-white/50 hover:text-white" : "text-[#116776]/40 hover:text-[#116776]"} transition-colors duration-300`}
        aria-label={direction === "down" ? "Siguiente sección" : "Sección anterior"}
      >
        <Icon size={28} strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}