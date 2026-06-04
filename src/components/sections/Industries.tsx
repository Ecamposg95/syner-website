import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

export const Industries: React.FC = () => {
  const industries = [
    {
      num: '01',
      title: 'Agroindustria',
      desc: 'Trazabilidad digital del campo al consumidor, modelos operativos de control de calidad bajo normas HACCP, integraciones con Odoo y tableros de exportación para la FDA.'
    },
    {
      num: '02',
      title: 'Manufactura',
      desc: 'Lean Manufacturing, estandarización de procesos, círculos de mejora continua, cumplimiento ISO, Six Sigma y optimización de eficiencia operativa en planta.'
    },
    {
      num: '03',
      title: 'Banca y servicios financieros',
      desc: 'Automatización de procesos repetitivos con agentes de IA de Atlas Tech, planes de continuidad de negocio (BCP), eficiencia operativa y cumplimiento regulatorio.'
    },
    {
      num: '04',
      title: 'Retail y consumo',
      desc: 'Modelos comerciales integrados, optimización logística de inventarios, analítica predictiva de ventas y plataformas de fidelización respaldadas por Open Cashback.'
    },
    {
      num: '05',
      title: 'Logística y transporte',
      desc: 'Ruteo inteligente, integración de sistemas de tracking de embarques, mitigación de riesgos de cadena de suministro y planes de continuidad operativa.'
    },
    {
      num: '06',
      title: 'Salud y farma',
      desc: 'Optimización de procesos clínicos y administrativos, adopción tecnológica del personal médico, cumplimiento NOM y digitalización del historial del paciente.'
    },
    {
      num: '07',
      title: 'Educación y sector público',
      desc: 'Modernización del servicio público con el ecosistema GovTech SIGMA: trámites en línea, unificación catastral y recaudación tributaria simplificada.'
    },
    {
      num: '08',
      title: 'Empresas familiares en crecimiento',
      desc: 'Profesionalización de la estructura de mando, gobierno corporativo, protocolos de sucesión familiar y mentoría liderada por Humberto Villanueva bajo el enfoque de Estrategia con Alma.'
    }
  ];

  return (
    <section id="industrias" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--bg)] border-t border-[var(--border)] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <Reveal delay={100} duration={800}>
          <SectionHeader
            eyebrow="Industrias"
            title="Donde operamos."
            description="Hemos transformado operaciones en sectores tan diversos como agroindustria, banca, retail, manufactura, salud y servicios profesionales — siempre con el mismo método adaptado al lenguaje de cada industria."
          />
        </Reveal>

        {/* Industries Grid matching the original border layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--border)] mt-8">
          {industries.map((ind, idx) => (
            <Reveal 
              key={ind.num} 
              delay={150 + idx * 80} 
              duration={700}
              className="w-full"
            >
              <article 
                className="p-8 border-r border-b border-[var(--border)] bg-[var(--surface)] premium-card flex flex-col gap-4 min-h-[180px] text-left h-full"
              >
                {/* Number */}
                <span className="font-mono text-xs text-[var(--muted-2)] font-semibold">
                  {ind.num}
                </span>

                {/* Title */}
                <h4 className="text-lg font-bold text-[var(--ink)] tracking-tight">
                  {ind.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed">
                  {ind.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
