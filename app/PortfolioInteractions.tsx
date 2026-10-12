"use client";

import { useEffect } from "react";

export default function PortfolioInteractions() {
  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>(
      ".menu-toggle"
    );
    const navigation = document.querySelector<HTMLElement>(
      "#primary-navigation"
    );

    if (!button || !navigation) return;

    const setOpen = (open: boolean) => {
      navigation.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
      );
      button.innerHTML = open
        ? 'Close <span aria-hidden="true">×</span>'
        : 'Menu <span aria-hidden="true">☰</span>';
    };

    const handleMenuClick = () => {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.focus();
      }
    };

    const closeOnResize = window.matchMedia("(min-width: 861px)");
    const handleResize = () => setOpen(false);

    button.addEventListener("click", handleMenuClick);
    document.addEventListener("keydown", handleEscape);
    closeOnResize.addEventListener("change", handleResize);

    const navLinks = navigation.querySelectorAll("a");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleResize)
    );

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card")
    );
    const filters = document.querySelectorAll<HTMLButtonElement>(
      ".filter"
    );

    filters.forEach((filter) => {
      const key = filter.dataset.filter;
      const count = filter.querySelector(".count");

      if (count) {
        count.textContent = String(
          key === "all"
            ? cards.length
            : cards.filter((card) => card.dataset.cat === key).length
        );
      }

      filter.addEventListener("click", () => {
        filters.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === filter));
        });

        cards.forEach((card) => {
          card.hidden =
            key !== "all" && card.dataset.cat !== key;
        });
      });
    });

    return () => {
      button.removeEventListener("click", handleMenuClick);
      document.removeEventListener("keydown", handleEscape);
      closeOnResize.removeEventListener("change", handleResize);

      navLinks.forEach((link) =>
        link.removeEventListener("click", handleResize)
      );
    };
  }, []);

  return null;
}
