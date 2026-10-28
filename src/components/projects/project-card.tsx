import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tags } from "@/components/ui/primitives";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.caseStudyUrl ?? `/projects/${project.slug}`;
  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
    >
      <Link
        href={href}
        className="project-preview"
        aria-label={`View ${project.title} case study`}
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ) : (
          <Code2 size={64} aria-hidden="true" />
        )}
      </Link>
      <div className="project-copy">
        <p className="eyebrow">
          {project.featured ? "Featured project" : "Selected project"}
        </p>
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className="muted">{project.description}</p>
        <Tags items={project.stack} />
        <div className="project-links">
          <Link className="text-link" href={href}>
            View case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {project.demoUrl && (
            <a
              className="text-link"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo<span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              className="icon-button"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
            >
              <Github size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
