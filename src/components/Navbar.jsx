import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        ☕ Brew & Bite
      </a>


      {/* Desktop Navigation */}

      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#menu">Menu</a>

        <a href="#gallery">Gallery</a>

        <a href="#contact">Contact</a>

      </div>


      {/* Desktop Order Button */}

      <a
        href="#menu"
        className="order-btn"
      >
        Order Now
      </a>


      {/* Mobile Hamburger */}

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* Mobile Navigation */}

      {menuOpen && (

        <div className="mobile-nav">

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#menu"
            onClick={closeMenu}
          >
            Menu
          </a>

          <a
            href="#gallery"
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            href="#menu"
            className="mobile-order-btn"
            onClick={closeMenu}
          >
            Order Now
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;