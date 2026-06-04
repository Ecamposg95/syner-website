export interface MethodStep {
  phase: string;
  title: string;
  description: string;
  deliverableTitle: string;
  deliverableDetails: string;
}

export const methodologySteps: MethodStep[] = [
  {
    phase: '01',
    title: 'Diagnóstico Operativo',
    description: 'Leemos a fondo el negocio, la infraestructura tecnológica y lo humano. Identificamos brechas, fugas financieras y cuellos de botella reales en el piso de operación.',
    deliverableTitle: 'Mapa de Transformación 360°',
    deliverableDetails: 'Reporte ejecutivo con la evaluación del stack técnico, matriz de fricción operativa y lista priorizada de brechas críticas a resolver.'
  },
  {
    phase: '02',
    title: 'Diseño Estratégico',
    description: 'Modelamos el estado futuro de la organización: reestructuración de procesos, diseño de gobierno corporativo, arquitectura del stack de software y planes de KPIs.',
    deliverableTitle: 'Blueprint Operativo & Roadmap',
    deliverableDetails: 'Diagrama del flujo futuro ideal, plan de implementación detallado por fases, especificación de sistemas y diseño del Balanced Scorecard.'
  },
  {
    phase: '03',
    title: 'Implementación Hands-On',
    description: 'Bajamos a ejecutar. Configuramos el ERP/CRM, programamos integraciones de software a la medida, automatizamos flujos y desplegamos los primeros dashboards.',
    deliverableTitle: 'Sistemas & Procesos en Marcha',
    deliverableDetails: 'Software instalado y configurado, integraciones activas, manuales de usuario redactados y primer dashboard de control en tiempo real.'
  },
  {
    phase: '04',
    title: 'Acompañamiento y Adopción',
    description: 'El software no sirve si nadie lo usa. Nos quedamos en el piso capacitando personal, midiendo tasas de uso diaria y afinando la experiencia de usuario.',
    deliverableTitle: 'Cultura Habilitada & Cambio Adoptado',
    deliverableDetails: 'Sesiones de capacitación completadas, métricas de adopción por encima de la meta establecida y rituales de gobierno en funcionamiento.'
  },
  {
    phase: '05',
    title: 'Escalamiento e Innovación',
    description: 'Convertimos el proyecto en un estándar corporativo sólido. Establecemos la gobernabilidad a largo plazo y analizamos oportunidades de venture building de nuevos productos.',
    deliverableTitle: 'Sistema de Gestión Sostenible',
    deliverableDetails: 'Tableros de control ejecutivos entregados al consejo, auditoría final de procesos y roadmap para futuras expansiones e innovaciones.'
  }
];
