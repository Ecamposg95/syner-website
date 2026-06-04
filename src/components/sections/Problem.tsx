import React from 'react';
import Reveal from '../ui/Reveal';

export const Problem: React.FC = () => {
  const symptoms = [
    'La operación depende de personas clave; si una falta, todo se traba.',
    'El ERP o CRM se implementó pero nadie lo adoptó — o se quedó a la mitad.',
    'No hay KPIs claros y los reportes mensuales llegan tarde y sin contexto.',
    'Cada área tiene su propia versión de los datos. Nadie confía en ninguna.',
    'Los proyectos de transformación se anuncian, arrancan, y mueren a los seis meses.',
    'La empresa habla de IA, pero la operación todavía corre en hojas de cálculo.'
  ];

  return (
    <section id="problema" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--surface-2)] border-t border-b border-[var(--border)] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Copy */}
        <Reveal delay={100} duration={800} className="flex flex-col gap-6">
          <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            El Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--ink)] leading-[1.08] max-w-md">
            Crecer sin método convierte la operación en{' '}
            <span className="relative inline-block text-[var(--muted-2)] whitespace-nowrap">
              caos costoso
              <span className="absolute left-[-2%] right-[-2%] top-[55%] h-[2.5px] bg-[var(--accent)] -rotate-[2deg] rounded-full" />
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-[var(--ink-2)] leading-relaxed max-w-[44ch] mt-4 text-left">
            Empresas que crecieron por instinto llegan a un techo: <strong>procesos atados a personas</strong>, sistemas mal implementados, decisiones sin datos, equipos saturados y un CEO operando lo que ya no debería operar. Conocemos la película — y sabemos cómo cambiar el final.
          </p>
        </Reveal>

        {/* Right Column: Symptoms List */}
        <ol className="flex flex-col border-t border-[var(--border)]" aria-label="Síntomas comunes">
          {symptoms.map((symptom, idx) => (
            <Reveal 
              key={idx} 
              delay={200 + idx * 80} 
              duration={700}
            >
              <li 
                className="grid grid-cols-[32px_1fr] gap-4 py-4 md:py-5 border-b border-[var(--border)] text-sm md:text-base text-[var(--ink-2)] items-start hover:bg-[var(--surface)] hover:text-[var(--accent)] px-2 transition-all duration-300 hover:translate-x-1 cursor-default"
              >
                <span className="font-mono text-[11px] font-semibold text-[var(--muted-2)] pt-0.5 tracking-wider">
                  0{idx + 1}
                </span>
                <span className="text-left">{symptom}</span>
              </li>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default Problem;
