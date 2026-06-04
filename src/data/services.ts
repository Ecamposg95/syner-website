export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: '01',
    title: 'Consultoría de transformación empresarial',
    description: 'Reorganización, reestructuras y profesionalización para empresas que llegaron a su techo operativo y necesitan un nuevo modelo de gestión.',
    tags: ['Estrategia', 'M&A', 'Reorganización']
  },
  {
    id: '02',
    title: 'Operaciones y excelencia de procesos',
    description: 'Mapeo, rediseño y estandarización con Lean Thinking, Kaizen, ISO, Six Sigma y SOX. Quitamos cuellos de botella y bajamos costos sostenidamente.',
    tags: ['Lean', 'ISO', 'Six Sigma']
  },
  {
    id: '03',
    title: 'Adopción tecnológica',
    description: 'Acompañamos la implementación y, sobre todo, la adopción de tecnología — para que el usuario final use la herramienta y los resultados se materialicen.',
    tags: ['Change Mgmt', 'Capacitación', 'Gobierno']
  },
  {
    id: '04',
    title: 'Inteligencia artificial aplicada al negocio',
    description: 'De diagnóstico de oportunidades a casos de uso productivos: automatización, copilotos internos, agentes de operación y analítica avanzada con IA de Atlas Tech.',
    tags: ['IA', 'Automatización', 'Agentes']
  },
  {
    id: '05',
    title: 'Dashboards, KPIs y analítica',
    description: 'Balanced Scorecard, OKRs, tableros de control y modelos de Big Data — para que el director tome decisiones con datos confiables, no con intuiciones.',
    tags: ['OKRs', 'BSC', 'Tableros']
  },
  {
    id: '06',
    title: 'Estrategia digital',
    description: 'Diseño de la arquitectura digital del negocio: roadmap, stack, gobierno de datos y modelo operativo digital alineado a la estrategia corporativa por Atlas Tech.',
    tags: ['Roadmap', 'Arquitectura', 'Datos']
  },
  {
    id: '07',
    title: 'Rescate de ERP, CRM y Odoo',
    description: 'Estabilización operativa de implementaciones de software detenidas o fallidas — diagnóstico, replan, retomar control del proyecto y poner el sistema a producir.',
    tags: ['ERP', 'CRM', 'Odoo']
  },
  {
    id: '08',
    title: 'Agroindustria y trazabilidad digital',
    description: 'Modelos operativos, KPIs y trazabilidad digital para empresas del sector agroindustrial — del campo al consumidor, con visibilidad, control y normas HACCP.',
    tags: ['Agro', 'Trazabilidad', 'HACCP']
  },
  {
    id: '09',
    title: 'Transformation Hub™',
    description: 'Nuestro espacio digital y colaborativo donde vive cada proyecto: KPIs, roadmap, entregables, decisiones y evidencia. Consultoría trazable, medible y accionable.',
    tags: ['Plataforma', 'Gobierno', 'Trazabilidad']
  }
];
