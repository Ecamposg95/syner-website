import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    topic: 'Diagnóstico operativo',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--surface)] relative z-10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact info & Channels */}
          <Reveal delay={100} duration={800} className="flex flex-col gap-6">
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Hablemos
            </span>
            
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[var(--ink)] leading-tight">
              Empieza por una<br />conversación.
            </h3>
            
            <p className="text-base text-[var(--ink-2)] leading-relaxed max-w-[44ch]">
              Establecemos relaciones de largo plazo basadas en confianza y compromiso — local, nacional, regional e internacional. Respondemos en menos de 24 horas.
            </p>

            <div className="flex flex-col gap-6 mt-6">
              
              {/* Phone Channel */}
              <a 
                href="tel:+525530893734" 
                className="group flex gap-4 items-center p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-tint)] text-[var(--accent-strong)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">
                    Llámanos · 9 am – 7 pm
                  </div>
                  <div className="text-base font-bold text-[var(--ink)] mt-0.5">
                    +52 (55) 3089-3734
                  </div>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a 
                href="https://wa.me/525540934614" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex gap-4 items-center p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-tint)] text-[var(--accent-strong)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">
                    WhatsApp Directo
                  </div>
                  <div className="text-base font-bold text-[var(--ink)] mt-0.5">
                    +52 (55) 4093-4614
                  </div>
                </div>
              </a>

              {/* Email Channel */}
              <a 
                href="mailto:info@synerpass.com" 
                className="group flex gap-4 items-center p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-tint)] text-[var(--accent-strong)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">
                    Decir hola
                  </div>
                  <div className="text-base font-bold text-[var(--ink)] mt-0.5">
                    info@synerpass.com
                  </div>
                </div>
              </a>

              {/* Office Channel (Address) */}
              <div className="flex gap-4 items-start p-3 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-tint)] text-[var(--accent-strong)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">
                    Visítanos · CDMX
                  </div>
                  <div className="text-sm text-[var(--ink-2)] mt-1 max-w-[32ch] leading-relaxed">
                    Anaxágoras 851, Col. Narvarte Poniente, CP 03020, Benito Juárez, CDMX
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Form */}
          <Reveal delay={250} duration={900} className="w-full">
            <div className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)]">
            {submitted ? (
              <div className="py-16 px-4 flex flex-col items-center justify-center text-center gap-4 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-[var(--pos)]/10 text-[var(--pos)] flex items-center justify-center shadow-inner overflow-hidden">
                  <svg className="w-8 h-8 text-[var(--pos)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path className="animate-checkmark" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[var(--ink)] tracking-tight mt-2">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-sm text-[var(--muted)] max-w-sm">
                  Gracias por escribirnos, {formData.name}. Un consultor de nuestro equipo leerá tu caso y te contactará en menos de 24 horas.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-strong)] hover:text-[var(--accent)] underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="text-left">
                  <h4 className="text-lg font-bold text-[var(--ink)] tracking-tight">
                    Cuéntanos de tu empresa
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    Te contactamos en menos de 24 horas para agendar una llamada de descubrimiento de 45 minutos.
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold text-[var(--ink-2)]">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="María González" 
                      required 
                      className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="role" className="text-xs font-bold text-[var(--ink-2)]">
                      Cargo
                    </label>
                    <input 
                      type="text" 
                      id="role" 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange}
                      placeholder="Directora de Operaciones" 
                      className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="company" className="text-xs font-bold text-[var(--ink-2)]">
                      Empresa
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa" 
                      required 
                      className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold text-[var(--ink-2)]">
                      Email corporativo
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="maria@empresa.com" 
                      required 
                      className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="topic" className="text-xs font-bold text-[var(--ink-2)]">
                    ¿Qué te trae aquí?
                  </label>
                  <select 
                    id="topic" 
                    name="topic" 
                    value={formData.topic} 
                    onChange={handleChange}
                    className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300"
                  >
                    <option>Diagnóstico operativo</option>
                    <option>Implementación ERP/CRM o rescate</option>
                    <option>Adopción de IA en la operación</option>
                    <option>Dashboards y KPIs ejecutivos</option>
                    <option>Profesionalización / sucesión</option>
                    <option>Otro — lo cuento abajo</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-[var(--ink-2)]">
                    Contexto breve
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos brevemente qué retos enfrenta tu operación hoy."
                    className="py-2.5 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300 resize-none"
                  />
                </div>


                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
                  <small className="text-[10px] text-[var(--muted)] leading-tight max-w-[28ch] text-left">
                    Al enviar aceptas nuestro aviso de privacidad. Nunca compartimos tus datos.
                  </small>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="py-3 px-5 text-sm font-bold w-full sm:w-auto text-center justify-center"
                  >
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
