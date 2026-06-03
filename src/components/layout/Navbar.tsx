"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Servicios", href: "/servicios" },
  //{ label: "Proyectos", href: "/proyectos" },
  //{ label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Si no es home, marcar como scrolled desde el inicio
    if (!isHome) {
      setScrolled(true);
      return;
    }
    // Si es home, resetear y escuchar scroll
    setScrolled(window.scrollY > 20);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#FBF8F2]/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-black tracking-tight">
            <span className={isTransparent ? "text-white" : "text-[#116776]"}>SYSADMIN</span>
            <span className="text-[#F28E3A]"> GT</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? "text-white hover:text-[#F28E3A]"
                    : "text-[#333333] hover:text-[#116776]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#cotizacion"
            className="bg-[#F28E3A] hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Solicitar cotización
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${isTransparent ? "text-white" : "text-[#116776]"}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FBF8F2] border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#333333] hover:text-[#116776] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#cotizacion"
            className="bg-[#F28E3A] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </header>
  );
}