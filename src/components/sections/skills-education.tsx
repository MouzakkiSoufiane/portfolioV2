import { GraduationCap, ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { education } from "@/data/education";
import { SectionHeading, Tags } from "@/components/ui/primitives";

export function Skills() {
  return (
    <section className="section container" aria-labelledby="skills-title">
      <SectionHeading
        number="05"
        label="The toolkit"
        title={
          <span id="skills-title">
            The right tools.
            <br />
            <span className="accent">A thoughtful approach.</span>
          </span>
        }
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <Tags items={group.skills} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      className="section container education-section"
      aria-labelledby="education-title"
    >
      <SectionHeading
        number="06"
        label="Education"
        title={<span id="education-title">A foundation to build on.</span>}
      />
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.school} className="education-card">
            <div className="education-icon">
              <GraduationCap size={25} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <p className="education-period">{item.period}</p>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </div>
            <ArrowUpRight
              size={20}
              className="education-arrow"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
