import React from 'react';
import Reveal from '../ui/Reveal';

export const Differentiators: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Hands-on, no solo asesores',
      desc: 'No vendemos reportes que acaban archivados. Bajamos al piso de operación a estandarizar procesos, configurar los sistemas, capacitar líderes y asegurar que la tecnología funcione.'
    },
    {
      num: '02',
      title: 'Método probado, no improvisación',
      desc: 'Cinco fases de trabajo con entregables claros, plazos definidos y criterios de salida. En todo momento sabes dónde está el proyecto, qué falta y cuánto vale lo que ya se logró.'
    },
    {
      num: '03',
      title: 'Equipo intergeneracional',
      desc: 'Rigor y experiencia directiva liderada por Humberto Villanueva, autor de Estrategia con Alma, junto con la agilidad digital de desarrolladores e ingenieros de IA de Atlas Tech.'
    },
    {
      num: '04',
      title: 'Tecnología sin marketing',
      desc: 'IA, Big Data, ERP, automatización — donde resuelven un problema de negocio real. No adoptamos modas; integramos soluciones donde mueven la rentabilidad o reducen costos.'
    }
  ];

  return (
    <section id="por-que" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--surface-2)] border-t border-[var(--border)] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Stat Card */}
          <div className="flex flex-col gap-6 text-left">
            <Reveal delay={100} duration={800} className="flex flex-col gap-4">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Por qué Syner
              </span>
              
              {/* Giant Stat Block */}
              <div className="border-t-2 border-[var(--ink)] pt-6 mt-2 flex flex-col gap-2">
                <span className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[var(--ink)] tracking-tighter leading-none select-none flex items-start gap-1">
                  22
                  <sup className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--accent-strong)] mt-2">
                    +
                  </sup>
                </span>
                <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mt-2 leading-relaxed max-w-[28ch]">
                  años combinando rigor directivo con sensibilidad organizacional. Boutique por elección — no por tamaño.
                </p>
              </div>

              <p className="text-base md:text-lg text-[var(--ink-2)] leading-relaxed max-w-[38ch] mt-4">
                Leemos el negocio, el sistema y lo humano para devolver claridad, enfoque y resultados. No vendemos slides — entregamos operación funcionando.
              </p>
            </Reveal>

            {/* Book Feature Card */}
            <Reveal delay={300} duration={900} className="w-full">
              <div className="mt-8 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 grid grid-cols-[80px_1fr] gap-5 items-center relative overflow-hidden group">
                {/* Highlight accent glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,var(--accent-glow)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Cover Thumbnail with realistic 3D hover rotation */}
                <div className="w-[80px] rounded-md overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.12)] border border-[var(--border-strong)] transform group-hover:scale-105 group-hover:rotate-[-4deg] transition-transform duration-300">
                  <img 
                    src="/libro-portada.png" 
                    alt="Portada del libro Estrategia con Alma" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Book Info */}
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[var(--accent-strong)] uppercase">
                    La Obra · Edición 2026
                  </span>
                  <h5 className="text-base font-bold text-[var(--ink)] tracking-tight">
                    Estrategia con Alma
                  </h5>
                  <p className="text-xs text-[var(--muted)] leading-relaxed max-w-[34ch]">
                    El arte de transformar empresas con propósito y conciencia. Diez capítulos con casos reales de empresas mexicanas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Differentiators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[var(--border)] mt-2">
            {points.map((point, idx) => (
              <Reveal 
                key={point.num} 
                delay={150 + idx * 80} 
                duration={700}
                className="w-full"
              >
                <div 
                  className="p-6 md:p-8 border-r border-b border-[var(--border)] bg-[var(--surface)] premium-card text-left flex flex-col gap-4 min-h-[220px] h-full"
                >
                  <h4 className="text-base font-extrabold text-[var(--ink)] flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold text-[var(--accent)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-2)]">
                      {point.num}
                    </span>
                    {point.title}
                  </h4>
                  
                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentiators;
