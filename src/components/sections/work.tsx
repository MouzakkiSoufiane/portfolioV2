import { ArrowUpRight, Braces, LockKeyhole } from "lucide-react";
import { SectionHeading } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { content } from "@/data/content";

export function Work() {
  return (
    <section
      className="section container"
      id="work"
      aria-labelledby="work-title"
    >
      <SectionHeading
        number="01"
        label="Selected work"
        title={
          <span id="work-title">
            Good work. <span className="muted">Thoughtfully built.</span>
          </span>
        }
      />
      {projects.length ? (
        <div className="projects-grid">
          {[...projects]
            .sort((a, b) => Number(b.featured) - Number(a.featured))
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      ) : (
        <div className="work-empty">
          <div className="work-art" aria-hidden="true">
            <div className="work-art-window">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <Braces strokeWidth={1} size={76} />
              <span>CRAFTED WITH INTENTION</span>
            </div>
            <div className="work-art-ring" />
          </div>
          <div className="work-empty-content">
            <p className="eyebrow">Behind the interfaces</p>
            <h3>
              {content.work.title}
              <br />
              {content.work.subtitle}
            </h3>
            <p>{content.work.description}</p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="confidentiality-note">
              <LockKeyhole size={13} aria-hidden="true" />
              {content.work.confidentiality}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
