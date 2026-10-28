import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { content } from "@/data/content";

export function Contact() {
  return (
    <section
      className="contact-section container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Let’s connect
          </p>
          <h2 id="contact-title">
            Let’s build
            <br />
            something <span>meaningful.</span>
          </h2>
          <p>{content.contact.introduction}</p>
          <span className="contact-location">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </span>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span className="contact-icon">
              <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span>
              <span className="contact-label">Have something in mind?</span>
              <span className="email-address">{profile.email}</span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} aria-hidden="true" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={20} aria-hidden="true" />
            <span>Find me on GitHub</span>
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className="contact-footnote">{content.contact.note}</p>
        </div>
      </div>
    </section>
  );
}
