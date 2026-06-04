import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink flex flex-col relative overflow-hidden">
      {/* Texture noise layer */}
      <div className="atlas-noise" />

      {/* Navigation */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="flex-grow pt-[72px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageShell;
