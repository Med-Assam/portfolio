/**
 * Central portfolio data source.
 * Update this file only to refresh all visible content and navigation.
 */

export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type AboutBlock = {
  title: string;
  text: string;
};

export type TechnicalSkillCategory = {
  category: string;
  icon: string;
  items: string[];
};

export type SoftSkill = {
  name: string;
  icon: string;
  description: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl: string;
  description: string;
  latest?: boolean;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  description: string;
  current?: boolean;
};

export type PublicationRole = "first-author" | "co-author";

export type PublicationItem = {
  year: string;
  title: string;
  url: string;
  venue: string;
  authors: string[];
  doi?: string;
  role: PublicationRole;
};

export type CertificationItem = {
  name: string;
  provider: string;
  providerUrl?: string;
  date: string;
  skills: string[];
  icon: string;
};

export type ProjectItem = {
  title: string;
  url?: string;
  description: string;
  tags: string[];
  kind: "personal" | "academic" | "professional";
};

export type ContactInfo = {
  email?: string;
  phone?: string;
  location?: string;
};

export type ProfileData = {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  subtitle: string;
  availabilityBadge: string;
  avatar: string;
  heroActions: Array<{ label: string; href: string }>;
  contact: ContactInfo;
  stats: Stat[];
  about: AboutBlock[];
  technicalSkills: TechnicalSkillCategory[];
  softSkills: SoftSkill[];
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  socialLinks: SocialLink[];
  academicLinks: SocialLink[];
};

export const profile: ProfileData = {
  firstName: "Mohamed",
  lastName: "ASSAM",
  fullName: "Mohamed ASSAM",
  title: "Etudiant en Informatique",
  subtitle:
    "Portfolio personnel axe sur les projets, l'apprentissage continu et la construction d'experiences web modernes.",
  availabilityBadge: "Disponible pour un stage",
  avatar: "https://avatars.githubusercontent.com/u/265370231?v=4",
  heroActions: [
    { label: "Voir mes projets", href: "#projects" },
    { label: "Me contacter", href: "#contact" },
    { label: "Mon GitHub", href: "https://github.com/Med-Assam" }
  ],
  contact: {
    email: "m.assam@esisa.ac.ma"
  },
  stats: [
    { label: "Repositories publics", value: "1" },
    { label: "Contributions (12 mois)", value: "2" },
    { label: "Annee GitHub", value: "2026" },
    { label: "Portfolio en ligne", value: "1" }
  ],
  about: [
    {
      title: "Parcours",
      text: "Etudiant en informatique en debut de parcours, avec une approche orientee pratique et des objectifs clairs de progression technique."
    },
    {
      title: "Objectif",
      text: "Construire des projets concrets, renforcer les fondamentaux du developpement web et contribuer a des solutions utiles."
    },
    {
      title: "Approche",
      text: "Priorite a la qualite du code, a la structure des projets et a une presentation professionnelle des realisations."
    },
    {
      title: "Collaboration",
      text: "Ouvert aux opportunites de stage et de collaboration pour apprendre au contact d'equipes produit et engineering."
    }
  ],
  technicalSkills: [
    {
      category: "Web Foundations",
      icon: "code-2",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Tools",
      icon: "wrench",
      items: ["Git", "GitHub", "VS Code"]
    },
    {
      category: "Current Stack",
      icon: "layers",
      items: ["Astro", "TypeScript", "Vercel"]
    }
  ],
  softSkills: [
    {
      name: "Communication",
      icon: "message-square",
      description: "Communication claire en contexte de projet et suivi regulier des taches."
    },
    {
      name: "Autonomie",
      icon: "compass",
      description: "Capacite a apprendre rapidement et a avancer sur des sujets nouveaux."
    },
    {
      name: "Rigueur",
      icon: "check-circle-2",
      description: "Attention aux details, tests manuels et documentation propre."
    }
  ],
  education: [],
  experience: [],
  publications: [],
  certifications: [],
  projects: [
    {
      title: "Portfolio",
      url: "https://github.com/Med-Assam/portfolio",
      description:
        "Creation d'un portfolio moderne avec Astro, sections dynamiques conditionnelles et deploiement Vercel.",
      tags: ["Astro", "TypeScript", "CSS", "Vercel"],
      kind: "personal"
    }
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Med-Assam", icon: "github" },
    { label: "Email", href: "mailto:m.assam@esisa.ac.ma", icon: "mail" }
  ],
  academicLinks: []
};

export const activeSections = {
  about: profile.about.length > 0,
  skills: profile.technicalSkills.length > 0 || profile.softSkills.length > 0,
  education: profile.education.length > 0,
  experience: profile.experience.length > 0,
  publications: profile.publications.length > 0,
  certifications: profile.certifications.length > 0,
  projects: profile.projects.length > 0,
  contact: Boolean(profile.contact.email || profile.contact.phone || profile.contact.location)
};

const sectionRegistry: Array<NavItem & { enabled: boolean }> = [
  { id: "hero", label: "Accueil", icon: "house", enabled: true },
  { id: "about", label: "A propos", icon: "user-round", enabled: activeSections.about },
  { id: "skills", label: "Competences", icon: "cpu", enabled: activeSections.skills },
  { id: "education", label: "Education", icon: "graduation-cap", enabled: activeSections.education },
  { id: "experience", label: "Experience", icon: "briefcase", enabled: activeSections.experience },
  { id: "publications", label: "Publications", icon: "book-open", enabled: activeSections.publications },
  { id: "certifications", label: "Certifications", icon: "award", enabled: activeSections.certifications },
  { id: "projects", label: "Projets", icon: "folder-kanban", enabled: activeSections.projects },
  { id: "contact", label: "Contact", icon: "send", enabled: activeSections.contact }
];

export const navItems: NavItem[] = sectionRegistry.filter((section) => section.enabled);

export const publicationStats = {
  totalPapers: profile.publications.length,
  firstAuthor: profile.publications.filter((item) => item.role === "first-author").length,
  coAuthor: profile.publications.filter((item) => item.role === "co-author").length,
  citations: 0
};

export const firstAuthorPapers = profile.publications.filter(
  (item) => item.role === "first-author"
);

export const coAuthorPapers = profile.publications.filter(
  (item) => item.role === "co-author"
);

export const customDomain = `portfolio-${profile.firstName}-${profile.lastName}`
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
