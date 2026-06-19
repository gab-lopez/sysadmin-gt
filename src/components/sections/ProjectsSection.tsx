"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollArrow from "../ui/ScrollArrow";

const filters: { label: string; value: ProjectCategory | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Infraestructura", value: "Infraestructura" },
  { label: "Desarrollo", value: "Desarrollo" },
  { label: "Soporte", value: "Soporte" },
];

const categoryColors: Record<ProjectCategory, string> = {
  Infraestructura: "bg-[#116776]/10 text-[#116776]",
  Desarrollo: "bg-[#F28E3A]/10 text-[#F28E3A]",
  Soporte: "bg-slate-100 text-slate-600",
};

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | "Todos">("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 bg-white" id="proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#116776]">
            Proyectos Realizados
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.value
                  ? "bg-[#116776] text-white shadow-lg"
                  : "bg-[#FBF8F2] text-[#333333] border border-slate-200 hover:text-[#116776] hover:border-[#116776]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              style={{ cursor: "pointer" }}
              className="group bg-[#FBF8F2] border border-slate-200 rounded-2xl overflow-hidden hover:border-[#116776]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="h-44 relative overflow-hidden bg-gradient-to-br from-[#116776] to-[#0d4f5c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-20">
                    {project.category === "Infraestructura" ? "🌐" : project.category === "Desarrollo" ? "💻" : "🛠️"}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.year}</span>
                </div>
                <h3 className="font-semibold text-[#116776] mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 border border-[#116776] text-[#116776] hover:bg-[#116776] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Ver todos los proyectos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
  <ScrollArrow targetId="por-que-elegirnos" direction="down" />
}