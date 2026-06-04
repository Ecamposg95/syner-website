import React from 'react';
import PageShell from './components/layout/PageShell';
import Hero from './components/sections/Hero';
import Trustbar from './components/sections/Trustbar';
import Problem from './components/sections/Problem';
import Services from './components/sections/Services';
import Methodology from './components/sections/Methodology';
import TransformationHub from './components/sections/TransformationHub';
import Industries from './components/sections/Industries';
import Differentiators from './components/sections/Differentiators';
import FinalCTA from './components/sections/FinalCTA';
import Contact from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <PageShell>
      {/* 1. Hero Principal y Nav */}
      <Hero />

      {/* 2. Trustbar */}
      <Trustbar />

      {/* 3. El Problema */}
      <Problem />

      {/* 4. Servicios */}
      <Services />

      {/* 5. Metodología (Fases) */}
      <Methodology />

      {/* 6. Transformation Hub / Dashboard Mockup */}
      <TransformationHub />

      {/* 7. Industrias */}
      <Industries />

      {/* 8. Diferenciadores (Por qué Syner y Portada Libro) */}
      <Differentiators />

      {/* 9. Final CTA */}
      <FinalCTA />

      {/* 10. Formulario de Contacto */}
      <Contact />
    </PageShell>
  );
};

export default App;
