"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, HeadphonesIcon, MapPin, Award } from "lucide-react";
import ScrollArrow from "../ui/ScrollArrow";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Experiencia comprobada",
    description: "Años de trayectoria resolviendo retos tecnológicos para empresas guatemaltecas de distintos sectores.",
  },
  {
    icon: Zap,
    title: "Respuesta rápida",
    description: "Atendemos incidentes críticos con tiempos de respuesta ágiles para minimizar el impacto en tu operación.",
  },
  {
    icon: Layers,
    title: "Soluciones integrales",
    description: "Desde el cableado hasta el software: un solo proveedor para toda tu infraestructura tecnológica.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte continuo",
    description: "Acompañamiento post-proyecto y planes de mantenimiento para que tu inversión siempre rinda al máximo.",
  },
  {
    icon: MapPin,
    title: "Presencia local",
    description: "Equipo guatemalteco que conoce el contexto local y puede atenderte de forma presencial cuando lo necesitas.",
  },
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Trabajamos con estándares internacionales y garantizamos cada proyecto entregado.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#116776] min-h-screen flex items-center" id="por-que-elegirnos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Nuestra diferencia
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            ¿Por qué elegir SysAdmin GT?
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-white to-[#F28E3A]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ cursor: "pointer" }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F28E3A] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
  <ScrollArrow targetId="cotizacion" direction="down" />
}