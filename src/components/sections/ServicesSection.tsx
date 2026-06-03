"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, unitColors } from "@/data/services";
import { ArrowRight } from "lucide-react";

type Filter = "dev" | "it";

export default function ServicesSection() {
  const [active, setActive] = useState<Filter>("it");

  const filtered = services.filter((s) => s.unit === active);

  return (
    <section className="py-24 bg-[#FBF8F2]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Lo que hacemos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#116776]">
            Nuestros Servicios
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
          <p className="mt-4 text-[#333333] text-sm max-w-xl mx-auto">
            Dos unidades especializadas para cubrir todas tus necesidades tecnológicas.
          </p>
        </div>

        {/* Filter tabs — SysAdmin IT primero */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActive("it")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === "it"
                ? "bg-[#F28E3A] text-white shadow-lg"
                : "bg-white text-[#F28E3A] border border-[#F28E3A]/30 hover:border-[#F28E3A]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            SysAdmin IT
          </button>
          <button
            onClick={() => setActive("dev")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === "dev"
                ? "bg-[#116776] text-white shadow-lg"
                : "bg-white text-[#116776] border border-[#116776]/30 hover:border-[#116776]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            SysAdmin Dev
          </button>
        </div>

        {/* Categories */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col gap-12"
        >
          {filtered.map((category) => {
            const Icon = category.icon;
            const colors = unitColors[category.unit];
            return (
              <div key={category.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bgLight} ${colors.text}`}>
                    {colors.label}
                  </span>
                  <div className="flex-1 h-px bg-slate-200 ml-1" />
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:${colors.border} cursor-pointer`}
                    >
                      <div className={`w-9 h-9 rounded-lg ${colors.bgLight} flex items-center justify-center mb-4`}>
                        <Icon size={18} className={colors.text} />
                      </div>
                      <h4 className={`font-semibold ${colors.text} mb-2`}>
                        {item.title}
                      </h4>
                      <p className="text-[#333333] text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <button className={`flex items-center gap-1 ${colors.text} text-sm font-medium group-hover:gap-2 transition-all`}>
                        Ver más <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}