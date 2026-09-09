import './Contact.css';

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
            Let's
            <span>talk.</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind, an opportunity to discuss,
            or simply want to say hello? My inbox is always open.
          </p>
        </div>

        {/* Main CTA */}
        <div className="contact-cta">
          <div className="cta-left">
            <span className="cta-label">START A CONVERSATION</span>

            <a
              href="mailto:atharv@example.com"
              className="cta-email"
            >
              atharv@example.com
              <span className="cta-arrow">↗</span>
            </a>
          </div>

          <div className="availability">
            <span className="availability-dot" />
            <div>
              <span className="availability-title">AVAILABLE</span>
              <span className="availability-text">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">

          <a
            href="mailto:atharv@example.com"
            className="contact-method"
          >
            <div className="method-top">
              <span className="method-number">01</span>
              <span className="method-icon">↗</span>
            </div>

            <div className="method-bottom">
              <span className="method-label">EMAIL</span>
              <span className="method-value">
                atharv@example.com
              </span>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <div className="method-top">
              <span className="method-number">02</span>
              <span className="method-icon">↗</span>
            </div>

            <div className="method-bottom">
              <span className="method-label">LINKEDIN</span>
              <span className="method-value">
                /in/atharvdixit
              </span>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <div className="method-top">
              <span className="method-number">03</span>
              <span className="method-icon">↗</span>
            </div>

            <div className="method-bottom">
              <span className="method-label">GITHUB</span>
              <span className="method-value">
                /Atharv964
              </span>
            </div>
          </a>

        </div>

        {/* Bottom Statement */}
        <div className="contact-bottom">
          <span>BASED IN INDIA</span>
          <span className="bottom-symbol">✦</span>
          <span>BUILDING FOR THE WEB</span>
        </div>

      </div>
    </section>
  );
}

