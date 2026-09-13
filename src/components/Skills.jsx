
import { useState } from 'react';
import './Skills.css';

import { skillsData } from '../data/skills';

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(
      openCategory === category ? null : category
    );
  };

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
            ([category, skills], categoryIndex) => {
              const isOpen = openCategory === category;

              return (
                <article
                  key={category}
                  className={`skill-category ${
                    isOpen ? 'is-open' : ''
                  }`}
                  data-number={`0${categoryIndex + 1}`}
                >

                  {/* Category Header */}

                  <button
                    type="button"
                    className="skill-category-header"
                    onClick={() => toggleCategory(category)}
                    aria-expanded={isOpen}
                  >
                    <div className="skill-category-title">
                      <span className="skill-category-number">
                        0{categoryIndex + 1}
                      </span>

                      <span className="skill-category-name">
                        {category}
                      </span>
                    </div>

                    <span className="skill-category-toggle">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>


                  {/* Skills */}

                  <div
                    className={`skill-tags-wrapper ${
                      isOpen ? 'is-open' : ''
                    }`}
                  >
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
                  </div>


                  {/* Desktop Hover Arrow */}

                  <span className="skill-category-arrow">
                    ↗
                  </span>

                </article>
              );
            }
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

