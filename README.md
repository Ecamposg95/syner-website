# Website Institucional — Grupo Syner

Esta es la nueva versión del website institucional de **Grupo Syner**, reconstruida a partir del archivo de referencia [syner-group-landing-3.html](file:///c:/Users/ecamp/Devs/syner-website/context/syner-group-landing-3.html) en un desarrollo moderno, premium y altamente interactivo.

La aplicación unifica el rigor directivo y estratégico de la firma con sus marcas del ecosistema (**Atlas Tech, SIGMA, Atlas Kapital, Open Cashback**) en una landing page de una sola página (SPA) con alternancia de temas claros y oscuros (Mixed Themes).

---

## 🚀 Tecnologías y Stack

El proyecto utiliza un stack de desarrollo moderno y optimizado:

*   **Framework Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Herramienta de Construcción**: [Vite](https://vite.dev/)
*   **Estilos (CSS)**: [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
*   **Iconografía**: [Lucide React](https://lucide.dev/)

---

## 📂 Estructura de Directorios

La organización del proyecto sigue las mejores prácticas de modularidad de React:

```
syner-website/
│
├── README.md              # Este archivo
├── package.json           # Dependencias y scripts del proyecto
├── index.html             # Punto de entrada HTML con SEO meta-tags
├── vite.config.ts         # Configuración del bundler Vite
├── tailwind.config.js     # Configuración de colores y tokens de diseño
├── tsconfig.json          # Configuración del compilador TypeScript
│
├── docs/
│   └── CONTEXTO.md        # Visión de marca, narrativa y decisiones de diseño
│
├── public/                # Assets estáticos globales (Logos, Portada Libro, Retratos)
│   ├── libro-portada.png  # Portada oficial de "Estrategia con Alma"
│   ├── humberto-retrato-1.jpg
│   └── humberto-retrato-2.png
│
└── src/
    ├── main.tsx           # Punto de arranque de React
    ├── App.tsx            # Ensamblado de las 10 secciones principales (orden landing-3)
    ├── index.css          # Estilos globales y clases de glassmorphism / mixed theme
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx           # Navegación responsiva con Logo oficial blanco
    │   │   ├── Footer.tsx           # Pie de página corporativo con Logo oficial blanco
    │   │   └── PageShell.tsx        # Contenedor global de la página
    │   │
    │   ├── sections/
    │   │   ├── Hero.tsx             # Pantalla de impacto con metrics (Dark)
    │   │   ├── Trustbar.tsx         # Grid de 18 marcas y grupos corporativos (Light)
    │   │   ├── Problem.tsx          # Los 6 síntomas del caos operativo (Light)
    │   │   ├── Services.tsx         # Cards de los 9 servicios principales (Light)
    │   │   ├── Methodology.tsx      # Línea de tiempo interactiva de 5 fases (Light)
    │   │   ├── TransformationHub.tsx # Mockup de Dashboard ejecutivo interactivo (Dark)
    │   │   ├── Industries.tsx       # Cuadrícula de 8 industrias donde operamos (Light)
    │   │   ├── Differentiators.tsx  # Por qué Syner + Showcase de Libro con Portada (Light)
    │   │   ├── FinalCTA.tsx         # Mensaje de cierre de alto impacto (Dark)
    │   │   └── Contact.tsx          # Canales físicos y Formulario interactivo (Light)
    │   │
    │   └── ui/
    │       ├── Button.tsx           # Botón premium responsivo
    │       ├── Card.tsx             # Card con glassmorphism acrílico
    │       ├── SectionHeader.tsx    # Cabeceras de sección estandarizadas
    │       ├── Badge.tsx            # Etiquetas mono con estética tech
    │       └── Logo.tsx             # SVG de logotipos oficiales (Color / Blanco)
    │
    ├── data/
    │   ├── services.ts            # Datos de los 9 servicios
    │   └── useCases.ts            # Casos de uso de la operación
    │
    └── lib/
        └── utils.ts               # Utilidades generales
```

---

## 🛠️ Instalación y Uso Local

Para levantar el servidor de desarrollo local o compilar el sitio para producción, sigue estos pasos:

### 1. Clonar e Instalar Dependencias
Instala los paquetes necesarios definidos en `package.json`:
```bash
npm install
```

### 2. Correr el Servidor de Desarrollo
Levanta el sitio web localmente con recarga rápida en caliente (HMR):
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 3. Compilar para Producción
Genera la carpeta `dist` optimizada y minificada para ser desplegada en cualquier servidor estático:
```bash
npm run build
```

---

## 📝 Próximos Pasos

1.  **Conexión del Formulario**: En `Contact.tsx`, conectar la acción de envío del formulario (React Submit Handler) a un endpoint de correo real o servicio CRM (como HubSpot, Salesforce o ActiveCampaign) para capturar leads comerciales B2B en producción.
2.  **CDN de Assets**: Si es necesario, configurar las imágenes y retratos en un CDN de alto rendimiento para mejorar los tiempos de carga en dispositivos móviles bajo conexiones inestables.
