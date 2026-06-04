export interface UseCase {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
}

export const useCases: UseCase[] = [
  {
    id: '01',
    title: 'Digitalización Operativa y ERP',
    category: 'Integración Tecnológica',
    description: 'Estabilización de plataforma ERP para un grupo comercial con 14 sucursales.',
    challenge: 'Una implementación previa fallida de ERP mantenía la operación fracturada, forzando al equipo a duplicar trabajo en hojas de cálculo y demorando los cierres financieros más de 20 días.',
    solution: 'Auditoría técnica del sistema, rediseño de flujos de inventarios y facturación en Odoo, y plan intensivo de capacitación a usuarios clave (Change Management).',
    impact: 'Cierres contables reducidos a 3 días, visibilidad del inventario en tiempo real al 99.4% y adopción del sistema por el 100% de la plantilla operativa.'
  },
  {
    id: '02',
    title: 'Automatización Operativa con IA',
    category: 'Procesos e Inteligencia Artificial',
    description: 'Implementación de agentes de IA y automatización de conciliaciones para empresa Fintech.',
    challenge: 'El equipo de operaciones gastaba más de 40 horas semanales descargando, cruzando y validando manualmente estados de cuenta bancarios contra registros del sistema interno.',
    solution: 'Desarrollo de un agente de IA que procesa y categoriza transacciones usando modelos de lenguaje ajustados, conectando las APIs bancarias con el módulo contable.',
    impact: 'Conciliación automatizada del 96% de las transacciones sin intervención humana. Cero errores de captura y reasignación del personal a tareas de análisis.'
  },
  {
    id: '03',
    title: 'Infraestructura GovTech (Ecosistema SIGMA)',
    category: 'Soluciones Públicas',
    description: 'Digitalización del padrón y recaudación tributaria para gobierno municipal.',
    challenge: 'Procesos de cobro de impuestos lentos, filas de horas para ciudadanos y falta de integración de datos entre dependencias públicas.',
    solution: 'Implementación de la suite SIGMA (GovTech) para habilitar trámites en línea, pagos automatizados y unificación del padrón catastral en una sola base de datos.',
    impact: 'Aumento del 34% en la recaudación del impuesto predial en el primer trimestre y reducción del tiempo de espera ciudadano a menos de 5 minutos.'
  },
  {
    id: '04',
    title: 'Trazabilidad Digital del Campo al Consumidor',
    category: 'Agroindustria',
    description: 'Diseño del sistema de trazabilidad y calidad para exportadora de berries.',
    challenge: 'Exigencias regulatorias de la FDA y cadenas comerciales internacionales requerían trazar el lote exacto de fruta desde la parcela de origen hasta el anaquel extranjero en menos de 2 horas en caso de alerta sanitaria.',
    solution: 'Desarrollo de una plataforma móvil con escaneo QR para jornaleros y supervisores de empaque, integrada a un dashboard centralizado de control de calidad bajo normas HACCP.',
    impact: 'Trazabilidad instantánea en 45 segundos. Apertura de nuevos canales de exportación en Europa y reducción de mermas en empaque del 8% al 2.5%.'
  },
  {
    id: '05',
    title: 'Estrategia Digital y Plataforma B2C',
    category: 'Venture Building & Loyalty',
    description: 'Lanzamiento de la plataforma de fidelización y cashback Open Cashback.',
    challenge: 'Una importante cadena minorista necesitaba competir con los marketplaces globales mediante una propuesta de lealtad innovadora basada en blockchain.',
    solution: 'Diseño estratégico de marca por Grupo Syner y desarrollo del backend de blockchain y SDKs de loyalty por Atlas Tech, estructurando el negocio como una spin-off independiente.',
    impact: 'Más de 150,000 usuarios activos en los primeros 6 meses, incremento del ticket promedio en un 22% y levantamiento de ronda de inversión pre-semilla.'
  }
];
