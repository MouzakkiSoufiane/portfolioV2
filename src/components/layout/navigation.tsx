"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => {
      element?.close();
      document.body.style.overflow = previous;
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Soufiane Mouzakki home">
          SM<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="desktop-action">
          {profile.cv ? (
            <a
              href={profile.cv}
              className="button button-small button-secondary"
              download
            >
              Download CV
              <Download size={15} aria-hidden="true" />
            </a>
          ) : (
            <Link
              href="/#contact"
              className="button button-small button-secondary"
            >
              Let’s talk
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
        <button
          ref={trigger}
          className="icon-button menu-trigger"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navigation"
        onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <Link href="/" className="brand" onClick={close}>
              SM<span>.</span>
            </Link>
            <button
              className="icon-button"
              onClick={close}
              aria-label="Close navigation"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <p className="eyebrow">Explore the portfolio</p>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.label} href={item.href} onClick={close}>
                <span className="menu-number">0{index + 1}</span>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          {profile.cv && (
            <a
              href={profile.cv}
              className="button button-primary"
              download
              onClick={close}
            >
              Download CV
              <Download size={17} aria-hidden="true" />
            </a>
          )}
          <a className="mobile-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p className="muted text-sm">Casablanca, Morocco</p>
        </div>
      </dialog>
    </header>
  );
}
