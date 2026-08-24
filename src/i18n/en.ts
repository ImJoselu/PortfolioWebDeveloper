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
      "I'm particularly interested in where backend and frontend meet: defining a clear contract between systems and building an interface on top of it that a user understands right away.",
    ],
    factsTitle: 'Quick facts',
    facts: {
      location: 'Location',
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
    intro: 'Personal projects, outside client work, built to practice frontend architecture and compare approaches (SPA vs. monolith).',
    viewRepo: 'View repository',
    stackLabel: 'Stack',
    roleLabel: 'Role',
    roleValue: 'Solo development, end to end.',
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
    certificationsTitle: 'Certifications',
    viewPdf: 'View certificate (PDF)',
    items: {
      'grado-superior': { name: 'Higher Vocational Degree — Web Application Development' },
      'grado-medio': { name: 'Vocational Degree — Microcomputer Systems and Networks' },
    },
    certifications: {
      'java-cert': { name: 'Professional Java Certificate' },
      'azure-foundry': { name: 'Generative AI innovation: what’s new in Azure AI Foundry' },
      'pl-600': { name: 'PL-600: Microsoft Power Platform Solution Architect' },
    },
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk",
    lead: 'Looking for a full-stack developer for your team? Reach out, I reply quickly.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    locationLabel: 'Location',
  },
  builtWith: {
    kicker: 'About this site',
    title: 'Built with',
    intro: 'This portfolio is a project of its own: no templates, source code open on GitHub.',
    repoLabel: 'View the code on GitHub',
    items: [
      { name: 'Astro', description: 'Static site generator' },
      { name: 'TypeScript', description: 'Static typing' },
      { name: 'Tailwind CSS', description: 'Styling' },
      { name: 'GitHub Actions', description: 'Continuous integration & deployment' },
      { name: 'GitHub Pages', description: 'Hosting' },
    ],
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
