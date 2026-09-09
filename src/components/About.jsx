import './About.css';

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* =========================================
            SECTION HEADER
           ========================================= */}

        <div className="about-header">
          <span className="about-index">01 / ABOUT</span>

          <span className="about-status">
            <span className="about-status-dot"></span>
            STILL FIGURING THINGS OUT
          </span>
        </div>

        {/* =========================================
            MAIN STATEMENT
           ========================================= */}

        <div className="about-intro">

          <p className="about-eyebrow">
            A LITTLE CONTEXT
          </p>

          <h2>
            I don't just write
            <span> code.</span>
            <br />
            I collect problems.
          </h2>

        </div>

        {/* =========================================
            STORY
           ========================================= */}

        <div className="about-story">

          <div className="about-story-label">
            <span>01</span>
            <span>THE SHORT VERSION</span>
          </div>

          <div className="about-text">

            <p className="about-lead">
              I'm a Computer Engineer who enjoys turning messy ideas
              into things that actually work.
            </p>

            <p>
              I work across the stack — from building interfaces that
              feel good to use, to designing the logic and APIs that
              quietly make everything happen underneath.
            </p>

            <p>
              I'm naturally curious, slightly obsessed with learning,
              and very comfortable breaking something just to understand
              why it worked in the first place.
            </p>

          </div>

        </div>

        {/* =========================================
            PERSONAL GRID
           ========================================= */}

        <div className="about-grid">

          <article className="about-card">

            <span className="about-card-number">01</span>

            <div className="about-card-content">
              <span className="about-card-label">
                BUILD
              </span>

              <h3>
                Ideas → Interfaces
              </h3>

              <p>
                React, Node.js, JavaScript and everything in between.
                I like turning concepts into interfaces people can
                actually use.
              </p>
            </div>

            <span className="about-card-arrow">↗</span>

          </article>


          <article className="about-card">

            <span className="about-card-number">02</span>

            <div className="about-card-content">
              <span className="about-card-label">
                LEARN
              </span>

              <h3>
                Curiosity has no logout
              </h3>

              <p>
                New technology, documentation, random rabbit holes —
                if I don't understand something, I usually end up
                learning it.
              </p>
            </div>

            <span className="about-card-arrow">↗</span>

          </article>


          <article className="about-card">

            <span className="about-card-number">03</span>

            <div className="about-card-content">
              <span className="about-card-label">
                PLAY
              </span>

              <h3>
                Games are research. Obviously.
              </h3>

              <p>
                Gaming keeps the creative side alive. Sometimes the
                best solution comes after stepping away from the
                keyboard.
              </p>
            </div>

            <span className="about-card-arrow">↗</span>

          </article>


          <article className="about-card">

            <span className="about-card-number">04</span>

            <div className="about-card-content">
              <span className="about-card-label">
                LISTEN
              </span>

              <h3>
                Every good session needs a soundtrack.
              </h3>

              <p>
                Music, headphones, a cup of tea and an unreasonable
                number of browser tabs. That's usually the setup.
              </p>
            </div>

            <span className="about-card-arrow">↗</span>

          </article>

        </div>

        {/* =========================================
            CLOSING STATEMENT
           ========================================= */}

        <div className="about-footer">

          <div className="about-footer-line"></div>

          <p>
            Still learning. Still building.
            <span> Still drinking tea.</span>
          </p>

          <span className="about-footer-mark">
            A.D.
          </span>

        </div>

      </div>

    </section>
  );
}

