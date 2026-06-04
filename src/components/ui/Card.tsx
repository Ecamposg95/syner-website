import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  onClick
}) => {
  const baseClasses = 'atlas-glass rounded-xl p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]';
  const hoverClasses = hoverable ? 'atlas-glass-hover' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Card;
