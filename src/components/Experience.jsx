import './Experience.css';
import { experienceData } from '../data/experience';

function ExperienceCard({ experience, index }) {
  return (
    <article className="experience-item">
      <div className="experience-marker">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="experience-date">
        <span>{experience.duration}</span>
      </div>

      <div className="experience-content">
        <div className="experience-heading">
          <div>
            <p className="experience-label">ROLE / {String(index + 1).padStart(2, '0')}</p>

            <h3>{experience.role}</h3>

            <p className="experience-company">
              {experience.company}
            </p>
          </div>

          <span className="experience-arrow">↗</span>
        </div>

        <div className="experience-description">
          <span className="description-index">DESCRIPTION</span>

          <p>{experience.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        {/* Header */}
        <div className="experience-header-top">
          <span className="experience-index">
            04 / EXPERIENCE
          </span>

          <span className="experience-caption">
            WHERE I LEARNED BY DOING
          </span>
        </div>

        {/* Intro */}
        <div className="experience-intro">
          <p className="experience-eyebrow">
            THE JOURNEY
          </p>

          <h2>
            Built through
            <span> experience.</span>
          </h2>

          <p className="experience-description-intro">
            Every role taught me something different — how to build,
            how to collaborate, how to debug at unreasonable hours,
            and how much there is still left to learn.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-list">
          <div className="experience-timeline"></div>

          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="experience-footer">
          <span className="experience-footer-line"></span>

          <p>
            LEARN → CONTRIBUTE → ADAPT → GROW
          </p>

          <span className="experience-footer-mark">
            A.D.
          </span>
        </div>

      </div>
    </section>
  );
}