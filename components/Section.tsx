import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 ${className}`}>
      {children}
    </section>
  );
};