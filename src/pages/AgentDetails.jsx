import { Link } from "react-router-dom";

function AgentDetails() {
  return (
    <main className="agent-page">

      {/* Hero */}
      <section className="agent-hero">

        <div className="agent-hero-content">

          <span className="section-tag">
            MEET OUR EXPERT
          </span>

          <h1>
            Your Trusted Real Estate
            <span> Expert</span>
          </h1>

          <p>
            Get professional guidance from our experienced
            property consultant and find the perfect place
            to call home.
          </p>

        </div>

      </section>

      {/* Agent Profile */}
      <section className="agent-container">

        <div className="agent-profile-card">

          <div className="agent-profile-image">
            👨🏻‍💼
          </div>

          <div className="agent-profile-info">

            <span className="agent-role">
              SENIOR PROPERTY CONSULTANT
            </span>

            <h2>
              Rahul Sharma
            </h2>

            <p className="agent-location">
              📍 Hyderabad, Telangana
            </p>

            <p className="agent-description">
              Rahul is an experienced real estate professional
              specializing in premium residential properties,
              luxury villas and modern homes.
            </p>

            <div className="agent-stats">

              <div>
                <strong>8+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>250+</strong>
                <span>Properties Sold</span>
              </div>

              <div>
                <strong>180+</strong>
                <span>Happy Clients</span>
              </div>

            </div>

          </div>

        </div>

        {/* Contact Section */}
        <div className="agent-contact-section">

          <div>
            <span className="section-tag">
              GET IN TOUCH
            </span>

            <h2>
              Let's Find Your
              <span> Dream Home</span>
            </h2>

            <p>
              Have questions about a property?
              Contact Rahul and get personalized
              assistance with your property search.
            </p>
          </div>

          <div className="agent-contact-buttons">

            <a
              href="tel:+919876543210"
              className="agent-call-button"
            >
              📞 Call Agent
            </a>

            <a
              href="mailto:hello@realestate.com"
              className="agent-email-button"
            >
              ✉️ Send Email
            </a>

          </div>

        </div>

        {/* Back */}
        <div className="agent-back">

          <Link to="/properties">
            ← Browse Properties
          </Link>

        </div>

      </section>

    </main>
  );
}

export default AgentDetails;