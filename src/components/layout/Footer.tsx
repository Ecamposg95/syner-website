import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { SynerLogoWhite } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bgDark border-t border-brand-border/60 text-brand-ink py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 text-left">
          <a href="#top" className="flex items-center group">
            <SynerLogoWhite className="h-9 w-auto text-brand-ink group-hover:text-brand-accent transition-colors duration-200" />
          </a>
          <p className="text-sm text-brand-inkMuted leading-relaxed max-w-[34ch]">
            Firma boutique de consultoría en transformación empresarial y venture building. Estrategia con alma en acción — claridad, método y humanidad desde 2003.
          </p>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h5 className="font-mono text-[10.5px] font-semibold tracking-widest text-brand-inkMutedDark uppercase">
            Servicios
          </h5>
          <ul className="flex flex-col gap-2.5 text-sm text-brand-inkMuted">
            <li><a href="#servicios" className="hover:text-brand-ink transition-colors">Consultoría Estratégica</a></li>
            <li><a href="#servicios" className="hover:text-brand-ink transition-colors">Operaciones y Procesos</a></li>
            <li><a href="#servicios" className="hover:text-brand-ink transition-colors">Automatización & IA</a></li>
            <li><a href="#servicios" className="hover:text-brand-ink transition-colors">Integración Tecnológica</a></li>
            <li><a href="#servicios" className="hover:text-brand-ink transition-colors">Dashboards & KPIs</a></li>
          </ul>
        </div>

        {/* Ecosistema Column */}
        <div className="flex flex-col gap-4">
          <h5 className="font-mono text-[10.5px] font-semibold tracking-widest text-brand-inkMutedDark uppercase">
            Ecosistema
          </h5>
          <ul className="flex flex-col gap-2.5 text-sm text-brand-inkMuted">
            <li><a href="#ecosistema" className="hover:text-brand-ink transition-colors">Atlas Tech</a></li>
            <li><a href="#ecosistema" className="hover:text-brand-ink transition-colors">SIGMA (GovTech)</a></li>
            <li><a href="#ecosistema" className="hover:text-brand-ink transition-colors">Atlas Kapital (Venture)</a></li>
            <li><a href="#ecosistema" className="hover:text-brand-ink transition-colors">Open Cashback</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h5 className="font-mono text-[10.5px] font-semibold tracking-widest text-brand-inkMutedDark uppercase">
            Contacto
          </h5>
          <ul className="flex flex-col gap-3 text-sm text-brand-inkMuted">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-brand-accent flex-shrink-0" />
              <a href="tel:+525530893734" className="hover:text-brand-ink transition-colors">+52 (55) 3089-3734</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={14} className="text-brand-accent flex-shrink-0" />
              <a href="https://wa.me/525540934614" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ink transition-colors">+52 (55) 4093-4614</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-brand-accent flex-shrink-0" />
              <a href="mailto:info@synerpass.com" className="hover:text-brand-ink transition-colors">info@synerpass.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">Anaxágoras 851, Col. Narvarte Poniente, Benito Juárez, CP 03020, CDMX</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-inkMutedDark">
        <span>© 2026 Syner Group · Ciudad de México · Todos los derechos reservados.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-inkMuted transition-colors">Aviso de Privacidad</a>
          <span>·</span>
          <a href="#" className="hover:text-brand-inkMuted transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
