import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* =====================================================
          HERO VISUAL
          ===================================================== */}
      <div className="hero-visual" aria-hidden="true">

        <div className="visual-glow"></div>

        <div className="visual-orbit visual-orbit-one"></div>
        <div className="visual-orbit visual-orbit-two"></div>
        <div className="visual-orbit visual-orbit-three"></div>

        <div className="visual-core">
          <div className="core-inner">
            <span className="core-symbol">{'</>'}</span>
          </div>
        </div>

        <div className="visual-node node-one"></div>
        <div className="visual-node node-two"></div>
        <div className="visual-node node-three"></div>

        <div className="visual-line line-one"></div>
        <div className="visual-line line-two"></div>
        <div className="visual-line line-three"></div>

        <div className="visual-label label-one">
          <span>01</span>
          BUILD
        </div>

        <div className="visual-label label-two">
          <span>02</span>
          EXPLORE
        </div>

        <div className="visual-label label-three">
          <span>03</span>
          REPEAT
        </div>

      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="hero-content">

        <p className="hero-intro">
          HELLO, I'M
        </p>

        <h1 className="hero-name">
          Atharv Dixit
        </h1>

        <p className="hero-title">
          Computer Engineer <span>·</span> Full Stack Developer
        </p>

        <p className="hero-tagline">
          I turn curiosity and stubborn bugs into things that work.
        </p>

        <p className="hero-description">
          I enjoy building thoughtful digital experiences, solving problems,
          and learning something new every time I open the editor.
        </p>

        <div className="hero-cta">

          <a
            href="#projects"
            className="cta-button primary"
          >
            View Projects
            <span className="cta-arrow">↗</span>
          </a>

          <a
            href="#contact"
            className="cta-button secondary"
          >
            Contact Me
            <span className="cta-arrow">↗</span>
          </a>

        </div>

        <div className="hero-signature">

          <span className="signature-line"></span>

          <span>
            TEA → CODE → DEBUG → REPEAT
          </span>

        </div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}
      <div className="hero-scroll" aria-hidden="true">

        <span className="hero-scroll-line"></span>

        <span>
          SCROLL TO EXPLORE
        </span>

      </div>

    </section>
  );
}