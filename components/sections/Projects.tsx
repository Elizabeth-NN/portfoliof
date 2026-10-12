"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

type Filter = "all" | "fullstack" | "ai";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Full-stack", value: "fullstack" },
  { label: "AI & RAG", value: "ai" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">ls projects/</div>
          <h2>Selected work</h2>
          <p>
            A mix of client work, open-source contributions, and side
            experiments.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const count = projects.filter(
              (project) =>
                filter.value === "all" ||
                project.category === filter.value,
            ).length;

            return (
              <button
                className="filter"
                type="button"
                key={filter.value}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
                <span className="count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid" id="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="legend">
          <span>
            <b className="f">■ Teal tags</b> frontend
          </span>
          <span>
            <b className="b">■ Amber tags</b> backend &amp; data
          </span>
        </div>
      </div>
    </section>
  );
}
