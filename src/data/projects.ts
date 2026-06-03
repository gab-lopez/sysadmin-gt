export type ProjectCategory = "Infraestructura" | "Desarrollo" | "Soporte";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "red-corporativa-1",
    title: "Instalación red WIFI Unifi corporativa – Empresa manufacturera",
    category: "Infraestructura",
    description: "Diseño e instalación de cableado estructurado Cat6A para 120 nodos en planta industrial.",
    image: "/projects/red-corporativa.jpg",
    year: 2024,
  },
  {
    id: "sistema-inventario",
    title: "Sistema de control de asistencia a la medida de empresa",
    category: "Desarrollo",
    description: "Software web ara la gestión de tiempo y asistencia, centraliza datos de múltiples sucursales.",
    image: "/projects/sistema-inventario.jpg",
    year: 2024,
  },
  {
    id: "soporte-clinica",
    title: "Soporte IT – Clínica médica",
    category: "Soporte",
    description: "Mantenimiento preventivo mensual y soporte remoto para 40 equipos.",
    image: "/projects/soporte-clinica.jpg",
    year: 2023,
  },
  {
    id: "pagina-web-constructora",
    title: "Sitio web – Oficina legal",
    category: "Desarrollo",
    description: "Página corporativa con areas de práctica, SEO y formulario de contacto.",
    image: "/projects/web-constructora.jpg",
    year: 2024,
  },
  {
    id: "wifi-hotel",
    title: "Ordenamiento Racks y Gabinete",
    category: "Infraestructura",
    description: "Instalación de red WiFi con cobertura total en 3 plantas y gestión de usuarios.",
    image: "/projects/wifi-hotel.jpg",
    year: 2023,
  },
];