import type { ImageMetadata } from 'astro';
import joseLuisPhoto from '../assets/photos/jltortola.jpg';
import javaCertPhoto from '../assets/photos/certificado-java.png';
import calculadoraImg from '../assets/projects/calculadora.jpg';
import concesionarioVueImg from '../assets/projects/concesionario-vue.jpg';
import concesionarioPhpImg from '../assets/projects/concesionario-php.jpg';

/**
 * Language-neutral facts only (dates, names, links, tech, images).
 * Translated copy (summaries, bullets, labels) lives in src/i18n/{es,en}.ts,
 * keyed by the `id` of each entry here — this file must never change per locale.
 */

export const location = 'Puerto de Sagunto, Valencia, España';

export const links = {
  email: 'jltortcerv@gmail.com',
  github: 'https://github.com/ImJoselu',
  linkedin: 'https://www.linkedin.com/in/jostorcer/',
  cvPath: '/cv/Jose-Luis-Tortola-Cervera-CV.pdf',
  repo: 'https://github.com/ImJoselu/PortfolioWebDeveloper',
} as const;

export const photo: ImageMetadata = joseLuisPhoto;

export type LanguageSkill = { code: 'es' | 'ca' | 'en'; level: 'native' | 'advanced' | 'intermediate' };

export const spokenLanguages: LanguageSkill[] = [
  { code: 'es', level: 'native' },
  { code: 'ca', level: 'advanced' },
  { code: 'en', level: 'intermediate' },
];

export type ExperienceEntry = {
  id: 'laberit' | 'tugesto';
  company: string;
  companyUrl?: string;
  period: { start: string; end: string | null };
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: 'laberit',
    company: 'Lãberit',
    period: { start: '2023', end: null },
    stack: ['Java', 'Spring', 'Spring Boot', 'Angular', 'TypeScript', 'SOAP', 'REST', 'WSDL'],
  },
  {
    id: 'tugesto',
    company: 'TuGesto',
    period: { start: '2023', end: '2023' },
    stack: ['Vue.js', 'PHP', 'Laravel', 'JIRA', 'MariaDB', 'Git'],
  },
];

export type EducationEntry = {
  id: 'grado-superior' | 'grado-medio';
  institution: string;
  place: string;
  period: { start: string; end: string };
};

export const education: EducationEntry[] = [
  {
    id: 'grado-superior',
    institution: 'IES Camp Morvedre',
    place: 'Puerto de Sagunto',
    period: { start: '2021', end: '2023' },
  },
  {
    id: 'grado-medio',
    institution: 'IES Camp Morvedre',
    place: 'Puerto de Sagunto',
    period: { start: '2019', end: '2021' },
  },
];

export type CertificationEntry = {
  id: 'java-cert' | 'azure-foundry' | 'pl-600';
  meta: string;
} & ({ kind: 'image'; image: ImageMetadata } | { kind: 'pdf'; pdfPath: string });

export const certifications: CertificationEntry[] = [
  { id: 'java-cert', meta: '2023', kind: 'image', image: javaCertPhoto },
  {
    id: 'azure-foundry',
    meta: '2026 · 6 h',
    kind: 'pdf',
    pdfPath: '/certifications/Azure-Foundry-Innovacion-IA-Generativa.pdf',
  },
  {
    id: 'pl-600',
    meta: '2024 · 8 h',
    kind: 'pdf',
    pdfPath: '/certifications/PL-600-Power-Platform-Solution-Architect.pdf',
  },
];

export type Project = {
  id: 'calculadora' | 'concesionario-vue' | 'concesionario-php';
  repoUrl: string;
  image: ImageMetadata;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: 'calculadora',
    repoUrl: 'https://github.com/ImJoselu/calculadoraVue',
    image: calculadoraImg,
    stack: ['Vue.js', 'JavaScript', 'CSS'],
  },
  {
    id: 'concesionario-vue',
    repoUrl: 'https://github.com/ImJoselu/carsVue',
    image: concesionarioVueImg,
    stack: ['Vue.js', 'JavaScript'],
  },
  {
    id: 'concesionario-php',
    repoUrl: 'https://github.com/ImJoselu/carsMonolity',
    image: concesionarioPhpImg,
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
];

export const skills = {
  frontend: ['Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  backend: ['Java', 'Spring / Spring Boot', 'PHP', 'Laravel'],
  integrations: ['SOAP', 'REST', 'WSDL'],
  databases: ['MySQL', 'MariaDB'],
  tools: ['Git', 'JIRA', 'Visual Studio Code'],
  ai: ['Claude', 'ChatGPT'],
} as const;

export const interestPoints = ['drivingLicense', 'availability', 'workMode'] as const;
