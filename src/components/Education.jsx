import './Education.css';
import { educationData } from '../data/education';

function EducationCard({ education, index }) {
  return (
    <article className="education-item">

      <div className="education-number">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="education-year">
        <span>{education.year}</span>
      </div>

      <div className="education-content">

        <div className="education-heading">
          <div>
            <p className="education-label">
              ACADEMIC / {String(index + 1).padStart(2, '0')}
            </p>

            <h3>{education.degree}</h3>

            <p className="education-institution">
              {education.institution}
            </p>
          </div>

          <span className="education-arrow">↗</span>
        </div>

        <div className="education-description">
          <span className="education-description-label">
            FOCUS
          </span>

          <p>{education.description}</p>
        </div>

      </div>
    </article>
  );
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        {/* Header */}

        <div className="education-header-top">
          <span className="education-index">
            05 / EDUCATION
          </span>

          <span className="education-caption">
            THE FOUNDATION
          </span>
        </div>

        {/* Intro */}

        <div className="education-intro">

          <p className="education-eyebrow">
            THE FOUNDATION
          </p>

          <h2>
            Where the
            <span> curiosity</span>
            <br />
            started.
          </h2>

          <p className="education-intro-description">
            The places where I learned the fundamentals, asked too many
            questions, and slowly turned curiosity into something I could
            build with.
          </p>

        </div>

        {/* Education List */}

        <div className="education-list">

          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}

        </div>

        {/* Footer */}

        <div className="education-footer">

          <span className="education-footer-line"></span>

          <p>
            LEARN → QUESTION → EXPERIMENT → UNDERSTAND
          </p>

          <span className="education-footer-mark">
            A.D.
          </span>

        </div>

      </div>
    </section>
  );
}