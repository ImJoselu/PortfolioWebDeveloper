import type { Dictionary } from './types';

export const es: Dictionary = {
  htmlLang: 'es',
  locale: 'es_ES',
  meta: {
    title: 'Jose Luis Tórtola Cervera — Desarrollador Full-Stack',
    description:
      'Desarrollador Full-Stack en Valencia (España). Java, Spring, Angular y Vue.js, con experiencia en integraciones SOAP/REST. Experiencia, proyectos y contacto.',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Stack',
    howIWork: 'Cómo trabajo',
    education: 'Formación',
    contact: 'Contacto',
    skipToContent: 'Saltar al contenido principal',
    downloadCv: 'Descargar CV',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
  },
  languageSwitch: {
    label: 'English',
    ariaLabel: 'Ver esta página en inglés',
  },
  theme: {
    toggleToDark: 'Activar modo oscuro',
    toggleToLight: 'Activar modo claro',
  },
  game: {
    ariaPlay: 'Jugar una partida de snake',
    ariaShowPhoto: 'Volver a la foto',
    pressToStart: 'Pulsa para jugar',
    score: 'Puntuación',
    gameOver: 'Fin de la partida',
    restart: 'Pulsa para reiniciar',
  },
  hero: {
    kicker: 'Jose Luis Tórtola Cervera · Desarrollador Full-Stack · Valencia, España',
    heading: 'Conecto sistemas empresariales con interfaces modernas.',
    subheading:
      'Mantengo y construyo aplicaciones Java/Spring en producción, desarrollo integraciones SOAP/REST y diseño frontends con Angular y Vue.js.',
    statusBadge: 'Actualmente en Lãberit',
    ctaProjects: 'Ver proyectos',
    ctaExperience: 'Ver experiencia',
    ctaContact: 'Contactar',
    ctaCv: 'Descargar CV',
    photoAlt: 'Retrato de Jose Luis Tórtola Cervera',
  },
  about: {
    kicker: 'Sobre mí',
    title: '¿Quién soy?',
    paragraphs: [
      'Soy desarrollador full-stack en Puerto de Sagunto (Valencia). Empecé con un Grado Medio en Sistemas Microinformáticos y Redes y seguí con el Grado Superior en Desarrollo de Aplicaciones Web — desde entonces no he dejado de construir software.',
      'Desde 2023 trabajo en Lãberit manteniendo aplicaciones Java/Spring en producción, desarrollando integraciones SOAP/REST y construyendo interfaces con Angular y TypeScript. Antes, en mis prácticas en TuGesto, desarrollé la web pública con Vue.js, PHP y Laravel.',
      'Me interesa especialmente el punto donde backend y frontend se encuentran: definir un contrato claro entre sistemas y construir encima una interfaz que un usuario entienda a la primera.',
    ],
    factsTitle: 'Datos rápidos',
    facts: {
      location: 'Ubicación',
      languages: 'Idiomas',
      availability: 'Disponibilidad',
      workMode: 'Modalidad',
    },
    availabilityValue: 'Horaria y geográfica',
    workModeValue: 'Remoto, presencial o híbrido',
  },
  languages: {
    es: 'Castellano',
    ca: 'Catalán',
    en: 'Inglés',
    native: 'Nativo',
    advanced: 'Avanzado',
    intermediate: 'Intermedio',
  },
  experience: {
    kicker: 'Experiencia',
    title: 'Trayectoria profesional',
    present: 'Actualidad',
    stackLabel: 'Stack',
    items: {
      laberit: {
        role: 'Desarrollador Full-Stack',
        summary: 'Mantenimiento y evolución de aplicaciones corporativas, integraciones y nuevos desarrollos.',
        bullets: [
          'Mantuve y mejoré múltiples aplicaciones corporativas desarrolladas con Java y Spring, asegurando estabilidad y rendimiento en entornos de producción.',
          'Desarrollé integraciones avanzadas con SOAP y REST, interpretando documentación WSDL, PAI y PAE para generar servicios robustos y adaptados a los requisitos.',
          'Participé activamente en la creación de un nuevo portal empresarial desarrollado con Java y Spring, colaborando en arquitectura, backend y pruebas.',
          'Diseñé funcionalidades frontend utilizando Angular y TypeScript, mejorando la experiencia de usuario en nuevos proyectos.',
          'Realicé tareas de análisis funcional, estimación de esfuerzos, preparación de documentación técnica y participación en reuniones con clientes.',
          'Asumí responsabilidades de mentor, guiando a nuevos compañeros en tareas diarias, resolución de dudas y adaptación al equipo.',
        ],
      },
      tugesto: {
        role: 'FCT — Desarrollador Web',
        summary: 'Prácticas formativas (3 meses) desarrollando la web pública de un software de nóminas y RRHH.',
        bullets: [
          'Diseñé, desarrollé e implementé la web pública utilizando Vue.js, consiguiendo una interfaz de usuario interactiva y amigable.',
          'Implementé características y funcionalidades complejas utilizando PHP y Laravel, lo que resultó en sistemas robustos y escalables.',
        ],
      },
    },
  },
  projects: {
    kicker: 'Proyectos',
    title: 'Proyectos personales',
    intro:
      'Proyectos personales, fuera del trabajo en cliente, para practicar arquitectura frontend y comparar enfoques (SPA frente a monolito).',
    viewRepo: 'Ver repositorio',
    stackLabel: 'Stack',
    roleLabel: 'Rol',
    roleValue: 'Desarrollo individual, de principio a fin.',
    items: {
      'concesionario-vue': {
        name: 'Concesionario — SPA con Vue.js',
        description:
          'Catálogo de vehículos como aplicación de página única (SPA), explorando componentización, estado compartido y enrutado en el cliente.',
      },
      'concesionario-php': {
        name: 'Concesionario — monolito PHP',
        description:
          'El mismo catálogo de vehículos resuelto como aplicación monolítica en PHP y MySQL, para comparar el enfoque frente a una SPA.',
      },
    },
  },
  skills: {
    kicker: 'Stack tecnológico',
    title: 'Con qué trabajo',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      integrations: 'Integraciones',
      databases: 'Bases de datos',
      tools: 'Herramientas',
      ai: 'IA',
    },
  },
  howIWork: {
    kicker: 'Metodología',
    title: 'Cómo trabajo',
    steps: [
      {
        title: 'Analizar',
        description:
          'Análisis funcional y estimación de esfuerzos antes de escribir código, normalmente en reuniones directas con el cliente.',
      },
      {
        title: 'Diseñar',
        description: 'Definición de arquitectura y de los contratos de integración (SOAP/REST) entre sistemas y capas.',
      },
      {
        title: 'Construir',
        description: 'Desarrollo backend (Java/Spring, PHP/Laravel) y frontend (Angular, Vue.js) sobre esos contratos.',
      },
      {
        title: 'Probar y documentar',
        description: 'Verificación antes de producción y documentación técnica para que el trabajo sea mantenible por el equipo.',
      },
      {
        title: 'Acompañar',
        description: 'Mentoring de compañeros nuevos: dudas del día a día y adaptación al equipo.',
      },
    ],
  },
  education: {
    kicker: 'Formación',
    title: 'Educación y certificaciones',
    certificationsTitle: 'Certificaciones',
    viewPdf: 'Ver certificado (PDF)',
    items: {
      'grado-superior': { name: 'Grado Superior — Desarrollo de Aplicaciones Web' },
      'grado-medio': { name: 'Grado Medio — Sistemas Microinformáticos y Redes' },
    },
    certifications: {
      'java-cert': { name: 'Certificado Profesional Java' },
      'azure-foundry': { name: 'Innovación con IA generativa: novedades en Azure AI Foundry' },
      'pl-600': { name: 'PL-600: Microsoft Power Platform Solution Architect' },
    },
  },
  contact: {
    kicker: 'Contacto',
    title: '¿Hablamos?',
    lead: '¿Buscas un desarrollador full-stack para tu equipo? Escríbeme, respondo rápido.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    locationLabel: 'Ubicación',
  },
  builtWith: {
    kicker: 'Sobre este sitio',
    title: 'Con qué está construido',
    intro: 'Este portfolio es un proyecto en sí mismo: sin plantillas, con el código abierto en GitHub.',
    repoLabel: 'Ver el código en GitHub',
    items: [
      { name: 'Astro', description: 'Generador de sitios estáticos' },
      { name: 'TypeScript', description: 'Tipado estático' },
      { name: 'Tailwind CSS', description: 'Estilos' },
      { name: 'GitHub Actions', description: 'Integración y despliegue continuo' },
      { name: 'GitHub Pages', description: 'Alojamiento' },
    ],
  },
  footer: {
    backToTop: 'Volver arriba',
    rightsSuffix: 'Todos los derechos reservados.',
  },
  commandPalette: {
    openHint: 'Buscar',
    placeholder: 'Buscar una sección o acción…',
    empty: 'Sin resultados',
    groupNav: 'Navegación',
    groupActions: 'Acciones',
    close: 'Cerrar',
    actions: {
      copyEmail: 'Copiar email',
      emailCopied: '¡Email copiado!',
      downloadCv: 'Descargar CV',
      toggleThemeDark: 'Activar modo oscuro',
      toggleThemeLight: 'Activar modo claro',
      switchLanguage: 'Switch to English',
      openLinkedin: 'Abrir LinkedIn',
      openGithub: 'Abrir GitHub',
    },
  },
  skipLink: 'Saltar al contenido principal',
};
