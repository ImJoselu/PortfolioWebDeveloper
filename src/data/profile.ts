import type { ImageMetadata } from 'astro';
import joseLuisPhoto from '../assets/photos/jltortola.jpg';
import concesionarioVueImg from '../assets/projects/concesionario-vue.jpg';
import concesionarioPhpImg from '../assets/projects/concesionario-php.jpg';
import valnexLogo from '../assets/projects/valnex-logo.png';
import valnexDashboard from '../assets/projects/valnex/dashboard.png';
import valnexPatrimonio from '../assets/projects/valnex/patrimonio.png';
import valnexInversiones from '../assets/projects/valnex/inversiones.png';
import valnexAutomatizaciones from '../assets/projects/valnex/automatizaciones.png';
import valnexApuestas from '../assets/projects/valnex/apuestas.png';
import valnexMobile from '../assets/projects/valnex/dashboard_mobile.png';
import nordaLogo from '../assets/projects/norda-logo.png';
import nordaHome from '../assets/projects/norda/home.png';
import nordaCatalog from '../assets/projects/norda/catalog.png';
import nordaProduct from '../assets/projects/norda/product-detail.png';
import nordaMap from '../assets/projects/norda/origins-map.png';
import nordaOriginsFlags from '../assets/projects/norda/origins-flags.png';
import nordaCountryDetail from '../assets/projects/norda/country-detail.png';
import nordaRegion from '../assets/projects/norda/region.png';
import nordaFinderQuiz from '../assets/projects/norda/finder-quiz.png';
import nordaFinderResults from '../assets/projects/norda/finder-results.png';
import nordaCart from '../assets/projects/norda/cart.png';
import nordaCheckoutDatos from '../assets/projects/norda/checkout-datos.png';
import nordaCheckoutDireccion from '../assets/projects/norda/checkout-direccion.png';
import nordaCheckoutEnvio from '../assets/projects/norda/checkout-envio.png';
import nordaCheckoutPago from '../assets/projects/norda/checkout-pago.png';
import nordaCheckoutConfirmacion from '../assets/projects/norda/checkout-confirmacion.png';
import nordaLogin from '../assets/projects/norda/login.png';
import nordaRegister from '../assets/projects/norda/register.png';
import nordaJournal from '../assets/projects/norda/journal.png';
import nordaJournalPost from '../assets/projects/norda/journal-post.png';
import nordaAdminDashboard from '../assets/projects/norda/admin-dashboard.png';
import nordaAdminOrders from '../assets/projects/norda/admin-orders.png';
import nordaAdminProducts from '../assets/projects/norda/admin-products.png';
import nordaAdminOrigins from '../assets/projects/norda/admin-origins.png';
import nordaAdminCustomers from '../assets/projects/norda/admin-customers.png';

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
  id: 'azure-foundry' | 'pl-600' | 'santander-negociacion';
  meta: string;
} & ({ kind: 'image'; image: ImageMetadata } | { kind: 'pdf'; pdfPath: string; icon: 'cloud' | 'layers' | 'santander' });

export const certifications: CertificationEntry[] = [
  {
    id: 'santander-negociacion',
    meta: '2026 · 8 h',
    kind: 'pdf',
    pdfPath: '/certifications/Santander_Negociacion.pdf',
    icon: 'santander',
  },
  {
    id: 'azure-foundry',
    meta: '2026 · 6 h',
    kind: 'pdf',
    pdfPath: '/certifications/Azure-Foundry-Innovacion-IA-Generativa.pdf',
    icon: 'cloud',
  },
  {
    id: 'pl-600',
    meta: '2024 · 8 h',
    kind: 'pdf',
    pdfPath: '/certifications/PL-600-Power-Platform-Solution-Architect.pdf',
    icon: 'layers',
  }
];

export type ProjectId = 'concesionario-vue' | 'concesionario-php' | 'valnex' | 'norda';

/** Slug of a project guide page: /proyectos/<slug> (es) and /en/projects/<slug> (en). */
export type ProjectGuideSlug = 'valnex' | 'norda';

export type Project = {
  id: ProjectId;
  repoUrl: string;
  image: ImageMetadata;
  /** How the card image fills its frame — logos need `contain`, screenshots `cover`. */
  imageFit?: 'cover' | 'contain';
  stack: string[];
  /** Present only when the project has a guide page with its own tour. */
  guide?: {
    slug: ProjectGuideSlug;
    /** Tour screenshots keyed by the shot id used in src/i18n/{es,en}.ts. */
    shots: Record<string, ImageMetadata>;
    /** Shots rendered narrow (mobile captures). */
    portraitShots?: string[];
  };
};

export const projects: Project[] = [
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
  {
    id: 'valnex',
    repoUrl: 'https://github.com/ImJoselu/VALNEX',
    image: valnexLogo,
    imageFit: 'contain',
    stack: ['Java', 'Spring Boot', 'SQLite', 'React', 'TypeScript'],
    guide: {
      slug: 'valnex',
      shots: {
        dashboard: valnexDashboard,
        patrimonio: valnexPatrimonio,
        inversiones: valnexInversiones,
        automatizaciones: valnexAutomatizaciones,
        apuestas: valnexApuestas,
        mobile: valnexMobile,
      },
      portraitShots: ['mobile'],
    },
  },
  {
    id: 'norda',
    repoUrl: 'https://github.com/ImJoselu/NORDA',
    image: nordaLogo,
    imageFit: 'contain',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Stripe'],
    guide: {
      slug: 'norda',
      shots: {
        home: nordaHome,
        catalog: nordaCatalog,
        product: nordaProduct,
        map: nordaMap,
        originsFlags: nordaOriginsFlags,
        countryDetail: nordaCountryDetail,
        region: nordaRegion,
        finderQuiz: nordaFinderQuiz,
        finderResults: nordaFinderResults,
        cart: nordaCart,
        checkoutDatos: nordaCheckoutDatos,
        checkoutDireccion: nordaCheckoutDireccion,
        checkoutEnvio: nordaCheckoutEnvio,
        checkoutPago: nordaCheckoutPago,
        checkoutConfirmacion: nordaCheckoutConfirmacion,
        login: nordaLogin,
        register: nordaRegister,
        journal: nordaJournal,
        journalPost: nordaJournalPost,
        admin: nordaAdminDashboard,
        adminOrders: nordaAdminOrders,
        adminProducts: nordaAdminProducts,
        adminOrigins: nordaAdminOrigins,
        adminCustomers: nordaAdminCustomers,
      },
    },
  },
];

/**
 * Prepared but deliberately not published yet — these entries carry no image
 * and are never rendered, so they stay off the site until they're ready.
 *
 * To publish one: drop its image in `src/assets/projects/`, move the entry into
 * `projects` (adding `image`), and add its id to `ProjectId`. The translated
 * copy already lives in `projects.items` in src/i18n/{es,en}.ts.
 */
export type UpcomingProject = {
  id: 'sport-padel-sagunt';
  repoUrl: string;
  /** Live site the project is a redesign of. */
  currentSiteUrl?: string;
  stack: string[];
};

export const upcomingProjects: UpcomingProject[] = [
  {
    id: 'sport-padel-sagunt',
    repoUrl: 'https://github.com/ImJoselu/PadelSportSagunt',
    currentSiteUrl: 'https://www.sportpadelsagunt.es/',
    stack: [
      'Next.js',
      'App Router',
      'React',
      'Tailwind CSS',
      'Radix UI',
      'Motion',
      'Server Actions',
      'Drizzle ORM',
      'PostgreSQL',
      'Stripe',
      'Resend',
      'SSE / WebSocket',
    ],
  },
];

export const skills = {
  frontend: ['Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'Astro'],
  backend: ['Java', 'Spring / Spring Boot', 'PHP / Laravel', 'JUnit', 'Mockito'],
  integrations: ['SOAP', 'REST', 'WSDL'],
  databases: ['MySQL', 'MariaDB', 'PostgreSQL', 'Oracle'],
  tools: ['Git', 'JIRA', 'Jenkins', 'Postman', 'Docker'],
  ai: ['Claude', 'Claude Agents', 'Claude Skills', 'ChatGPT', 'GitHub Copilot'],
} as const;

export const interestPoints = ['drivingLicense', 'availability', 'workMode'] as const;
