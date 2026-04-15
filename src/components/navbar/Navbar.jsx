import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect with throttle (performance optimization)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !menuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    { name: "Results", href: "#transformations" },
    { name: "Programs", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          RAW<span>GYM</span>
        </h2>

        {/* DESKTOP MENU */}
        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* JOIN BUTTON (Desktop) */}
        <div className="nav-actions">
          <a href="tel:+919597762773" className="nav-btn-link">
            <button className="nav-btn">Join Now</button>
          </a>

          {/* MOBILE MENU ICON */}
          <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          ))}
          <a href="tel:+919597762773" onClick={closeMenu}>
            <button className="mobile-btn">Start Training</button>
          </a>
        </div>
      </div>

      {/* Overlay with blur */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;