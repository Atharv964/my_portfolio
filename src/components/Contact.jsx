import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-noise" />
      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />

      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            GET IN TOUCH
          </div>

          <h2>
            Let's <span>talk.</span>
          </h2>

          <p className="contact-intro">
            Have an opportunity, a project, or simply something
            interesting to discuss? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Links */}
        <div className="contact-links">

          {/* Email */}
          <a
            href="mailto:dixitatharv2004@gmail.com"
            className="contact-link"
            aria-label="Email Atharv"
          >
            <span className="contact-icon">✉</span>
            <span className="contact-link-name">Email</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atharv-dixit-55b873372"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Atharv on LinkedIn"
          >
            <span className="contact-icon">in</span>
            <span className="contact-link-name">LinkedIn</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Atharv964"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Atharv on GitHub"
          >
            <span className="contact-icon">◉</span>
            <span className="contact-link-name">GitHub</span>
            <span className="contact-link-arrow">↗</span>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/p0AiwqkOcf/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Atharv on LeetCode"
          >
            <span className="contact-icon">λ</span>
            <span className="contact-link-name">LeetCode</span>
            <span className="contact-link-arrow">↗</span>
          </a>

        </div>

        {/* Bottom */}
        <div className="contact-bottom">
          <span>BASED IN PUNE, INDIA</span>

          <span className="bottom-symbol">✦</span>

          <span>BUILDING FOR THE WEB</span>
        </div>

      </div>
    </section>
  );
}
