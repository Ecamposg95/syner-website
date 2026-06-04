import React from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export const Hero: React.FC = () => {
  const metrics = [
    { num: '22', suffix: '+ años', desc: 'Acompañando transformaciones en empresas y grupos familiares.' },
    { num: '100', suffix: '+', desc: 'Organizaciones intervenidas en LATAM, de PyMEs a Fortune 500.' },
    { num: '5', suffix: ' fases', desc: 'En nuestro método probado: de diagnóstico a escalamiento.' },
    { num: '1', suffix: ' hub', desc: 'Nuestra plataforma digital con KPIs y entregables en tiempo real.' }
  ];

  return (
    <section id="top" className="relative w-full overflow-hidden min-h-screen bg-[var(--dark-bg)] text-[var(--dark-fg)] flex flex-col justify-between">
      {/* Background Grid matching landing-3 exactly */}
      <div 
        className="absolute inset-0 opacity-35 z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--dark-border) 1px, transparent 1px), linear-gradient(to bottom, var(--dark-border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: '-1px -1px',
          maskImage: 'radial-gradient(ellipse at 75% 30%, #000 30%, transparent 75%)', 
          WebkitMaskImage: 'radial-gradient(ellipse at 75% 30%, #000 30%, transparent 75%)' 
        }} 
        aria-hidden="true"
      />
      
      {/* Background Glows matching landing-3 exactly */}
      <div 
        className="absolute inset-[-10%] z-0 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(60% 50% at 80% 20%, var(--accent-glow) 0%, transparent 60%), radial-gradient(40% 40% at 15% 85%, rgba(44, 154, 166, 0.1) 0%, transparent 60%)' 
        }} 
        aria-hidden="true"
      />

      {/* Floating Ambient Glowing Orb */}
      <div className="ambient-glow bg-[rgba(14,165,233,0.08)] w-[350px] h-[350px] top-[15%] left-[5%] pointer-events-none" />

      {/* Pulsing Nodes matching landing-3 exactly */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <span className="hero-node" style={{ top: '22%', right: '18%' }} />
        <span className="hero-node" style={{ top: '58%', right: '9%', animationDelay: '-1.2s' }} />
        <span className="hero-node" style={{ top: '38%', right: '30%', width: '7px', height: '7px', animationDelay: '-2.2s' }} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-32 pb-16 flex-grow flex flex-col justify-center">
        
        {/* Animated Eyebrow Badge with Clip Mask */}
        <Reveal delay={100} duration={900} preset="clip-x" className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full atlas-glass text-[10.5px] font-mono tracking-widest text-brand-inkMuted uppercase">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute w-full h-full rounded-full bg-brand-accent opacity-75 animate-ping-slow" />
              <span className="relative rounded-full w-full h-full bg-brand-accent" />
            </span>
            Firma Boutique de Transformación · LATAM
          </div>
        </Reveal>

        {/* Hero Copy */}
        <div className="max-w-4xl">
          <Reveal delay={250} duration={900} preset="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-ink leading-[1.05] mb-6 text-left">
              Transformamos empresas con<br />
              <span className="text-gradient">estrategia, procesos, datos</span><br />
              e inteligencia artificial.
            </h1>
          </Reveal>
          
          <Reveal delay={400} duration={900} preset="fade-up">
            <p className="text-lg md:text-xl text-brand-inkMuted leading-relaxed max-w-[66ch] mb-10 text-left">
              Acompañamos a organizaciones en crecimiento a ordenar su operación, adoptar tecnología y construir modelos de gestión <strong className="text-brand-ink font-semibold">medibles, escalables y preparados para el futuro</strong>. Hands-on: no solo recomendamos, implementamos a tu lado.
            </p>
          </Reveal>

          {/* Action CTAs with Zoom In Transition */}
          <Reveal delay={550} duration={800} preset="zoom-in" className="flex flex-wrap gap-4">
            <Button variant="primary" href="#contacto">
              Agenda un diagnóstico
            </Button>
            <Button variant="ghost" href="#servicios">
              Ver servicios
            </Button>
          </Reveal>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 md:mt-32 pt-8 border-t border-brand-border/40 text-left">
          {metrics.map((m, idx) => (
            <Reveal key={idx} delay={700 + idx * 100} duration={850} preset="zoom-in" className="flex flex-col gap-2">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-brand-ink flex items-baseline gap-1">
                {m.num}
                <span className="text-sm font-medium text-brand-accent">{m.suffix}</span>
              </div>
              <p className="text-xs md:text-sm text-brand-inkMuted leading-normal max-w-[22ch]">
                {m.desc}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;

