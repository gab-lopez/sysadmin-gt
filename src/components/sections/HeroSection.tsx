"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
<section
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#116776]"
>
  {/* Dot grid background */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `radial-gradient(circle, #FBF8F2 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F28E3A] rounded-full opacity-10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Unidades badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F28E3A]" />
            SysAdmin IT
          </span>
          <span className="text-white/30 text-xs">+</span>
          <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#116776] border-2 border-white" />
            SysAdmin Dev
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Tecnología que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28E3A] to-[#f5b070]">
            impulsa tu empresa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-4"
        >
          Dos unidades especializadas, una sola empresa de confianza.
        </motion.p>

        {/* Unidades descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm"
        >
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#F28E3A]" />
            <span><strong className="text-white">SysAdmin IT</strong> — Soporte, redes e infraestructura</span>
          </div>
          <span className="hidden sm:block text-white/20">|</span>
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#116776] border-2 border-white/40" />
            <span><strong className="text-white">SysAdmin Dev</strong> — Software y sistemas a medida</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/servicios"
            className="bg-[#F28E3A] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Ver servicios
          </Link>
          {/*<Link
            href="/proyectos"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-white/10"
          >
            Conocer proyectos
          </Link>*/}
        </motion.div>
      </div>
    </section>
  );
}