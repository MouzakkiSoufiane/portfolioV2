import { ArrowDown, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/primitives";
import { content } from "@/data/content";
import { profile } from "@/data/profile";

function Portal() {
  return (
    <div className="portal-art" aria-hidden="true">
      <div className="portal-orbit orbit-one" />
      <div className="portal-orbit orbit-two" />
      <div className="portal-orbit orbit-three" />
      <div className="portal-halo" />
      <div className="portal-frame">
        <div className="portal-door" />
      </div>
      <div className="portal-floor" />
      <span className="art-cross cross-one">+</span>
      <span className="art-cross cross-two">+</span>
      <span className="art-caption">FORM / FUNCTION / FEELING</span>
      <span className="art-coordinate">33.5731° N · 7.5898° W</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" />
          {profile.role}
          <span className="eyebrow-location"> · {profile.location}</span>
        </p>
        <h1 id="hero-title">
          Precision in
          <br />
          every <span>interaction.</span>
        </h1>
        <p className="hero-description">{content.hero.introduction}</p>
        <div className="hero-actions">
          <ActionLink href="#work">Explore my work</ActionLink>
          <ActionLink href="#contact" secondary>
            Get in touch
          </ActionLink>
        </div>
        <p className="hero-note">
          <span />
          {content.hero.note}
        </p>
      </div>
      <Portal />
      <div className="hero-bottom">
        <span>
          <MapPin size={14} aria-hidden="true" />
          {content.hero.locationNote}
        </span>
        <a href="#work">
          Scroll to explore <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
