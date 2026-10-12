"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

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

          <a
            href="/Elizabeth_Njuguna_Resume.pdf"
            className="m-only"
            download
            onClick={() => setMenuOpen(false)}
          >
            Download resume
          </a>
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

        <a className="nav-resume" href="/Elizabeth_Njuguna_Resume.pdf" download>
          Resume ↓
        </a>
      </nav>
    </header>
  );
}
