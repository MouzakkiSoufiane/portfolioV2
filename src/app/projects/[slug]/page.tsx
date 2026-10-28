import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ActionLink, Tags } from "@/components/ui/primitives";
import { siteUrl } from "@/data/profile";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
      alternates: { canonical: null },
    };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: siteUrl ? `/projects/${project.slug}` : null },
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const { caseStudy } = project;
  const sections = [
    ["Overview", caseStudy.overview],
    ["The problem", caseStudy.problem],
    ["My role", caseStudy.role],
    ["Design & engineering approach", caseStudy.approach],
    ["Key features", caseStudy.features],
    ["Technical decisions", caseStudy.technicalDecisions],
    ["Challenges", caseStudy.challenges],
    ["Outcome", caseStudy.outcome],
  ] as const;
  return (
    <main id="main" className="container case-study">
      <Link className="text-link" href="/#work">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to work
      </Link>
      <p className="eyebrow">Project case study</p>
      <h1>{project.title}</h1>
      <p className="case-intro">{project.description}</p>
      <Tags items={project.stack} />
      {project.image && (
        <Image
          className="case-image"
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />
      )}
      <div className="case-sections">
        {sections.map(([title, content], index) => (
          <section key={title}>
            <p className="eyebrow">0{index + 1}</p>
            <h2>{title}</h2>
            {Array.isArray(content) ? (
              <ul>
                {content.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </section>
        ))}
      </div>
      <div className="hero-actions">
        {project.demoUrl && (
          <ActionLink href={project.demoUrl} external>
            Live demo
          </ActionLink>
        )}
        {project.githubUrl && (
          <ActionLink href={project.githubUrl} secondary external>
            View source
          </ActionLink>
        )}
      </div>
    </main>
  );
}
