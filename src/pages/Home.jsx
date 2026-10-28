import { Link } from "react-router-dom";
import properties from "../data/properties";

function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <main className="home">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            FIND YOUR DREAM HOME
          </span>

          <h1>
            Find a Place
            <br />
            You'll Love to Call Home
          </h1>

          <p>
            Discover beautiful homes, apartments and properties
            that match your lifestyle and budget.
          </p>

          {/* Search Box */}
          <div className="search-box">

            <div className="search-field">

              <span>
                Location
              </span>

              <input
                type="text"
                placeholder="Enter city or location"
              />

            </div>

            <div className="search-field">

              <span>
                Property Type
              </span>

              <select defaultValue="All Properties">

                <option>
                  All Properties
                </option>

                <option>
                  Apartment
                </option>

                <option>
                  House
                </option>

                <option>
                  Villa
                </option>

                <option>
                  Commercial
                </option>

              </select>

            </div>

            <div className="search-field">

              <span>
                Price Range
              </span>

              <select defaultValue="Any Price">

                <option>
                  Any Price
                </option>

                <option>
                  ₹10L - ₹30L
                </option>

                <option>
                  ₹30L - ₹50L
                </option>

                <option>
                  ₹50L - ₹1Cr
                </option>

                <option>
                  ₹1Cr+
                </option>

              </select>

            </div>

            <button
              type="button"
              className="search-button"
            >
              Search
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROPERTIES
      ===================================================== */}

      <section className="featured-section">

        <div className="section-header">

          <div>

            <span className="section-tag">
              EXPLORE
            </span>

            <h2>
              Featured Properties
            </h2>

            <p>
              Explore some of the best properties available
              in prime locations.
            </p>

          </div>

          <Link
            to="/properties"
            className="view-all-button"
          >
            View All Properties
          </Link>

        </div>


        <div className="property-grid">

          {featuredProperties.map((property) => (

            <div
              className="property-card"
              key={property.id}
            >

              {/* Property Image */}
              <div
                className="property-image"
                style={{
                  backgroundImage: `url(${property.image})`,
                }}
              >

                <span className="property-status">
                  {property.status}
                </span>

              </div>


              {/* Property Information */}
              <div className="property-info">

                <span className="listing-type">
                  {property.type}
                </span>

                <h3>
                  {property.title}
                </h3>

                <p>
                  📍 {property.location}
                </p>

                <strong>
                  {property.price}
                </strong>

                <div className="property-meta">

                  <span>
                    🛏 {property.beds} Beds
                  </span>

                  <span>
                    🛁 {property.baths} Baths
                  </span>

                  <span>
                    📐 {property.area.toLocaleString()} sqft
                  </span>

                </div>

                <Link
                  to={`/property/${property.id}`}
                  className="details-button"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="why-section">

        <div className="section-header center">

          <span className="section-tag">
            WHY US
          </span>

          <h2>
            Why Choose RealEstate?
          </h2>

          <p>
            We make finding your next property simple,
            transparent and stress-free.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🏠
            </div>

            <h3>
              Wide Range of Properties
            </h3>

            <p>
              Find apartments, houses, villas and commercial
              properties in one place.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔍
            </div>

            <h3>
              Easy Property Search
            </h3>

            <p>
              Powerful search and filters help you find
              properties that match your requirements.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🤝
            </div>

            <h3>
              Trusted Agents
            </h3>

            <p>
              Connect with experienced property agents
              who understand your needs.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section">

        <div>

          <h2>
            Ready to Find Your Dream Home?
          </h2>

          <p>
            Start exploring properties today.
          </p>

        </div>

        <Link
          to="/properties"
          className="details-button"
        >
          Explore Properties
        </Link>

      </section>

    </main>
  );
}

export default Home;