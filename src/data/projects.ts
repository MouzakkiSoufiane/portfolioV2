export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: { src: string; alt: string; width: number; height: number };
  stack: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    role: string;
    approach: string;
    features: string[];
    technicalDecisions: string[];
    challenges: string;
    outcome: string;
  };
};

// Only add verified, publicly shareable work. Never include employer assets.
export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
