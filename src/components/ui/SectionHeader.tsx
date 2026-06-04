import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  onDark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  onDark = false,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16 items-end mb-12 md:mb-16 ${className}`}>
      <div className="flex flex-col gap-3">
        <span className={`font-mono text-[11px] font-semibold tracking-[0.18em] uppercase flex items-center gap-2 ${
          onDark ? 'text-brand-inkMuted' : 'text-[var(--muted)]'
        }`}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#0ea5e9]" />
          {eyebrow}
        </span>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-balance ${
          onDark ? 'text-brand-ink' : 'text-[var(--ink)]'
        }`}>
          {title}
        </h2>
      </div>
      {description && (
        <div className="max-w-[56ch]">
          <p className={`text-base md:text-lg leading-relaxed ${
            onDark ? 'text-brand-inkMuted' : 'text-[var(--muted)]'
          }`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
export default SectionHeader;
