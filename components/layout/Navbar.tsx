"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const resumePath = "/Elizabeth_Njuguna_Resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 861px)");
    const closeOnDesktop = () => setMenuOpen(false);

    document.addEventListener("keydown", closeOnEscape);
    mediaQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      mediaQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <header>
      <nav className="wrap" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label="Elizabeth Njuguna home">
          EN<span>.</span>
        </a>

        <div
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="nav-resume-actions">
            <a
              className="nav-resume"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              View Resume ↗
            </a>

            <a
              className="nav-resume nav-resume-download"
              href={resumePath}
              download="Elizabeth_Njuguna_Resume.pdf"
              onClick={() => setMenuOpen(false)}
            >
              Download ↓
            </a>
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
    </header>
  );
}
