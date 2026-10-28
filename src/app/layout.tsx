import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
const description =
  "Soufiane Mouzakki is a frontend developer in Casablanca, Morocco, building responsive, maintainable web applications with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: {
    default: "Soufiane Mouzakki — Frontend Developer",
    template: "%s · Soufiane Mouzakki",
  },
  description,
  openGraph: {
    title: "Soufiane Mouzakki — Precision in every interaction.",
    description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
