import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos realizados de infraestructura IT, desarrollo de software y soporte técnico para empresas guatemaltecas.",
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}