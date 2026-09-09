import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      {/* Ambient glow */}
      <div className="footer-glow" />

      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-eyebrow">
              DEVELOPER / ENGINEER
            </span>

            <h2 className="footer-name">
              Atharv
              <span>Dixit.</span>
            </h2>
          </div>

          <p className="footer-description">
            Building thoughtful digital experiences
            with code, curiosity, and attention to detail.
          </p>
        </div>

        {/* Navigation / Social */}
        <div className="footer-middle">
          <div className="footer-status">
            <span className="status-dot" />
            <span>ONLINE</span>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Atharv964"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span>GitHub</span>
              <span className="footer-link-arrow">↗</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span>LinkedIn</span>
              <span className="footer-link-arrow">↗</span>
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span>LeetCode</span>
              <span className="footer-link-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Atharv Dixit
          </p>

          <div className="footer-center-mark">
            <span />
            <span />
            <span />
          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <span className="back-arrow">↑</span>
          </button>
        </div>

        {/* Tiny personal easter egg */}
        <span className="footer-easter-egg">
          Golu Molu
        </span>

      </div>
    </footer>
  );
}