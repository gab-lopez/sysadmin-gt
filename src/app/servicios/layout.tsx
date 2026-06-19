import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "SysAdmin IT para soporte, redes e infraestructura. SysAdmin Dev para desarrollo de software y sistemas a medida en Guatemala.",
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}