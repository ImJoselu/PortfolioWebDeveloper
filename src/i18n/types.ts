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

/** One screenshot of the guided tour on a project's guide page. */
export interface ProjectTourShot {
  /** Matches a key of the project's `guide.shots` in src/data/profile.ts. */
  id: string;
  title: string;
  description: string;
}

export interface ProjectGuideCopy {
  tagline: string;
  metaDescription: string;
  intro: string[];
  tourTitle: string;
  shots: ProjectTourShot[];
  highlightsTitle: string;
  highlights: string[];
  stackTitle: string;
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
    prevAria: string;
    nextAria: string;
    dotsAria: string;
    viewGuide: string;
    guideBadge: string;
    items: {
      'concesionario-vue': ProjectCopy;
      'concesionario-php': ProjectCopy;
      valnex: ProjectCopy;
      norda: ProjectCopy;
      'sport-padel-sagunt': ProjectCopy;
    };
  };
  projectGuide: {
    backToProjects: string;
    kicker: string;
    repoLabel: string;
    guides: { valnex: ProjectGuideCopy; norda: ProjectGuideCopy };
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
    academicTitle: string;
    certificationsTitle: string;
    viewPdf: string;
    items: { 'grado-superior': EducationCopy; 'grado-medio': EducationCopy };
    certifications: {
      'azure-foundry': CertificationCopy;
      'pl-600': CertificationCopy;
      'santander-negociacion': CertificationCopy;
    };
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
    items: string[];
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
