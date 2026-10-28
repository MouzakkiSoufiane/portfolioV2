type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string | null;
};

export const profile: Profile = {
  name: "Soufiane Mouzakki",
  role: "Frontend Developer",
  location: "Casablanca, Morocco",
  email: "soufianemouzakki@gmail.com",
  github: "https://github.com/MouzakkiSoufiane",
  linkedin: "https://www.linkedin.com/in/soufiane-mouzakki-01888b31a/",
  // Add a real PDF to public/cv before enabling the download link.
  cv: null,
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
