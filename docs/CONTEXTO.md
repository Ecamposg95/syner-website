# Contexto Estratégico y Decisiones de Diseño — Grupo Syner Website

Este documento detalla las decisiones estratégicas de posicionamiento, la narrativa de marca, la arquitectura de información, el sistema visual de temas mixtos y los activos corporativos oficiales adoptados en la reestructuración del website de **Grupo Syner**.

---

## 1. Visión y Posicionamiento de Marca

### Consultoría Boutique y Transformación Real
Grupo Syner se posiciona como una **firma boutique de consultoría en transformación empresarial y reorganización de procesos**. A diferencia de las agencias de desarrollo tecnológico convencionales, Grupo Syner combina el **rigor directivo y financiero** con la **adopción de tecnología útil** (automatización, CRM/ERP Odoo, dashboards de KPIs e IA aplicada) y una **sensibilidad humana** profunda hacia las organizaciones.

### Integración Estratégica del Ecosistema
El contenido del sitio web está enriquecido estratégica y orgánicamente con referencias a sus brazos operativos,GovTech e iniciativas de lealtad sin alterar la estructura limpia del layout original:
*   **Atlas Tech**: Brazo de ingeniería de software e inteligencia artificial (integrado como proveedor tecnológico en Servicios y Operaciones).
*   **SIGMA**: Solución GovTech especializada en digitalización catastral y recaudación municipal (integrado en el sector de Educación y Sector Público en Industrias).
*   **Atlas Kapital**: Aceleradora y brazo de inversión (integrado en servicios estratégicos).
*   **Open Cashback**: Plataforma modular de fidelización comercial (integrada en Retail y Consumo).

---

## 2. Identidad Visual y Logos Oficiales

Conforme a las pautas de marca de la firma, se han integrado los logotipos vectoriales vectorizados oficiales del Grupo:
*   **Logotipo de Color (`Artboard 2.svg`)**: Implementado en el código como `SynerLogoColor`. Cuenta con una paleta de color corporativo institucional: azul profundo (`#002a54`) para el wordmark principal "Syner", azul celeste (`#5da8c7`) para el descriptor "Group", y degradados cálidos (dorados, naranjas y azules) para los círculos de la red/orbe de conexiones.
*   **Logotipo Blanco/Monocromático (`Artboard 3.svg`)**: Implementado como `SynerLogoWhite`. Utiliza el atributo `fill="currentColor"` para integrarse de forma flexible y con alto contraste en secciones de fondo oscuro como el Navbar y el Footer, reaccionando a los efectos hover de Tailwind CSS.

Tanto en la barra de navegación pegajosa (Sticky Nav) como en el pie de página (Footer) se han removido los isotipos de simulación basados en gradientes CSS nativos en favor de los SVG oficiales corporativos.

---

## 3. Narrativa y Tesis (Estrategia con Alma)

### Tono Corporativo, Directivo y Humano
La narrativa del sitio web evita la palabrería corporativa vacía. En su lugar, utiliza un tono **sobrio, claro, asertivo y de negocios**:
*   *Sistemas operativos de negocio* y *eficiencia operativa* en lugar de promesas abstractas.
*   *Trazabilidad digital de procesos* y *adopción de usuarios* como métricas reales de éxito del software.

### Integración de la Obra "Estrategia con Alma"
Se incorporó la trayectoria del fundador, **Humberto A. Villanueva Alvear**, y su obra editorial de 2026: **"Estrategia con Alma: El arte de transformar empresas con propósito y conciencia"**.
*   El libro y su portada oficial (`libro-portada.png`) se exponen como una tarjeta de alta fidelidad estética en la sección de **Diferenciadores ("Por qué Syner")**, aportando legitimidad y humanismo a la propuesta técnica de la firma.

---

## 4. Arquitectura de la Información (Layout landing-3)

La estructura sigue rigurosamente el orden de **10 secciones clave** definido en el archivo de referencia `syner-group-landing-3.html`, garantizando un flujo lógico y una tasa de conversión óptima:

1.  **Navbar (Sticky / Dark)**: Acceso a enlaces de navegación y botón de llamada (CTA) con el logotipo blanco oficial.
2.  **Hero Principal**: Enunciado de impacto inmediato, con el fondo original de cuadrícula CSS y nodos de red pulsantes para una estética ejecutiva sobria y de alto rendimiento.
3.  **Trustbar (Light)**: Muestra la selección de marcas líderes de la industria (Modelo, Bimbo, Walmart, etc.) que respaldan la experiencia.
4.  **El Problema (Light)**: Sección de concientización titulada *"Crecer sin método convierte la operación en caos costoso"*, detallando los 6 síntomas organizacionales más comunes.
5.  **Servicios (Light)**: Matriz modular que detalla las 9 capacidades operativas de la firma (estrategia, procesos, IA, dashboards, etc.).
6.  **Método Syner (Light)**: Riel/línea de tiempo conductora de 5 fases (Diagnóstico -> Escalamiento) que evidencia la claridad en entregables y plazos.
7.  **Transformation Hub™ (Dark)**: Demostración visual de la transparencia de Grupo Syner a través de un workspace digital interactivo (Overview de KPIs, roadmap de sprints y bitácora de control).
8.  **Industrias (Light)**: Cuadrícula que describe la operación de la firma en 8 verticales clave, incluyendo Agroindustria y Sector Público.
9.  **Diferenciadores - Por qué Syner (Light)**: Sección de ventajas competitivas (Hands-on, rigurosidad, equipo intergeneracional y tecnología con sentido) junto a la tarjeta del libro y portada de Humberto Villanueva.
10. **Final CTA (Dark)**: Mensaje de cierre de alto impacto con enlaces directos para agendar llamadas y chat de WhatsApp corporativo.
11. **Contacto (Light)**: Canales de atención directos (teléfono, correo, dirección en CDMX) y formulario interactivo con validación de estado en React.
12. **Footer (Dark)**: Enlaces de sitio, redes sociales y aviso de privacidad con logotipo monocromático oficial.

---

## 5. Decisiones de Diseño y Sistema Visual

### Alternancia de Temas (Mixed Themes)
Para respetar la estética y el balance visual del diseño original, el sitio web utiliza una estructura de **fondos alternados**:
*   **Dark Sections (Nav, Hero, Hub, Final CTA, Footer)**: Fondo negro-espacial profundo (`#020617` / `#0d1418`) y acentos de color cian (`#0ea5e9` / `#38bdf8`) y violeta brillante (`#9333ea`).
*   **Light Sections (Trustbar, Problem, Services, Methodology, Industries, Differentiators, Contact)**: Fondo gris cálido ultra claro (`#fafbfc` / `oklch(99% 0.004 230)`) y bordes sutiles en gris claro (`#e6ecef`) para una lectura clara, organizada y corporativa.

### Estética Premium y Fondos
*   **Cuadrícula y Resplandores (Hero Background)**: El Hero utiliza el fondo original exacto de `syner-group-landing-3.html`, compuesto por una cuadrícula lineal de precisión de `80px` de paso con gradientes radiales como máscara de transparencia y dos grandes resplandores en fondo (azul noche y verde azulado).
*   **Nodos Pulsantes**: Tres puntos de red absolute posicionados en el Hero que imitan conexiones de red operativas reales mediante animaciones CSS puras de pulsación (`pulsing`) y ondas de rebote (`ringing`), logrando un alto rendimiento en cualquier GPU.
*   **Dashboard Interactivo (Transformation Hub)**: Panel que emula un entorno web real permitiendo alternar tabs (Overview con gráficos SVG responsivos, Roadmap, Entregables y Changelog) y completar tareas interactivamente.
*   **Formulario Interactivos**: React hooks para control de inputs y presentación de un banner de éxito animado al enviar el formulario.

---

## 6. Sistema de Animaciones, Transiciones y Contrastes Premium

Con el fin de elevar la experiencia y diseño del sitio web a un estándar de consultoría de élite, se implementaron mejoras en el flujo de interactividad:
*   **Revelado Dinámico por Scroll (`Reveal.tsx`)**: Se expandió el componente de intersección para soportar múltiples presets de animación acelerada por hardware (`fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in` y la máscara cinematográfica de revelado lateral `clip-x`).
*   **Luz y Profundidad Ambientales**: Se añadieron orbes flotantes de gradiente cian y violeta (`ambient-glow`) con movimientos de flotación sinusoidal en los fondos oscuros del Hero, Transformation Hub y Final CTA.
*   **Barra e Indicadores de Navegación**: Se implementó una línea delgada y animada de progreso de scroll en la parte inferior del Navbar. Adicionalmente, se configuró un `IntersectionObserver` que detecta en tiempo real la sección del scroll activa y añade un subrayado animado al enlace correspondiente de la barra.
*   **Micro-interacciones de Rieles y Formularios**: 
    *   *Metodología*: Re-montaje animado de la descripción del entregable (`key={activeStep}`) cada vez que se selecciona una fase.
    *   *Contacto*: Efecto de resplandor difuso cian (`focus:shadow`) al seleccionar campos de texto y animación autodisparada de trazado SVG (`stroke-dashoffset`) en la marca de verificación al enviar datos.
*   **Correcciones de Contraste Tipográfico**:
    *   *SectionHeader*: Ajuste condicional del color de títulos y descripciones según la prop `onDark`. Si es `false`, se fuerza el uso de tipografía oscura legible (`text-[var(--ink)]`), solucionando problemas de texto blanco sobre fondo blanco.
    *   *Trustbar*: Se reemplazó la sintaxis inválida de opacidad en Tailwind por colores pizarra legibles por defecto (`text-[var(--muted)]`) que revelan el acento cian institucional (`hover:text-brand-accent`) y escalan al pasar el cursor.

