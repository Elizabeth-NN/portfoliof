import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" data-cat={project.category}>
      <div className={`preview ${project.theme}`}>
        <div className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        <div className="initials">{project.initials}</div>

        <img
          src={project.image}
          alt={`${project.name} homepage screenshot`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="status live">{project.status}</span>
      </div>

      <div className="card-body">
        <div className="project-cat">{project.label}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.technologies.map((technology, index) => (
            <span
              className={`tag ${index >= 3 ? "warm" : ""}`}
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            className="link-btn main"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site ↗
          </a>

          {project.githubUrl && (
            <a
              className="link-btn"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
