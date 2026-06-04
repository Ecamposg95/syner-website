import React from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--dark-bg-2)] text-[var(--dark-fg)] relative z-10 overflow-hidden text-center">
      
      {/* Background decoration lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.25] pointer-events-none" style={{ maskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000, transparent 70%)' }} />

      {/* Floating Ambient Glowing Orb */}
      <div className="ambient-glow bg-[rgba(147,51,234,0.07)] w-[400px] h-[400px] top-[10%] left-[30%] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Eyebrow */}
        <Reveal delay={100} duration={800} preset="clip-x" className="mb-6">
          <span className="font-mono text-[11px] font-semibold tracking-[0.24em] text-[var(--dark-muted)] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            El futuro no se improvisa
          </span>
        </Reveal>

        {/* Title */}
        <Reveal delay={250} duration={900} preset="fade-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 text-balance">
            El futuro{' '}
            <span className="font-serif italic font-normal text-[var(--accent-bright)]">
              se diseña
            </span>
            <br />
            y se ejecuta.
          </h2>
        </Reveal>

        {/* Lead */}
        <Reveal delay={400} duration={900} preset="fade-up">
          <p className="text-base md:text-lg text-[var(--dark-muted)] leading-relaxed max-w-[56ch] mb-10">
            Agenda una conversación de descubrimiento — sin compromiso, una hora. Te devolvemos un primer mapa de oportunidades de tu operación.
          </p>
        </Reveal>

        {/* Action Row */}
        <Reveal delay={550} duration={850} preset="zoom-in" className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" href="#contacto">
            Agenda una conversación
          </Button>
          <Button variant="ghost" href="https://wa.me/525540934614" target="_blank" rel="noopener noreferrer" className="border-white/10 hover:border-white/20 hover:bg-white/5">
            WhatsApp directo
          </Button>
        </Reveal>

      </div>
    </section>
  );
};

export default FinalCTA;

