import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <Link className="brand" href="/" aria-label="Soufiane Mouzakki home">
          SM<span>.</span>
        </Link>
        <p>
          Designed with intention.
          <br />
          <span className="muted">Built with precision.</span>
        </p>
        <a href="#top" className="text-link">
          Back to top <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
