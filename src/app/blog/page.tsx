import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Sysadmin GT",
  description: "Artículos técnicos sobre infraestructura IT, redes, seguridad y desarrollo de software.",
};

const posts = [
  {
    slug: "que-es-el-cableado-estructurado",
    title: "¿Qué es el cableado estructurado y por qué tu empresa lo necesita?",
    category: "Infraestructura",
    date: "15 abril 2025",
    resumen: "El cableado estructurado es la base de cualquier red empresarial confiable. Te explicamos qué es, sus categorías y cómo planificarlo correctamente.",
    readTime: "5 min",
  },
  {
    slug: "mikrotik-vs-cisco-para-pymes",
    title: "MikroTik vs Cisco: ¿cuál es mejor para tu empresa en Guatemala?",
    category: "Redes",
    date: "2 abril 2025",
    resumen: "Comparamos dos de las marcas más populares en equipos de red para ayudarte a elegir la opción correcta según tu presupuesto y necesidades.",
    readTime: "7 min",
  },
  {
    slug: "mantenimiento-preventivo-it",
    title: "Guía de mantenimiento preventivo IT para empresas",
    category: "Soporte",
    date: "20 marzo 2025",
    resumen: "Un plan de mantenimiento preventivo puede ahorrarle a tu empresa miles de quetzales en reparaciones. Conoce qué incluir y con qué frecuencia.",
    readTime: "6 min",
  },
  {
    slug: "nextjs-para-sistemas-empresariales",
    title: "Por qué usamos Next.js para desarrollar sistemas empresariales",
    category: "Desarrollo",
    date: "10 marzo 2025",
    resumen: "Next.js no es solo para landing pages. Te contamos cómo lo usamos para construir sistemas robustos, rápidos y fáciles de mantener.",
    readTime: "8 min",
  },
  {
    slug: "seguridad-wifi-empresarial",
    title: "5 configuraciones de seguridad WiFi que toda empresa debe tener",
    category: "Redes",
    date: "25 febrero 2025",
    resumen: "Una red WiFi mal configurada es una puerta abierta para atacantes. Revisa estas configuraciones básicas que marcan una gran diferencia.",
    readTime: "5 min",
  },
  {
    slug: "automatizacion-procesos-pymes",
    title: "Automatización de procesos: casos reales en pymes guatemaltecas",
    category: "Desarrollo",
    date: "10 febrero 2025",
    resumen: "Desde facturación hasta reportes automáticos. Compartimos casos concretos donde la automatización transformó la operación de nuestros clientes.",
    readTime: "9 min",
  },
];

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-[#116776]/10 text-[#116776]",
  Redes: "bg-[#116776]/10 text-[#116776]",
  Soporte: "bg-slate-100 text-slate-600",
  Desarrollo: "bg-[#F28E3A]/10 text-[#F28E3A]",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Conocimiento
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#116776]">
            Blog Técnico
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
          <p className="mt-6 text-[#333333] max-w-2xl mx-auto">
            Artículos sobre infraestructura IT, redes, soporte técnico y
            desarrollo de software para empresas guatemaltecas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#116776]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="h-44 bg-gradient-to-br from-[#116776] to-[#0d4f5c] flex items-center justify-center">
                <span className="text-4xl opacity-20">📝</span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-[#116776] mb-2 leading-snug group-hover:text-[#F28E3A] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#333333] text-sm leading-relaxed mb-4">
                  {post.resumen}
                </p>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}