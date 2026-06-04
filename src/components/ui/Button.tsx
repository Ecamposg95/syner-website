import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'arrow' | 'whatsapp';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 select-none whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-brand-accent hover:bg-brand-accentHover text-brand-bgDark shadow-[0_4px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_4px_30px_rgba(14,165,233,0.4)] active:scale-95',
    secondary: 'bg-brand-violet hover:bg-brand-violetAccent text-brand-ink shadow-[0_4px_20px_rgba(147,51,234,0.25)] hover:shadow-[0_4px_30px_rgba(147,51,234,0.4)] active:scale-95',
    ghost: 'border border-brand-borderLight bg-transparent hover:bg-brand-border/30 text-brand-ink active:scale-95',
    arrow: 'group bg-transparent text-brand-accent hover:text-brand-accentHover px-0 py-0 gap-1 active:scale-95',
    whatsapp: 'bg-emerald-600 hover:bg-emerald-500 text-brand-ink shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] active:scale-95'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={combinedClasses}
      >
        {children}
        {variant === 'arrow' && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        )}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {variant === 'arrow' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      )}
    </button>
  );
};
export default Button;
