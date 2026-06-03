import { Monitor, Network, Building2, Code2, ShoppingCart, LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  unit: "dev" | "it";
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    id: "redes",
    title: "Redes e Infraestructura",
    icon: Network,
    unit: "it",
    items: [
      {
        id: "cableado",
        title: "Cableado estructurado",
        description: "Instalación profesional de redes cableadas certificadas.",
      },
      {
        id: "routers",
        title: "Configuración de routers y switches",
        description: "Configuración y administración de equipos de red Cisco, MikroTik y más.",
      },
      {
        id: "diagnostico",
        title: "Diagnóstico de red",
        description: "Análisis de rendimiento y resolución de problemas de conectividad.",
      },
    ],
  },
  {
    id: "empresarial",
    title: "Soluciones Empresariales",
    icon: Building2,
    unit: "it",
    items: [
      {
        id: "gestion-it",
        title: "Gestión de infraestructura IT",
        description: "Administración integral de tu entorno tecnológico empresarial.",
      },
      {
        id: "auditorias",
        title: "Auditorías tecnológicas",
        description: "Evaluación completa de tu infraestructura con recomendaciones de mejora.",
      },
      {
        id: "optimizacion",
        title: "Optimización de sistemas",
        description: "Mejora del rendimiento de servidores, redes y estaciones de trabajo.",
      },
    ],
  },
  {
    id: "ventas",
    title: "Equipos y Ventas",
    icon: ShoppingCart,
    unit: "it",
    items: [
      {
        id: "hardware",
        title: "Venta de hardware y accesorios",
        description: "Computadoras, servidores, periféricos y accesorios de las mejores marcas.",
      },
    ],
  },
  {
    id: "soporte",
    title: "Soporte Técnico",
    icon: Monitor,
    unit: "it",
    items: [
      {
        id: "reparacion",
        title: "Reparación de equipos",
        description: "Diagnóstico y reparación de computadoras, laptops y periféricos.",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento preventivo y correctivo",
        description: "Planes de mantenimiento para mantener tu infraestructura en óptimas condiciones.",
      },
    ],
  },
  {
    id: "desarrollo",
    title: "Desarrollo Digital",
    icon: Code2,
    unit: "dev",
    items: [
      {
        id: "sistemas-medida",
        title: "Sistemas a medida",
        description: "Desarrollo de software personalizado para los procesos de tu empresa.",
      },
      {
        id: "paginas-web",
        title: "Páginas web profesionales",
        description: "Sitios web modernos, rápidos y optimizados para buscadores.",
      },
      {
        id: "automatizacion",
        title: "Automatización de procesos",
        description: "Reduce tareas manuales con flujos automatizados e integraciones.",
      },
    ],
  },
];

export const unitColors = {
  dev: {
    bg: "bg-[#116776]",
    bgLight: "bg-[#116776]/10",
    text: "text-[#116776]",
    border: "border-[#116776]",
    label: "SysAdmin Dev",
  },
  it: {
    bg: "bg-[#F28E3A]",
    bgLight: "bg-[#F28E3A]/10",
    text: "text-[#F28E3A]",
    border: "border-[#F28E3A]",
    label: "SysAdmin IT",
  },
};