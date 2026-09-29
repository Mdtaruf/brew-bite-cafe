function Footer() {
  return (
    <footer className="footer">

      {/* Footer Top */}

      <div className="footer-top">

        {/* Brand */}

        <div className="footer-brand">

          <a
            href="#home"
            className="footer-logo"
          >
            ☕ Brew & Bite
          </a>

          <p>
            Coffee, food and good vibes.
          </p>

          <div className="social-links">

            <a href="#instagram">
              Instagram
            </a>

            <a href="#facebook">
              Facebook
            </a>

          </div>

        </div>


        {/* Quick Links */}

        <div className="footer-column">

          <h4>
            Quick Links
          </h4>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#menu">
            Menu
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Contact */}

        <div className="footer-column">

          <h4>
            Contact
          </h4>

          <p>
            📍 123 Cafe Street
          </p>

          <p>
            Jaipur, Rajasthan
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            ✉ hello@brewandbite.com
          </p>

        </div>


        {/* Opening Hours */}

        <div className="footer-column">

          <h4>
            Opening Hours
          </h4>

          <p>
            Monday - Sunday
          </p>

          <p>
            9:00 AM - 11:00 PM
          </p>

          <p className="footer-open">
            ● We're Open
          </p>

        </div>

      </div>


      {/* Footer Bottom */}

      <div className="footer-bottom">

        <span>
          © 2026 Brew & Bite Café.
          All rights reserved.
        </span>

        <span>
          Made with ❤️
        </span>

      </div>

    </footer>
  );
}

export default Footer;