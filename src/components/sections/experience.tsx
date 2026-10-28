import { experiences } from "@/data/experience";
import { SectionHeading, Tags } from "@/components/ui/primitives";

export function Experience() {
  return (
    <section
      className="section container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        number="04"
        label="The journey so far"
        title={
          <span id="experience-title">
            Experience that <span className="muted">shapes the work.</span>
          </span>
        }
      />
      <div className="timeline">
        {experiences.map((item) => (
          <article
            className={`timeline-item ${item.current ? "is-current" : ""}`}
            key={`${item.company}-${item.period}`}
          >
            <div className="timeline-date">
              <p>{item.period}</p>
              <span
                className={item.current ? "current-badge" : "employment-type"}
              >
                {item.current && <span className="status-dot" />}
                {item.type}
              </span>
            </div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="company">
                {item.company}
                {item.location && <span> · {item.location}</span>}
              </p>
              {item.responsibilities && (
                <ul className="responsibilities">
                  {item.responsibilities.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
              {item.technologies && <Tags items={item.technologies} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
