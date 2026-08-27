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
    ],
    factsTitle: 'Datos rápidos',
    facts: {
      location: 'Ubicación actual',
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
    intro: 'Proyectos personales, desarrollos para practicar, todo fuera de empresa.',
    viewRepo: 'Ver repositorio',
    viewGuide: 'Ver imágenes del proyecto y más información',
    guideBadge: 'Con guía',
    stackLabel: 'Stack',
    roleLabel: 'Rol',
    roleValue: 'Desarrollo individual, de principio a fin.',
    prevAria: 'Proyecto anterior',
    nextAria: 'Siguiente proyecto',
    dotsAria: 'Selecciona un proyecto',
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
      valnex: {
        name: 'VALNEX — panel financiero personal',
        description:
          'Simulacro de aplicación real financiera multiusuario que centraliza cuentas, efectivo, fondos, acciones y cripto en una sola vista. Backend en Java/Spring Boot como única fuente de verdad para los cálculos, con SQLite embebido y frontend en React con TypeScript.',
      },
      norda: {
        name: 'NØRDA — plataforma de café de especialidad',
        description:
          'Simulacro de aplicación real de cafetería que centraliza el catálogo, pedidos, pagos y gestión del negocio en una sola plataforma. Arquitectura full-stack con backend en Java/Spring Boot y frontend en React como base para la gestión de pedidos y usuarios. DEMO de pagos reales con Stripe SDK.',
      },
      'sport-padel-sagunt': {
        name: 'Sport Padel Sagunt — rediseño del club',
        description:
          'Rediseño completo de la web de un club de pádel de Puerto de Sagunto, desarrollado junto a un compañero: reservas de pista, pagos y avisos en tiempo real sobre Next.js con App Router, Drizzle ORM y PostgreSQL.',
      },
    },
  },
  projectGuide: {
    backToProjects: 'Volver a proyectos',
    kicker: 'Guía del proyecto',
    repoLabel: 'Ver repositorio en GitHub',
    guides: {
      valnex: {
        tagline: 'Tu patrimonio. Una sola visión.',
        metaDescription:
          'Guía visual de VALNEX: panel financiero multiusuario con backend Java/Spring Boot y frontend React. Recorrido por el dashboard, patrimonio, inversiones, automatizaciones y apuestas.',
        intro: [
          'VALNEX es un simulacro de aplicación financiera real: configuras tus datos una vez (saldos, inversiones, reglas de aportación) y la aplicación se encarga de generar los movimientos recurrentes, devengar los intereses de las cuentas remuneradas, actualizar el precio de mercado de las inversiones y reconstruir la evolución del patrimonio con snapshots periódicos.',
          'El backend en Java/Spring Boot es la única fuente de verdad: todo cálculo financiero se hace una vez en el servidor y el frontend solo pinta lo que ya viene calculado. Eso permite no mezclar nunca dos conceptos que se confunden con facilidad — el capital que aportaste tú y el beneficio que ha generado la inversión.',
        ],
        tourTitle: 'Recorrido por la aplicación',
        shots: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            description:
              'Punto de entrada tras iniciar sesión: total del patrimonio, variación desde el último snapshot y evolución en el tiempo. Un botón de privacidad oculta todas las cantidades de golpe, útil para enseñar la app a alguien.',
          },
          {
            id: 'patrimonio',
            title: 'Mi patrimonio',
            description:
              'Distribución del dinero por categoría (banco, fondos, cuenta remunerada, riesgo alto, apuestas). Desde aquí se dan de alta cuentas bancarias, efectivo o cuenta remunerada, y se aporta dinero a una inversión existente sin salir de la pantalla.',
          },
          {
            id: 'inversiones',
            title: 'Inversiones',
            description:
              'Cada posición muestra valor actual, capital aportado y rentabilidad, recalculados a partir del histórico real de operaciones. Los activos se identifican por ticker (acciones, con precio automático) o por ISIN (fondos UCITS, precio manual).',
          },
          {
            id: 'automatizaciones',
            title: 'Automatizaciones',
            description:
              'Reglas recurrentes (diaria, semanal, quincenal, mensual, anual) que aportan a una cuenta o a una inversión cuando toca, incluidos ingresos externos como la nómina. Cada ejecución — o cada vez que se salta por falta de saldo — queda en un log consultable.',
          },
          {
            id: 'apuestas',
            title: 'Apuestas',
            description:
              'Sección opcional, desactivada por defecto en cualquier cuenta nueva. Cuando se activa, muestra resultado neto, ROI y volumen apostado por casa de apuestas.',
          },
          {
            id: 'mobile',
            title: 'En móvil',
            description: 'La misma interfaz adaptada a pantalla pequeña, sin recortar funcionalidad.',
          },
        ],
        highlightsTitle: 'Decisiones técnicas',
        highlights: [
          'Backend como única fuente de verdad: patrimonio, rentabilidad, intereses y resultado de apuestas se calculan en el servidor, nunca en el cliente.',
          'Multiusuario real con aislamiento verificado por tests de integración: nadie puede alcanzar por API los datos de otra persona.',
          'SQLite embebido — sin servidor de base de datos que instalar ni administrar; la aplicación entera arranca desde un único fichero.',
          'Asistente de bienvenida en el primer inicio de sesión: unas pocas preguntas dejan la cuenta con datos reales en vez de un dashboard vacío.',
          'Panel de administración con el listado de cuentas de la instalación y la configuración global de los procesos automáticos.',
          'Copia de seguridad exportable e importable en JSON, modo claro/oscuro y borrado permanente de la propia cuenta con doble confirmación.',
        ],
        stackTitle: 'Stack',
      },
      norda: {
        tagline: 'Descubre el café detrás de cada origen.',
        metaDescription:
          'Guía visual de NØRDA: plataforma full-stack de café de especialidad con backend Java/Spring Boot, frontend React y pagos con Stripe SDK. Recorrido por catálogo, mapa de orígenes, checkout y panel de administración.',
        intro: [
          'NØRDA es un simulacro de aplicación real de cafetería: catálogo con trazabilidad completa, mapa interactivo de orígenes, motor de recomendación propio, ecommerce con checkout e inventario real, suscripciones, reseñas, blog editorial y un panel de administración completo.',
          'El backend en Java/Spring Boot es la única fuente de verdad de precio, stock, rol y pago, con una arquitectura de puertos y adaptadores para las integraciones externas — el SDK de Stripe está integrado como demostración de pagos reales sin acoplar el dominio a un proveedor concreto.',
        ],
        tourTitle: 'Recorrido por la aplicación',
        shots: [
          {
            id: 'home',
            title: 'Portada',
            description:
              'Entrada a la plataforma: presentación de la marca, cafés destacados y accesos directos al catálogo, al mapa de orígenes y al recomendador.',
          },
          {
            id: 'catalog',
            title: 'Catálogo',
            description:
              'Filtrado por país, región, proceso, tueste y método de preparación. Precio y disponibilidad vienen siempre del backend, nunca calculados en el cliente.',
          },
          {
            id: 'product',
            title: 'Ficha de producto',
            description:
              'Trazabilidad completa del lote — productor, finca, cosecha — con variantes de molienda y formato, y reseñas que solo puede dejar quien compró ese café.',
          },
          {
            id: 'map',
            title: 'Mapa de orígenes',
            description:
              'Navegación del origen del café sobre un mapa interactivo, mundial y por país, sin depender de claves de API de terceros.',
          },
          {
            id: 'finder',
            title: 'Coffee Finder',
            description:
              'Cinco preguntas y hasta tres recomendaciones explicadas ("te recomendamos X porque…"), resueltas por un motor de reglas determinista propio en lugar de una caja negra.',
          },
          {
            id: 'journal',
            title: 'Journal',
            description:
              'Blog editorial con artículos sobre método, origen y producción, con SEO dinámico y JSON-LD por página.',
          },
          {
            id: 'admin',
            title: 'Panel de administración',
            description:
              'Métricas reales, gestión de productos con generación automática de variantes, pedidos con máquina de estados, inventario, clientes, reseñas, cupones y orígenes.',
          },
        ],
        highlightsTitle: 'Decisiones técnicas',
        highlights: [
          'Checkout con reserva atómica de inventario, cupones, cálculo de envío e impuestos — todo validado en el backend.',
          'Pagos con el SDK de Stripe integrado tras una arquitectura de puertos y adaptadores, de modo que el dominio no depende del proveedor.',
          'PostgreSQL con migraciones Flyway aplicadas al arrancar: no hay paso manual de base de datos.',
          'Autenticación con JWT y cookie de refresco; no existe endpoint público para crear administradores, por decisión de seguridad.',
          'Tests reales en las dos capas: JUnit 5, Mockito y Testcontainers en backend; Vitest y React Testing Library en frontend; Playwright para E2E y accesibilidad con axe-core.',
          'Cada decisión de arquitectura documentada como ADR, con sus límites conocidos.',
        ],
        stackTitle: 'Stack',
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
    locationLabel: 'Ubicación actual',
  },
  builtWith: {
    kicker: 'Sobre este sitio',
    title: 'Con qué está construido',
    intro: 'Este portfolio es un proyecto en sí mismo: sin plantillas, con el código abierto en GitHub.',
    repoLabel: 'Ver el código en GitHub',
    items: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
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
