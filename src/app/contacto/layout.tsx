import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para una cotización gratuita. Soporte técnico, redes, infraestructura IT y desarrollo de software en Guatemala.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}