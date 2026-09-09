import './Projects.css';

import { projectsData } from '../data/projects';

function ProjectCard({ project, index }) {
  const projectUrl = project.liveDemo || project.github || '#';

  return (
    <article className="project-item">

      {/* PROJECT NUMBER */}
      <div className="project-number">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="project-details">

        {/* PROJECT VISUAL */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-visual"
          aria-label={`View ${project.title}`}
        >

          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />
          ) : (
            <div className="project-image-placeholder">

              <span className="placeholder-index">
                PROJECT {String(index + 1).padStart(2, '0')}
              </span>

              <strong>{project.title}</strong>

              <span className="placeholder-mark">
                A.D.
              </span>

            </div>
          )}

          {/* VISUAL OVERLAY */}
          <div className="project-overlay">

            <span className="project-view-label">
              VIEW PROJECT
            </span>

            <span className="project-arrow">
              ↗
            </span>

          </div>

          {/* SCAN LINE */}
          <span className="project-scan-line"></span>

        </a>

        {/* PROJECT INFO */}
        <div className="project-info">

          <div className="project-meta">
            <span>
              {String(index + 1).padStart(2, '0')} / SELECTED WORK
            </span>

            <span className="project-meta-dot"></span>

            <span>
              {project.technologies.length} TECHNOLOGIES
            </span>
          </div>

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="project-technologies">

            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="tech-tag"
              >
                <span className="tech-dot"></span>
                {tech}
              </span>
            ))}

          </div>

          {/* LINKS */}
          <div className="project-links">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
            )}

          </div>

        </div>

      </div>

    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        {/* SECTION HEADER */}
        <div className="projects-header">

          <div className="projects-index">
            03 / SELECTED WORK
          </div>

          <div className="projects-caption">
            THINGS I'VE ACTUALLY BUILT
          </div>

        </div>

        {/* INTRO */}
        <div className="projects-intro">

          <p className="projects-eyebrow">
            THE WORK
          </p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p className="projects-description">
            A collection of projects where ideas became interfaces,
            APIs became products, and bugs became surprisingly good
            teachers.
          </p>

        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">

          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

        {/* FOOTER */}
        <div className="projects-footer">

          <span className="projects-footer-line"></span>

          <p>
            IDEA → BUILD → BREAK → FIX → SHIP
          </p>

          <span className="projects-footer-mark">
            A.D.
          </span>

        </div>

      </div>

    </section>
  );
}