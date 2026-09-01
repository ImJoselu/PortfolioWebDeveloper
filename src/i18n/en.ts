import type { Dictionary } from './types';

export const en: Dictionary = {
  htmlLang: 'en',
  locale: 'en_US',
  meta: {
    title: 'Jose Luis Tórtola Cervera — Full-Stack Developer',
    description:
      'Full-Stack Developer based in Valencia, Spain. Java, Spring, Angular and Vue.js, with hands-on experience in SOAP/REST integrations. Experience, projects and contact.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Stack',
    howIWork: 'How I work',
    education: 'Education',
    contact: 'Contact',
    skipToContent: 'Skip to main content',
    downloadCv: 'Download CV',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },
  languageSwitch: {
    label: 'Español',
    ariaLabel: 'View this page in Spanish',
  },
  theme: {
    toggleToDark: 'Switch to dark mode',
    toggleToLight: 'Switch to light mode',
  },
  game: {
    ariaPlay: 'Play a game of snake',
    ariaShowPhoto: 'Back to photo',
    pressToStart: 'Press to play',
    score: 'Score',
    gameOver: 'Game over',
    restart: 'Press to restart',
  },
  hero: {
    kicker: 'Jose Luis Tórtola Cervera · Full-Stack Developer · Valencia, Spain',
    heading: 'I connect enterprise systems with modern interfaces.',
    subheading:
      'I maintain and build Java/Spring applications in production, develop SOAP/REST integrations, and design frontends with Angular and Vue.js.',
    statusBadge: 'Currently at Lãberit',
    ctaProjects: 'View projects',
    ctaExperience: 'View experience',
    ctaContact: 'Get in touch',
    ctaCv: 'Download CV',
    photoAlt: 'Portrait of Jose Luis Tórtola Cervera',
  },
  about: {
    kicker: 'About me',
    title: 'Who am I?',
    paragraphs: [
      "I'm a full-stack developer based in Puerto de Sagunto (Valencia, Spain). I started with a vocational degree in Microcomputer Systems and Networks and followed it with a higher vocational degree in Web Application Development — I haven't stopped building software since.",
      'Since 2023 I work at Lãberit maintaining Java/Spring applications in production, developing SOAP/REST integrations, and building interfaces with Angular and TypeScript. Before that, during my internship at TuGesto, I built their public website with Vue.js, PHP and Laravel.',
    ],
    factsTitle: 'Quick facts',
    facts: {
      location: 'Current location',
      languages: 'Languages',
      availability: 'Availability',
      workMode: 'Work mode',
    },
    availabilityValue: 'Flexible schedule and location',
    workModeValue: 'Remote, on-site or hybrid',
  },
  languages: {
    es: 'Spanish',
    ca: 'Catalan',
    en: 'English',
    native: 'Native',
    advanced: 'Advanced',
    intermediate: 'Intermediate',
  },
  experience: {
    kicker: 'Experience',
    title: 'Professional background',
    present: 'Present',
    stackLabel: 'Stack',
    items: {
      laberit: {
        role: 'Full-Stack Developer',
        summary: 'Maintaining and evolving corporate applications, integrations and new developments.',
        bullets: [
          'Maintained and improved multiple corporate applications built with Java and Spring, ensuring stability and performance in production environments.',
          'Developed advanced SOAP and REST integrations, interpreting WSDL, PAI and PAE documentation to build robust, requirement-driven services.',
          'Actively contributed to building a new enterprise portal with Java and Spring, collaborating on architecture, backend and testing.',
          'Designed frontend features with Angular and TypeScript, improving the user experience on new projects.',
          'Carried out functional analysis, effort estimation, technical documentation and client meetings.',
          'Took on mentoring responsibilities, guiding new teammates through day-to-day tasks and onboarding.',
        ],
      },
      tugesto: {
        role: 'Internship — Web Developer',
        summary: 'Three-month internship building the public website of a payroll and HR software product.',
        bullets: [
          'Designed, developed and shipped the public website using Vue.js, achieving an interactive, user-friendly interface.',
          'Implemented complex features with PHP and Laravel, resulting in robust and scalable systems.',
        ],
      },
    },
  },
  projects: {
    kicker: 'Projects',
    title: 'Personal projects',
    intro: 'Personal projects — things I build to practise, all outside company work.',
    viewRepo: 'View repository',
    viewGuide: 'See project screenshots and more information',
    guideBadge: 'Has a guide',
    stackLabel: 'Stack',
    roleLabel: 'Role',
    roleValue: 'Solo development, end to end.',
    prevAria: 'Previous project',
    nextAria: 'Next project',
    dotsAria: 'Select a project',
    items: {
      'concesionario-vue': {
        name: 'Car dealership — Vue.js SPA',
        description:
          'A vehicle catalog built as a single-page application (SPA), exploring componentization, shared state and client-side routing.',
      },
      'concesionario-php': {
        name: 'Car dealership — PHP monolith',
        description: 'The same vehicle catalog rebuilt as a monolithic PHP and MySQL application, to compare the approach against an SPA.',
      },
      valnex: {
        name: 'VALNEX — personal finance dashboard',
        description:
          'A production-style multi-user finance application that centralizes bank accounts, cash, funds, stocks and crypto in one view. Java/Spring Boot backend as the single source of truth for calculations, with embedded SQLite and a React + TypeScript frontend.',
      },
      norda: {
        name: 'NØRDA — specialty coffee platform',
        description:
          'A production-style coffee shop application that centralizes the catalog, orders, payments and back-office management on a single platform. Full-stack architecture with a Java/Spring Boot backend and a React frontend as the base for order and user management. Real-payments DEMO with the Stripe SDK.',
      },
      'sport-padel-sagunt': {
        name: 'Sport Padel Sagunt — club website redesign',
        description:
          'A full redesign of a padel club website in Puerto de Sagunto, built together with a teammate: court booking, payments and real-time notices on Next.js with the App Router, Drizzle ORM and PostgreSQL.',
      },
    },
  },
  projectGuide: {
    backToProjects: 'Back to projects',
    kicker: 'Project guide',
    repoLabel: 'View repository on GitHub',
    guides: {
      valnex: {
        tagline: 'All your wealth. One single view.',
        metaDescription:
          'Visual guide to VALNEX: a multi-user finance dashboard with a Java/Spring Boot backend and a React frontend. A tour through the dashboard, net worth, investments, automations and betting.',
        intro: [
          'VALNEX is a production-style finance application: you configure your data once (balances, investments, contribution rules) and the app takes care of generating recurring movements, accruing interest on savings accounts, updating the market price of investments and rebuilding your net-worth history through periodic snapshots.',
          'The Java/Spring Boot backend is the single source of truth: every financial calculation happens once on the server and the frontend only renders what already arrived computed. That keeps two easily-confused concepts apart — the capital you put in, and the return the investment generated.',
        ],
        tourTitle: 'A tour of the app',
        shots: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            description:
              'The entry point after signing in: total net worth, change since the last snapshot and its evolution over time. A privacy button hides every figure at once — handy when showing the app to someone.',
          },
          {
            id: 'patrimonio',
            title: 'Net worth',
            description:
              'Distribution of your money by category (bank, funds, savings account, high risk, betting). Bank, cash and savings accounts are created right here, and money can be added to an existing investment without leaving the screen.',
          },
          {
            id: 'inversiones',
            title: 'Investments',
            description:
              'Each position shows current value, invested capital and return, always recomputed from the real transaction history. Assets are identified either by ticker (stocks, with automatic pricing) or by ISIN (UCITS funds, manual pricing).',
          },
          {
            id: 'automatizaciones',
            title: 'Automations',
            description:
              'Recurring rules (daily, weekly, fortnightly, monthly, yearly) that contribute to an account or an investment when due, including external income such as a salary. Every run — or every skip for insufficient balance — is written to a readable log.',
          },
          {
            id: 'apuestas',
            title: 'Betting',
            description:
              'An optional section, disabled by default on any new account. Once enabled, it shows net result, ROI and volume staked per bookmaker.',
          },
          {
            id: 'mobile',
            title: 'On mobile',
            description: 'The same interface adapted to a small screen, with no features cut.',
          },
        ],
        highlightsTitle: 'Technical decisions',
        highlights: [
          'Backend as the single source of truth: net worth, returns, interest and betting results are computed on the server, never on the client.',
          'Genuine multi-tenancy with isolation verified by integration tests: no one can reach another person’s data through the API.',
          'Embedded SQLite — no database server to install or administer; the whole application runs from a single file.',
          'A welcome wizard on first sign-in: a handful of questions leave the account with real data instead of an empty dashboard.',
          'An admin panel listing every account in the installation, plus the global configuration of the automatic processes.',
          'JSON backup export/import, light and dark mode, and permanent self-service account deletion behind a double confirmation.',
        ],
        stackTitle: 'Stack',
      },
      norda: {
        tagline: 'Discover the coffee behind every origin.',
        metaDescription:
          'Visual guide to NØRDA: a full-stack specialty coffee platform with a Java/Spring Boot backend, a React frontend and Stripe SDK payments. A tour through the catalog, origins map, checkout and admin panel.',
        intro: [
          'NØRDA is a production-style coffee shop application: a catalog with full traceability, an interactive origins map, a recommendation engine of its own, ecommerce with real checkout and inventory, subscriptions, reviews, an editorial blog and a complete admin panel.',
          'The Java/Spring Boot backend is the single source of truth for price, stock, role and payment, with a ports-and-adapters architecture for external integrations — the Stripe SDK is wired in as a real-payments demo without coupling the domain to a specific provider.',
        ],
        tourTitle: 'A tour of the app',
        shots: [
          {
            id: 'home',
            title: 'Home',
            description:
              'The way into the platform: brand story, featured coffees and shortcuts to the catalog, the origins map and the recommender.',
          },
          {
            id: 'catalog',
            title: 'Catalog',
            description:
              'Filtering by country, region, process, roast and brewing method. Price and availability always come from the backend, never computed on the client.',
          },
          {
            id: 'product',
            title: 'Product detail',
            description:
              'Full lot traceability — producer, farm, harvest — with grind and format variants, and reviews only buyers of that coffee can leave.',
          },
          {
            id: 'map',
            title: 'Origins map',
            description:
              'Browsing coffee origin on an interactive map, worldwide and per country, with no third-party API keys involved.',
          },
          {
            id: 'finder',
            title: 'Coffee Finder',
            description:
              'Five questions and up to three explained recommendations ("we suggest X because…"), resolved by a deterministic in-house rules engine rather than a black box.',
          },
          {
            id: 'journal',
            title: 'Journal',
            description:
              'An editorial blog with articles on brewing, origin and production, with dynamic SEO and per-page JSON-LD.',
          },
          {
            id: 'admin',
            title: 'Admin panel',
            description:
              'Real metrics, product management with automatic variant generation, orders driven by a state machine, inventory, customers, reviews, coupons and origins.',
          },
        ],
        highlightsTitle: 'Technical decisions',
        highlights: [
          'Checkout with atomic inventory reservation, coupons, shipping and tax calculation — all validated on the backend.',
          'Payments through the Stripe SDK behind a ports-and-adapters architecture, so the domain never depends on the provider.',
          'PostgreSQL with Flyway migrations applied at startup: there is no manual database step.',
          'JWT authentication with a refresh cookie; there is deliberately no public endpoint for creating administrators.',
          'Real tests on both layers: JUnit 5, Mockito and Testcontainers on the backend; Vitest and React Testing Library on the frontend; Playwright for E2E and accessibility with axe-core.',
          'Every architectural decision documented as an ADR, including its known limits.',
        ],
        stackTitle: 'Stack',
      },
    },
  },
  skills: {
    kicker: 'Tech stack',
    title: 'What I work with',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      integrations: 'Integrations',
      databases: 'Databases',
      tools: 'Tools',
      ai: 'AI',
    },
  },
  howIWork: {
    kicker: 'Methodology',
    title: 'How I work',
    steps: [
      {
        title: 'Analyze',
        description: 'Functional analysis and effort estimation before writing code, usually in direct meetings with the client.',
      },
      {
        title: 'Design',
        description: 'Defining architecture and the integration contracts (SOAP/REST) between systems and layers.',
      },
      {
        title: 'Build',
        description: 'Backend development (Java/Spring, PHP/Laravel) and frontend (Angular, Vue.js) on top of those contracts.',
      },
      {
        title: 'Test & document',
        description: 'Verification before shipping to production and technical documentation so the team can maintain the work.',
      },
      {
        title: 'Support',
        description: 'Mentoring new teammates: day-to-day questions and helping them settle into the team.',
      },
    ],
  },
  education: {
    kicker: 'Education',
    title: 'Education & certifications',
    academicTitle: 'Academic background',
    certificationsTitle: 'Certifications',
    viewPdf: 'View certificate (PDF)',
    items: {
      'grado-superior': { name: 'Higher Vocational Degree — Web Application Development' },
      'grado-medio': { name: 'Vocational Degree — Microcomputer Systems and Networks' },
    },
    certifications: {
      'azure-foundry': { name: 'Generative AI innovation: what’s new in Azure AI Foundry' },
      'pl-600': { name: 'PL-600: Microsoft Power Platform Solution Architect' },
      'santander-negociacion': { name: 'Santander Negotiation Certification' },
    },
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk",
    lead: 'Looking for a full-stack developer for your team? Reach out, I reply quickly.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    locationLabel: 'Current location',
  },
  builtWith: {
    kicker: 'About this site',
    title: 'Built with',
    intro: 'This portfolio is a project of its own: no templates, source code open on GitHub.',
    repoLabel: 'View the code on GitHub',
    items: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
  },
  footer: {
    backToTop: 'Back to top',
    rightsSuffix: 'All rights reserved.',
  },
  commandPalette: {
    openHint: 'Search',
    placeholder: 'Search a section or action…',
    empty: 'No results',
    groupNav: 'Navigation',
    groupActions: 'Actions',
    close: 'Close',
    actions: {
      copyEmail: 'Copy email',
      emailCopied: 'Email copied!',
      downloadCv: 'Download CV',
      toggleThemeDark: 'Switch to dark mode',
      toggleThemeLight: 'Switch to light mode',
      switchLanguage: 'Cambiar a español',
      openLinkedin: 'Open LinkedIn',
      openGithub: 'Open GitHub',
    },
  },
  skipLink: 'Skip to main content',
};
