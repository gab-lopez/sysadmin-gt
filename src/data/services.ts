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
        description: "Diseñamos e instalamos redes cableadas estéticas, ordenadas y certificadas. Eliminamos el caos de cables en tu oficina o gabinete de servidores, garantizando una conexión de alta velocidad y libre de fallas físicas.",
      },
      {
        id: "routers",
        title: "Configuración de routers y switches",
        description: "onectividad rápida y segura para todo tu equipo. Configuramos equipos de alta gama (Cisco, Fortinet, Ubiquiti) para segmentar tus redes de forma segura, mejorar la cobertura Wi-Fi y asegurar que tu internet rinda al máximo.",
      },
      {
        id: "diagnostico",
        title: "Diagnóstico de red",
        description: "¿Internet lento o caídas constantes? Analizamos a fondo tu red para identificar cuellos de botella, interferencias en el Wi-Fi o fallas de conectividad, resolviéndolos de inmediato para que tu operación no se detenga.",
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
        title: "Gestión de Correos y Dominios Profesionales",
        description: "Configuración, administración y soporte integral para tus plataformas de correo (Microsoft 365/Zoho). Aseguramos la entrega de tus correos configurando registros DNS esenciales (SPF, DKIM, DMARC) para evitar el spam y proteger tu identidad digital.",
      },
      {
        id: "auditorias",
        title: "Servicios en la Nube y Productividad",
        description: "Implementación y administración de entornos en la nube para tu negocio. Configuramos herramientas colaborativas, almacenamiento seguro de archivos, respaldos automatizados y políticas de acceso para que tu equipo trabaje de forma eficiente y segura desde cualquier lugar.",
      },
      {
        id: "optimizacion",
        title: "Seguridad de Identidad y Accesos",
        description: "Centralización y protección de las cuentas de tu empresa. Gestionamos directorios activos, autenticación de doble factor (2FA) y permisos de usuarios para asegurar que solo el personal autorizado acceda a la información crítica de tu negocio.",
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
        title: "Suministro de Equipos y Hardware Corporativo",
        description: "Equipamos tu empresa con la mejor tecnología. Proveemos computadoras, servidores, componentes de red y accesorios de las mejores marcas, adaptados exactamente a las necesidades de tu presupuesto y con garantía local.",
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
        description: "Recupera la velocidad de tus herramientas de trabajo. Diagnosticamos y reparamos laptops, computadoras de escritorio y periféricos. Solucionamos fallas de hardware, lentitud extrema y pantallas azules con repuestos de calidad.",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento preventivo y correctivo",
        description: "Evita sorpresas costosas. Ofrecemos planes de mantenimiento preventivo para limpiar, optimizar y proteger tus equipos y servidores antes de que fallen, asegurando la continuidad y productividad de tu negocio.",
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