import React, { useState } from 'react';
import { methodologySteps } from '../../data/methodology';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="metodo" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--bg)] border-t border-[var(--border)] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <Reveal delay={100} duration={800}>
          <SectionHeader
            eyebrow="Método Syner"
            title="Cinco fases. Una sola disciplina."
            description="Diagnosticamos, diseñamos, implementamos, acompañamos en la adopción y escalamos. No hay magia — hay método. Cada fase tiene entregables claros, plazos definidos y criterios de salida medibles."
          />
        </Reveal>

        {/* Timeline Rail */}
        <div className="relative mt-12">
          
          {/* Connecting Rail Line (Hidden on Mobile) */}
          <div className="absolute top-[36px] left-[7%] right-[7%] h-[2.5px] bg-gradient-to-r from-[var(--border)] via-[var(--accent)] to-[var(--border)] hidden lg:block z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 relative z-10 lg:border-t lg:border-dashed border-[var(--border)]">
            {methodologySteps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <Reveal 
                  key={step.phase}
                  delay={150 + idx * 80}
                  duration={700}
                  className="w-full"
                >
                  <div 
                    onClick={() => setActiveStep(idx)}
                    className={`relative p-6 pt-8 pb-10 flex flex-col gap-6 border-b md:border-r border-[var(--border)] md:border-dashed last:border-r-0 cursor-pointer transition-all duration-300 h-full ${
                      isActive 
                        ? 'bg-[var(--surface-2)] shadow-[inset_0_-2px_0_0_var(--accent)]' 
                        : 'bg-transparent hover:bg-[var(--surface-2)]/40 hover:-translate-y-1'
                    }`}
                  >
                    {/* Step Dot Number */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10.5px] font-bold border-2 transition-all duration-300 z-10 ${
                      isActive 
                        ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_0_0_6px_rgba(44,154,166,0.15)]' 
                        : 'bg-[var(--surface)] border-[var(--border-strong)] text-[var(--muted)]'
                    }`}>
                      {step.phase}
                    </div>

                    {/* Title & Desc */}
                    <div className="flex flex-col gap-2 text-left">
                      <h3 className="text-lg font-bold text-[var(--ink)] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverable Footer */}
                    <div className="pt-3 border-t border-[var(--border)] mt-auto text-left">
                      <span className="font-mono text-[9px] font-semibold text-[var(--muted-2)] uppercase tracking-wider block">
                        Entregable
                      </span>
                      <strong className="text-[11px] text-[var(--accent-strong)] font-bold block mt-1 leading-snug">
                        {step.deliverableTitle}
                      </strong>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Highlight Panel for active step details */}
          <Reveal delay={600} duration={800} className="w-full">
            <div className="mt-8 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row gap-6 justify-between items-start md:items-center text-left overflow-hidden">
              <div key={activeStep} className="flex flex-col gap-1 max-w-[62ch] animate-[fadeIn_0.5s_ease-out]">
                <span className="font-mono text-[9px] font-bold text-[var(--accent)] uppercase tracking-wider">
                  Fase Seleccionada: {methodologySteps[activeStep].phase} · {methodologySteps[activeStep].title}
                </span>
                <p className="text-sm text-[var(--ink-2)] mt-1">
                  {methodologySteps[activeStep].deliverableDetails}
                </p>
              </div>

              <span className="text-xs font-mono text-[var(--muted)] py-1.5 px-3 rounded-md bg-[var(--surface-2)] border border-[var(--border)] whitespace-nowrap self-end md:self-auto">
                Hito de salida verificado ✓
              </span>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default Methodology;
