export const skillGroups = [
  {
    title: "Core development",
    number: "01",
    skills: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling & interfaces",
    number: "02",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Reusable UI Components",
    ],
  },
  {
    title: "State & data",
    number: "03",
    skills: ["Redux Toolkit", "Zustand", "TanStack Query", "REST APIs"],
  },
  {
    title: "Additional experience",
    number: "04",
    skills: [
      "React Hook Form",
      "Zod",
      "Git",
      "Firebase",
      "PostgreSQL",
      "NestJS",
    ],
  },
];

export const expertise = [
  {
    title: "Frontend development",
    description:
      "Building modern web applications with React, Next.js, TypeScript, and reusable components.",
    icon: "code",
  },
  {
    title: "Responsive interfaces",
    description:
      "Creating layouts and interactions that work consistently across desktop, tablet, and mobile devices.",
    icon: "devices",
  },
  {
    title: "API & state integration",
    description:
      "Connecting frontend applications to REST APIs and managing client and server state with appropriate tools.",
    icon: "network",
  },
  {
    title: "Product collaboration",
    description:
      "Working with technical leads, backend developers, and UI/UX designers to turn requirements into practical solutions.",
    icon: "people",
  },
] as const;
