import { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  // { label: 'DSA', href: '#leetcode' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${
          hidden ? 'navbar-hidden' : ''
        }`}
      >
        <div className="navbar-container">

          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-mark">A</span>
            <span className="logo-name">ATHARV.</span>
          </a>

          {/* Availability */}
          <div className="navbar-status">
            <span className="status-dot"></span>
            <span>AVAILABLE</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li className="nav-item" key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  <span className="nav-number">
                    0{index + 1}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-inner">

          <div className="mobile-menu-header">
            <span>NAVIGATION</span>
            <span>00 — 07</span>
          </div>

          <div className="mobile-links">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                className="mobile-link"
                key={item.href}
                onClick={closeMenu}
              >
                <span className="mobile-link-number">
                  0{index + 1}
                </span>

                <span className="mobile-link-text">
                  {item.label}
                </span>

                <span className="mobile-link-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <span>ATHARV DIXIT</span>
            <span>COMPUTER ENGINEER</span>
          </div>

        </div>
      </div>
    </>
  );
}
