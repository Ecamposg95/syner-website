import React from 'react';
import { services } from '../../data/services';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--bg)] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <Reveal delay={100} duration={800}>
          <SectionHeader
            eyebrow="Servicios"
            title="Un toolkit modular para mover el negocio y alinear a las personas."
            description="Nueve frentes de intervención que se combinan según el momento y la madurez de cada empresa. Cada proyecto es una historia de transformación medible — con entregables, KPIs y plazos definidos."
          />
        </Reveal>

        {/* Services Grid matching original border layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border)] mt-8">
          {services.map((svc, idx) => (
            <Reveal 
              key={svc.id} 
              delay={150 + idx * 80} 
              duration={700}
              className="w-full"
            >
              <article 
                className="relative p-8 border-r border-b border-[var(--border)] bg-[var(--surface)] premium-card flex flex-col justify-between min-h-[300px] group cursor-pointer h-full"
              >
                {/* Arrow absolute icon */}
                <span className="absolute top-8 right-8 text-lg text-[var(--ink)] opacity-35 group-hover:opacity-100 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  →
                </span>

                <div className="flex flex-col gap-4">
                  {/* Number */}
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {svc.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--ink)] tracking-tight leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                {/* Tags Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]/60 mt-auto">
                  {svc.tags.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="font-mono text-[10px] text-[var(--ink-2)] bg-[var(--surface-2)] border border-[var(--border)] px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
