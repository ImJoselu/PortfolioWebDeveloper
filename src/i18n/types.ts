export interface ExperienceCopy {
  role: string;
  summary: string;
  bullets: string[];
}

export interface EducationCopy {
  name: string;
}

export interface CertificationCopy {
  name: string;
}

export interface ProjectCopy {
  name: string;
  description: string;
}

export interface HowIWorkStep {
  title: string;
  description: string;
}

export interface Dictionary {
  htmlLang: 'es' | 'en';
  locale: string;
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    howIWork: string;
    education: string;
    contact: string;
    skipToContent: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
  };
  languageSwitch: { label: string; ariaLabel: string };
  theme: { toggleToDark: string; toggleToLight: string };
  game: {
    ariaPlay: string;
    ariaShowPhoto: string;
    pressToStart: string;
    score: string;
    gameOver: string;
    restart: string;
  };
  hero: {
    kicker: string;
    heading: string;
    subheading: string;
    statusBadge: string;
    ctaProjects: string;
    ctaExperience: string;
    ctaContact: string;
    ctaCv: string;
    photoAlt: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    factsTitle: string;
    facts: { location: string; languages: string; availability: string; workMode: string };
    availabilityValue: string;
    workModeValue: string;
  };
  languages: {
    es: string;
    ca: string;
    en: string;
    native: string;
    advanced: string;
    intermediate: string;
  };
  experience: {
    kicker: string;
    title: string;
    present: string;
    stackLabel: string;
    items: { laberit: ExperienceCopy; tugesto: ExperienceCopy };
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    viewRepo: string;
    stackLabel: string;
    roleLabel: string;
    roleValue: string;
    items: {
      'concesionario-vue': ProjectCopy;
      'concesionario-php': ProjectCopy;
    };
  };
  skills: {
    kicker: string;
    title: string;
    categories: {
      frontend: string;
      backend: string;
      integrations: string;
      databases: string;
      tools: string;
      ai: string;
    };
  };
  howIWork: { kicker: string; title: string; steps: HowIWorkStep[] };
  education: {
    kicker: string;
    title: string;
    certificationsTitle: string;
    viewPdf: string;
    items: { 'grado-superior': EducationCopy; 'grado-medio': EducationCopy };
    certifications: { 'java-cert': CertificationCopy; 'azure-foundry': CertificationCopy; 'pl-600': CertificationCopy };
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    locationLabel: string;
  };
  builtWith: {
    kicker: string;
    title: string;
    intro: string;
    repoLabel: string;
    items: { name: string; description: string }[];
  };
  footer: { backToTop: string; rightsSuffix: string };
  commandPalette: {
    openHint: string;
    placeholder: string;
    empty: string;
    groupNav: string;
    groupActions: string;
    close: string;
    actions: {
      copyEmail: string;
      emailCopied: string;
      downloadCv: string;
      toggleThemeDark: string;
      toggleThemeLight: string;
      switchLanguage: string;
      openLinkedin: string;
      openGithub: string;
    };
  };
  skipLink: string;
}
