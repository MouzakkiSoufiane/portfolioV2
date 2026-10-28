import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/primitives";
import { content } from "@/data/content";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div>
          <SectionHeading
            number="03"
            label="A little about me"
            title={
              <span id="about-title">
                The developer
                <br />
                behind the <span className="accent">interface.</span>
              </span>
            }
          />
          <div className="about-signature">
            <span className="signature-monogram">sm.</span>
            <div>
              {profile.name}
              <span>
                <MapPin size={13} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">{content.about.introduction}</p>
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-principles">
            {content.about.principles.map((principle) => (
              <span key={principle}>{principle}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
