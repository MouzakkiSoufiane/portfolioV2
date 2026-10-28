export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  type: string;
  responsibilities?: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "The Game Changers Company",
    period: "June 2026 — Present",
    location: "Casablanca, Morocco",
    current: true,
    type: "Permanent · CDI",
    responsibilities: [
      "Develop and maintain frontend applications using React, Next.js, and TypeScript.",
      "Implement responsive interfaces and reusable components.",
      "Integrate REST APIs and frontend state-management solutions.",
      "Collaborate with technical leads, backend developers, and UI/UX designers.",
      "Participate in staging validation and production release workflows.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "The Game Changers Company",
    period: "February 2026 — May 2026",
    location: "Casablanca, Morocco",
    type: "Internship",
    responsibilities: [
      "Built frontend interfaces for an internal web application.",
      "Developed reusable components and integrated REST APIs.",
      "Worked with React, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS.",
      "Collaborated with technical and design team members.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "OCP",
    period: "April 2025 — July 2025",
    type: "Internship",
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Vercel",
    ],
  },
  {
    role: "Frontend Development Intern",
    company: "Canuci",
    period: "July 2024 — September 2024",
    type: "Internship",
    technologies: ["React", "Redux", "Tailwind CSS", "Firebase"],
  },
];
