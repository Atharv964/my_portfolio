import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
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
          I turn tea, curiosity, and stubborn bugs into things that work.
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
    </section>
  );
}