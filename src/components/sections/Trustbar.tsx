import React from 'react';
import Reveal from '../ui/Reveal';

export const Trustbar: React.FC = () => {
  const brands = [
    'Grupo Modelo', 'BIMBO', 'Walmart', 'Coca-Cola', 'BBVA', 'Siemens',
    'Bayer', 'DHL', 'FEMSA', 'Telefónica', 'Mabe', 'Schneider Electric',
    'John Deere', 'T-Systems', 'Philips', 'HBO', 'Estafeta', 'Yakult'
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-[var(--surface)] relative z-10 border-b border-[var(--border)]">
      <Reveal delay={100} duration={850} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 text-left">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10.5px] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Confían en Nosotros
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] tracking-tight">
              Organizaciones que ejecutan con ritmo y dirección
            </h3>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[56ch]">
            Selección de corporativos, grupos familiares y aliados estratégicos con los que hemos colaborado en los últimos años.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-[var(--border)]">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="h-20 flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold text-[var(--muted)] hover:text-brand-accent hover:bg-[var(--surface-2)] transition-all duration-300 select-none border-r border-b border-[var(--border)] hover:scale-[1.02] cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
};

export default Trustbar;
