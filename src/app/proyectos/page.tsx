"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";

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

export default function ProyectosPage() {
  const [active, setActive] = useState<ProjectCategory | "Todos">("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#FBF8F2] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Casos reales
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#116776]">
            Proyectos Realizados
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
          <p className="mt-6 text-[#333333] max-w-2xl mx-auto">
            Una muestra de los proyectos que hemos ejecutado para empresas
            guatemaltecas en distintos sectores.
          </p>
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
                  : "bg-white text-[#333333] border border-slate-200 hover:text-[#116776] hover:border-[#116776]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
  key={project.id}
  style={{ cursor: "pointer" }}
  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#116776]/40 hover:shadow-lg transition-all duration-300"
>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#116776] to-[#0d4f5c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-20">
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
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No hay proyectos en esta categoría aún.
          </div>
        )}
      </div>
    </main>
  );
}