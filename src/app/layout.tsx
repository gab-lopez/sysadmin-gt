import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/ui/WhatsAppButton";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sysadmin GT – Infraestructura IT & Desarrollo de Software",
    template: "%s – Sysadmin GT",
  },
  description:
    "Empresa guatemalteca especializada en infraestructura IT, redes, soporte técnico y desarrollo de software a medida. Sysadmin Dev + Sysadmin IT.",
  keywords: [
    "infraestructura IT Guatemala",
    "desarrollo de software Guatemala",
    "soporte técnico Guatemala",
    "redes empresariales Guatemala",
    "Sysadmin GT",
  ],
  authors: [{ name: "Sysadmin GT" }],
  creator: "Sysadmin GT",
  openGraph: {
    title: "Sysadmin GT – Infraestructura IT & Desarrollo de Software",
    description:
      "Dos unidades especializadas: Sysadmin Dev para software y Sysadmin IT para infraestructura. Soluciones tecnológicas integrales para empresas en Guatemala.",
    url: "https://sysadmin.gt",
    siteName: "Sysadmin GT",
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysadmin GT",
    description: "Infraestructura IT & Desarrollo de Software en Guatemala.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
<body
  className={`${geist.variable} ${geistMono.variable} antialiased bg-[#FBF8F2] text-[#333333]`}
>
        <Navbar />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <Navbar />
<main>
  <PageTransition>
    {children}
  </PageTransition>
</main>
<Footer />
<WhatsAppButton />
      </body>
    </html>
  );
}