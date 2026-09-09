import './Skills.css';

import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        {/* =========================================
            SECTION HEADER
           ========================================= */}

        <div className="skills-header">

          <span className="skills-index">
            02 / STACK
          </span>

          <span className="skills-caption">
            THE THINGS I BREAK & FIX
          </span>

        </div>

        {/* =========================================
            INTRO
           ========================================= */}

        <div className="skills-intro">

          <p className="skills-eyebrow">
            THE TOOLBOX
          </p>

          <h2>
            A stack built around
            <span> curiosity.</span>
          </h2>

          <p className="skills-description">
            These are the tools I use to turn ideas into interfaces,
            APIs, applications, and occasionally a very stubborn bug
            that refuses to disappear.
          </p>

        </div>

        {/* =========================================
            SKILL CATEGORIES
           ========================================= */}

        <div className="skills-grid">

          {Object.entries(skillsData).map(
            ([category, skills], categoryIndex) => (

              <article
                key={category}
                className="skill-category"
                data-number={`0${categoryIndex + 1}`}
              >

                {/* Category Header */}

                <div className="skill-category-header">

                  <span className="skill-category-number">
                    0{categoryIndex + 1}
                  </span>

                  <span className="skill-category-name">
                    {category}
                  </span>

                </div>

                {/* Skills */}

                <div className="skill-tags">

                  {skills.map((skill, index) => (

                    <span
                      key={index}
                      className="skill-tag"
                    >
                      <span className="skill-dot"></span>

                      {skill}
                    </span>

                  ))}

                </div>

                {/* Hover Arrow */}

                <span className="skill-category-arrow">
                  ↗
                </span>

              </article>

            )
          )}

        </div>

        {/* =========================================
            BOTTOM STATEMENT
           ========================================= */}

        <div className="skills-footer">

          <span className="skills-footer-line"></span>

          <p>
            LEARN → BUILD → BREAK → UNDERSTAND → REPEAT
          </p>

        </div>

      </div>

    </section>
  );
}