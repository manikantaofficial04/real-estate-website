import { Link, useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <main className="property-details-page">
        <div className="property-not-found">
          <h1>Property Not Found</h1>

          <p>
            Sorry, we couldn't find the property you're looking for.
          </p>

          <Link
            to="/properties"
            className="back-properties-button"
          >
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="property-details-page">

      {/* =========================================
          PROPERTY IMAGE
      ========================================= */}

      <section className="property-details-hero">

        <img
          src={property.image}
          alt={property.title}
        />

        <div className="property-details-overlay">

          <span className="details-status">
            {property.status}
          </span>

          <span className="details-type">
            {property.type}
          </span>

        </div>

      </section>


      {/* =========================================
          PROPERTY CONTENT
      ========================================= */}

      <section className="property-details-container">

        {/* Main Content */}

        <div className="property-details-main">

          {/* Heading */}

          <div className="details-heading">

            <div>

              <span className="details-location">
                📍 {property.location}
              </span>

              <h1>{property.title}</h1>

              <p>
                Premium property with modern architecture,
                elegant interiors and thoughtfully designed
                living spaces.
              </p>

            </div>


            <div className="details-price">

              <span>Price</span>

              <strong>
                {property.price}
              </strong>

            </div>

          </div>


          {/* =========================================
              PROPERTY FEATURES
          ========================================= */}

          <div className="property-features">

            <div className="property-feature">

              <span className="feature-symbol">
                🛏
              </span>

              <div>
                <strong>
                  {property.beds}
                </strong>

                <span>
                  Bedrooms
                </span>
              </div>

            </div>


            <div className="property-feature">

              <span className="feature-symbol">
                🛁
              </span>

              <div>
                <strong>
                  {property.baths}
                </strong>

                <span>
                  Bathrooms
                </span>
              </div>

            </div>


            <div className="property-feature">

              <span className="feature-symbol">
                📐
              </span>

              <div>
                <strong>
                  {property.area}
                </strong>

                <span>
                  Sq Ft
                </span>
              </div>

            </div>


            <div className="property-feature">

              <span className="feature-symbol">
                🏠
              </span>

              <div>
                <strong>
                  {property.type}
                </strong>

                <span>
                  Property Type
                </span>
              </div>

            </div>

          </div>


          {/* =========================================
              ABOUT PROPERTY
          ========================================= */}

          <div className="details-section">

            <h2>
              About This Property
            </h2>

            <p>
              Welcome to this beautifully designed{" "}
              {property.type.toLowerCase()} located in{" "}
              {property.location}.
              This property combines contemporary
              architecture with comfortable and functional
              living spaces.
            </p>

            <p>
              The home features spacious rooms, premium
              finishes, excellent natural lighting and a
              thoughtfully planned layout. It is ideal for
              families looking for comfort, privacy and a
              modern lifestyle.
            </p>

          </div>


          {/* =========================================
              PROPERTY HIGHLIGHTS
          ========================================= */}

          <div className="details-section">

            <h2>
              Property Highlights
            </h2>

            <div className="highlights-grid">

              <div>
                ✓ Modern Architecture
              </div>

              <div>
                ✓ Spacious Interiors
              </div>

              <div>
                ✓ Natural Lighting
              </div>

              <div>
                ✓ Premium Finishes
              </div>

              <div>
                ✓ Prime Location
              </div>

              <div>
                ✓ Family Friendly
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CONTACT SIDEBAR
        ========================================= */}

        <aside className="property-contact-card">

          <h2>
            Interested in this property?
          </h2>

          <p>
            Get in touch with our property specialist
            to schedule a visit or request more details.
          </p>


          <button className="contact-agent-button">
            Contact Agent
          </button>


          <button className="schedule-button">
            Schedule a Visit
          </button>


          {/* Agent */}

          <div className="agent-preview">

            <div className="agent-avatar">
              👤
            </div>

            <div>

              <strong>
                Rahul Sharma
              </strong>

              <span>
                Property Consultant
              </span>

            </div>

          </div>


          <div className="agent-contact">
            📞 +91 98765 43210
          </div>

          <div className="agent-contact">
            ✉️ hello@realestate.com
          </div>

        </aside>

      </section>


      {/* =========================================
          BACK TO PROPERTIES
      ========================================= */}

      <div className="details-back">

        <Link to="/properties">
          ← Back to All Properties
        </Link>

      </div>

    </main>
  );
}

export default PropertyDetails;