import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { SynerLogoWhite } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Problema', href: '#problema' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Método', href: '#metodo' },
    { label: 'Transformation Hub', href: '#hub' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Diferenciadores', href: '#por-que' },
    { label: 'Contacto', href: '#contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled background state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    // Active Section Tracking via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navLinks.map(link => link.href.replace('#', '')).concat('top');

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-bg/90 border-b border-brand-border/60 backdrop-blur-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center group" onClick={closeMenu}>
          <SynerLogoWhite className="h-9 w-auto text-brand-ink group-hover:text-brand-accent transition-colors duration-200" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-semibold relative py-1.5 transition-all duration-300 ${
                  isActive
                    ? 'text-brand-accent'
                    : 'text-brand-inkMuted hover:text-brand-ink'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent rounded-full transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="primary" href="#contacto" className="py-2 px-4 text-xs font-bold">
            Agenda una llamada
          </Button>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-brand-border bg-brand-bgSurface/50 text-brand-ink"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-brand-ink transition-transform duration-300 ${
            isOpen ? 'transform rotate-45 translate-y-[1.5px]' : ''
          }`} />
          <span className={`block w-5 h-[1.5px] bg-brand-ink my-1.5 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`} />
          <span className={`block w-5 h-[1.5px] bg-brand-ink transition-transform duration-300 ${
            isOpen ? 'transform -rotate-45 -translate-y-[1.5px]' : ''
          }`} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`lg:hidden fixed inset-0 top-[60px] z-40 bg-brand-bgDark/95 backdrop-blur-lg border-t border-brand-border/60 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg font-semibold transition-colors duration-200 py-2 border-b border-brand-border/30 ${
                  isActive ? 'text-brand-accent' : 'text-brand-inkMuted hover:text-brand-ink'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <Button variant="primary" href="#contacto" onClick={closeMenu} className="w-full py-3 mt-4 text-center justify-center">
            Agenda una llamada
          </Button>
        </nav>
      </div>

      {/* Scroll Progress Indicator Bar */}
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default Navbar;

