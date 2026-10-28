import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            🏠 RealEstate
          </Link>

          <p>
            Discover beautiful homes and premium properties
            designed for the way you live.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/properties">
            Properties
          </Link>

          <Link to="/agent/1">
            Agents
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* Company */}
        <div className="footer-column">

          <h3>
            Company
          </h3>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

          <a href="#">
            About Us
          </a>

          <a href="#">
            Careers
          </a>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>
            Contact Us
          </h3>

          <span>
            📍 Hyderabad, Telangana
          </span>

          <span>
            📞 +91 98765 43210
          </span>

          <span>
            ✉️ hello@realestate.com
          </span>

          <span>
            🕒 Mon - Sat: 9 AM - 6 PM
          </span>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 RealEstate. All rights reserved.
        </p>

        <div>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;