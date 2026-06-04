import React, { useState } from 'react';
import { LayoutGrid, TrendingUp, Calendar, FolderClosed, Clock, ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../ui/Reveal';

type TabType = 'overview' | 'kpis' | 'roadmap' | 'deliverables' | 'changelog';

export const TransformationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Mapear proceso de facturación (Lean)', user: 'MR', done: true },
    { id: 2, text: 'Definir KPIs operativos en Odoo', user: 'SG', done: true },
    { id: 3, text: 'Configurar tablero ejecutivo (Power BI)', user: 'SG', done: false },
    { id: 4, text: 'Capacitar líderes de área en ERP', user: 'JP', done: false },
    { id: 5, text: 'Cierre de fase de adopción y feedback', user: 'MR', done: false }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const bullets = [
    { title: 'KPIs vivos', desc: 'Métricas conectadas a los datos reales del negocio, no slides estáticos.' },
    { title: 'Roadmap y entregables', desc: 'Cada hito con responsable, plazo y evidencia adjunta.' },
    { title: 'Bitácora de decisiones', desc: 'El porqué de cada cambio, fechado y firmado digitalmente.' },
    { title: 'Documentación viva', desc: 'Procesos, manuales de Odoo y artefactos siempre actualizados.' },
    { title: 'Visibilidad ejecutiva', desc: 'Del CEO al líder de área, cada uno ve lo que necesita ver.' }
  ];

  return (
    <section id="hub" className="py-20 md:py-28 px-6 md:px-8 bg-[var(--dark-bg)] text-[var(--dark-fg)] border-t border-[var(--dark-border)] relative z-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,var(--accent-glow)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Floating Ambient Glowing Orbs */}
      <div className="ambient-glow bg-[rgba(14,165,233,0.06)] w-[400px] h-[400px] -top-[10%] -left-[10%] pointer-events-none" />
      <div className="ambient-glow bg-[rgba(147,51,234,0.06)] w-[400px] h-[400px] -bottom-[10%] -right-[10%] pointer-events-none" style={{ animationDelay: '-6s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Checklist */}
          <Reveal delay={100} duration={800} className="flex flex-col gap-6">
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[var(--dark-muted)] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_#2c9aa6]" />
              Transformation Hub™
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08] text-left">
              Cada proyecto vive en un{' '}
              <span className="font-serif italic font-normal text-[var(--accent-bright)]">
                workspace digital.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--dark-muted)] leading-relaxed mt-2 text-left">
              Nuestra plataforma operativa donde el cliente ve, en tiempo real, qué se está haciendo, qué decisiones se tomaron, qué KPIs se movieron y qué falta por entregar. Consultoría con trazabilidad — no presentaciones de PowerPoint que se pierden en correos.
            </p>

            <ul className="flex flex-col gap-4 mt-6 text-left">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="grid grid-cols-[22px_1fr] gap-3 items-start text-sm text-[var(--dark-muted)]">
                  <span className="w-4 h-4 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <strong className="text-white font-semibold">{bullet.title}</strong> — {bullet.desc}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right Column: Dashboard Mockup Window */}
          <Reveal delay={250} duration={900} className="w-full">
            <div className="w-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--dark-border-2)] rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] flex flex-col min-h-[480px] relative">
            
            {/* Chrome Header Bar */}
            <div className="h-8 bg-[var(--surface-2)] border-b border-[var(--border)] px-4 flex items-center relative z-10">
              <div className="flex gap-1.5 absolute left-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="w-full text-center font-mono text-[10.5px] font-semibold text-[var(--muted)] tracking-wider uppercase select-none">
                syner.hub · transformación operativa 2026
              </div>
            </div>

            {/* Main Window Body */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-[200px_1fr] text-xs">
              
              {/* Sidebar */}
              <aside className="bg-[var(--surface-2)] border-r border-[var(--border)] p-4 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] font-bold text-[var(--muted-2)] uppercase tracking-wider pl-2 block mb-1">
                    Workspace
                  </span>
                  
                  {[
                    { type: 'overview', label: 'Overview', icon: <LayoutGrid size={14} /> },
                    { type: 'kpis', label: 'KPIs', icon: <TrendingUp size={14} /> },
                    { type: 'roadmap', label: 'Roadmap', icon: <Calendar size={14} /> },
                    { type: 'deliverables', label: 'Entregables', icon: <FolderClosed size={14} /> },
                    { type: 'changelog', label: 'Bitácora', icon: <Clock size={14} /> }
                  ].map((item) => (
                    <button
                      key={item.type}
                      onClick={() => setActiveTab(item.type as TabType)}
                      className={`w-full flex items-center gap-3 py-2 px-3 rounded-lg font-medium select-none transition-all duration-300 ${
                        activeTab === item.type
                          ? 'bg-[var(--accent-tint)] text-[var(--accent-strong)] font-semibold border-l-2 border-[var(--accent)] rounded-l-none translate-x-1'
                          : 'text-[var(--ink-2)] hover:bg-[var(--border)]/40 hover:translate-x-1'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>


                {/* Team Info Footer inside Sidebar */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[var(--ink)] text-white flex items-center justify-center font-semibold text-[11px] shadow-sm">
                    MR
                  </div>
                  <div className="leading-tight flex flex-col text-left">
                    <span className="font-bold text-[var(--ink)]">M. Romero</span>
                    <span className="text-[10px] text-[var(--muted)]">CEO · Cliente</span>
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="p-6 flex flex-col gap-5 min-w-0">
                
                {/* Header breadcrumb & status */}
                <div className="flex justify-between items-start gap-4">
                  <div className="text-left">
                    <span className="font-mono text-[9.5px] text-[var(--muted-2)] uppercase tracking-wider">
                      Workspace / Transformación 2026
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-[var(--ink)] mt-0.5">
                      Reordenamiento operativo · Q3
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[#4ca374]/10 text-[#4ca374] font-mono text-[9px] font-bold border border-[#4ca374]/20 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ca374] animate-pulse" />
                    EN ADOPCIÓN
                  </span>
                </div>

                {/* Progress bar */}
                <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-3 grid grid-cols-[auto_1fr_auto] gap-3 items-center">
                  <span className="font-mono text-[10px] text-[var(--muted)] font-semibold uppercase">
                    Avance Fase 4 de 5
                  </span>
                  <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden relative">
                    <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[var(--accent-strong)] to-[var(--accent)] rounded-full transition-all duration-500" style={{ width: '67%' }} />
                  </div>
                  <span className="font-mono font-bold text-[var(--ink)]">
                    67%
                  </span>
                </div>

                {/* Tab Views */}
                {activeTab === 'overview' && (
                  <div className="flex flex-col gap-4 animate-[fadeIn_0.4s_ease-out]">
                    {/* KPI cards grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {[
                        { label: 'Ahorro generado', val: '$ 4.2M', delta: '▲ +18% vs baseline', up: true },
                        { label: 'Adopción usuarios', val: '82%', delta: '▲ +12 pp este mes', up: true },
                        { label: 'Procesos auto.', val: '27 / 34', delta: '▲ 5 en sprint', up: true },
                        { label: 'OKRs trimestre', val: '6 / 8', delta: '● 2 en riesgo', up: false }
                      ].map((k, idx) => (
                        <div key={idx} className="border border-[var(--border)] p-3 rounded-lg bg-[var(--surface)] flex flex-col gap-1 text-left relative overflow-hidden">
                          <span className="font-mono text-[9px] text-[var(--muted-2)] uppercase tracking-wider block">
                            {k.label}
                          </span>
                          <span className="text-lg font-bold text-[var(--ink)] block">
                            {k.val}
                          </span>
                          <span className={`text-[9.5px] font-semibold flex items-center gap-1 mt-1 ${
                            k.up ? 'text-[var(--pos)]' : 'text-[var(--warn)]'
                          }`}>
                            {k.delta}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Column 2 details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Operational Chart */}
                      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--surface)] flex flex-col gap-2">
                        <div className="flex justify-between items-baseline mb-1">
                          <h5 className="font-bold text-[var(--ink)]">Eficiencia operativa</h5>
                          <span className="text-[10px] text-[var(--muted-2)] font-mono">90d · semanal</span>
                        </div>
                        <div className="h-[96px] w-full relative">
                          <svg className="w-full h-full" viewBox="0 0 280 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#2c9aa6" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#2c9aa6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {/* Gridlines */}
                            <line x1="0" y1="20" x2="280" y2="20" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="3 3" />
                            <line x1="0" y1="50" x2="280" y2="50" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="3 3" />
                            <line x1="0" y1="80" x2="280" y2="80" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="3 3" />
                            
                            {/* Area & Line */}
                            <path d="M0,75 L40,70 L80,55 L120,62 L160,45 L200,32 L240,25 L280,12 L280,100 L0,100 Z" fill="url(#chartGrad)" />
                            <path d="M0,75 L40,70 L80,55 L120,62 L160,45 L200,32 L240,25 L280,12" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
                            <circle cx="280" cy="12" r="3" fill="var(--accent)" />
                            
                            {/* Labels */}
                            <text x="5" y="95" className="fill-[var(--muted-2)] text-[8px] font-mono">JUL</text>
                            <text x="130" y="95" className="fill-[var(--muted-2)] text-[8px] font-mono">AGO</text>
                            <text x="250" y="95" className="fill-[var(--muted-2)] text-[8px] font-mono">SEP</text>
                          </svg>
                        </div>
                      </div>

                      {/* Active tasks checklist */}
                      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--surface)] flex flex-col gap-2">
                        <div className="flex justify-between items-baseline mb-2">
                          <h5 className="font-bold text-[var(--ink)]">Tareas activas</h5>
                          <span className="text-[10px] text-[var(--muted-2)] font-mono">{tasks.filter(t => !t.done).length} abiertas</span>
                        </div>
                        
                        <div className="flex flex-col gap-2 overflow-y-auto max-h-[110px] pr-1">
                          {tasks.map((task) => (
                            <div 
                              key={task.id} 
                              onClick={() => toggleTask(task.id)}
                              className="flex items-center justify-between py-1.5 border-b border-[var(--border)] last:border-b-0 cursor-pointer group"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                                  task.done 
                                    ? 'bg-[var(--accent)] border-[var(--accent)] text-white' 
                                    : 'border-[var(--border-strong)] bg-[var(--surface)] group-hover:border-[var(--accent)]'
                                }`}>
                                  {task.done && <Check size={10} />}
                                </span>
                                <span className={`text-[11px] truncate text-left ${
                                  task.done ? 'text-[var(--muted-2)] line-through' : 'text-[var(--ink-2)]'
                                }`}>
                                  {task.text}
                                </span>
                              </div>
                              <span className="font-mono text-[9px] text-[var(--muted-2)] select-none">
                                {task.user}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'kpis' && (
                  <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] flex flex-col gap-4 text-left animate-[fadeIn_0.4s_ease-out]">
                    <h5 className="font-bold text-[var(--ink)] flex items-center gap-2">
                      Detalle de Métricas y KPIs de Operación
                      <ArrowUpRight size={14} className="text-[var(--accent)]" />
                    </h5>
                    <div className="flex flex-col gap-3">
                      {[
                        { name: 'Reducción en tiempo de ciclo contable', baseline: '22 días', current: '3 días', target: '2 días', prog: '95%' },
                        { name: 'Tasa de errores en facturación', baseline: '4.8%', current: '0.2%', target: '0.1%', prog: '97%' },
                        { name: 'Satisfacción usuario final (NPS)', baseline: '54', current: '82', target: '80', prog: '100%' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 border border-[var(--border)] bg-[var(--surface-2)] rounded-lg flex flex-col gap-2">
                          <div className="flex justify-between font-bold text-[var(--ink)]">
                            <span>{item.name}</span>
                            <span className="text-[var(--accent-strong)]">{item.current}</span>
                          </div>
                          <div className="grid grid-cols-3 text-[10px] text-[var(--muted)] font-mono">
                            <div>Base: {item.baseline}</div>
                            <div>Meta: {item.target}</div>
                            <div className="text-right">Completado: {item.prog}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'roadmap' && (
                  <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] flex flex-col gap-4 text-left animate-[fadeIn_0.4s_ease-out]">
                    <h5 className="font-bold text-[var(--ink)]">Roadmap de Entregas & Sprints</h5>
                    <div className="flex flex-col gap-3 border-l border-[var(--border-strong)] ml-2 pl-4">
                      {[
                        { phase: 'Fase 01', title: 'Diagnóstico e Inventario', status: 'Completado', date: 'Jul 15', active: false },
                        { phase: 'Fase 02', title: 'Diseño de Blueprint y Arquitectura', status: 'Completado', date: 'Ago 10', active: false },
                        { phase: 'Fase 03', title: 'Implementación ERP Odoo & Integraciones', status: 'Completado', date: 'Sep 05', active: false },
                        { phase: 'Fase 04', title: 'Adopción de Usuarios y Capacitación', status: 'En Curso', date: 'En proceso', active: true },
                        { phase: 'Fase 05', title: 'Escalamiento e Integración de IA', status: 'Pendiente', date: 'Oct 20', active: false }
                      ].map((item, idx) => (
                        <div key={idx} className="relative">
                          <span className={`absolute left-[-22px] top-1.5 w-3 h-3 rounded-full border-2 ${
                            item.active 
                              ? 'bg-[var(--accent)] border-[var(--accent)]' 
                              : 'bg-[var(--surface)] border-[var(--border-strong)]'
                          }`} />
                          <div className="flex justify-between items-baseline leading-none">
                            <span className="font-mono text-[9px] text-[var(--muted-2)] font-semibold uppercase">{item.phase}</span>
                            <span className="text-[10px] text-[var(--muted-2)] font-mono">{item.date}</span>
                          </div>
                          <h6 className={`text-[11.5px] font-bold mt-1 ${item.active ? 'text-[var(--accent-strong)]' : 'text-[var(--ink)]'}`}>
                            {item.title} — <span className="font-normal text-xs text-[var(--muted)]">{item.status}</span>
                          </h6>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'deliverables' && (
                  <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] flex flex-col gap-4 text-left animate-[fadeIn_0.4s_ease-out]">
                    <h5 className="font-bold text-[var(--ink)]">Evidencia y Carpetas de Entregables</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { name: 'Mapa de Transformación 360.pdf', size: '2.4 MB', date: 'Jul 14' },
                        { name: 'Blueprint de Arquitectura Odoo.pdf', size: '4.8 MB', date: 'Ago 08' },
                        { name: 'Manual del Usuario Facturación.pdf', size: '1.2 MB', date: 'Sep 02' },
                        { name: 'Dashboard_KPIs_Julio.pbix', size: '12.5 MB', date: 'Sep 04' }
                      ].map((file, idx) => (
                        <div key={idx} className="p-3 border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--surface-2)] rounded-lg flex flex-col justify-between cursor-pointer transition-colors duration-200">
                          <span className="font-bold text-[var(--ink)] truncate block">
                            {file.name}
                          </span>
                          <div className="flex justify-between font-mono text-[9.5px] text-[var(--muted-2)] mt-2">
                            <span>{file.size}</span>
                            <span>{file.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'changelog' && (
                  <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--surface)] flex flex-col gap-4 text-left animate-[fadeIn_0.4s_ease-out]">
                    <h5 className="font-bold text-[var(--ink)] flex items-center gap-1.5">
                      <Clock size={14} className="text-[var(--accent)]" />
                      Bitácora de Decisiones Trazables
                    </h5>
                    <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto">
                      {[
                        { time: 'Hace 2d', title: 'Cambio de Odoo v16 a v17 por soporte de IA', user: 'JP' },
                        { time: 'Hace 5d', title: 'Aprobación del Balanced Scorecard Q3', user: 'MR' },
                        { time: 'Hace 1w', title: 'Ajuste en flujo de inventario (Almacén Central)', user: 'SG' },
                        { time: 'Hace 2w', title: 'Congelación de catálogo de cuentas ERP', user: 'MR' }
                      ].map((log, idx) => (
                        <div key={idx} className="py-2 border-b border-[var(--border)] last:border-b-0 flex items-start gap-3">
                          <span className="font-mono text-[9.5px] text-[var(--muted-2)] w-14 flex-shrink-0 mt-0.5">{log.time}</span>
                          <div className="flex-grow min-w-0">
                            <p className="text-[11px] text-[var(--ink-2)] truncate font-medium">{log.title}</p>
                          </div>
                          <span className="font-mono text-[9.5px] text-[var(--muted-2)] bg-[var(--surface-2)] border border-[var(--border)] px-1.5 py-0.5 rounded">{log.user}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </main>

            </div>
          </div>
        </Reveal>

        </div>
      </div>
    </section>
  );
};

export default TransformationHub;
