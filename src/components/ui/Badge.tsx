import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'accent' | 'violet' | 'indigo' | 'slate';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'slate'
}) => {
  const baseClasses = 'font-mono text-[10.5px] font-medium tracking-[0.06em] px-2.5 py-1 rounded-md border';
  
  const variantClasses = {
    accent: 'bg-brand-accent/5 border-brand-accent/20 text-brand-accent',
    violet: 'bg-brand-violet/5 border-brand-violet/20 text-brand-violetAccent',
    indigo: 'bg-brand-indigo/5 border-brand-indigo/20 text-brand-indigo',
    slate: 'bg-brand-bgSurface border-brand-border text-brand-inkMuted'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
export default Badge;
