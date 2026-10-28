import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties";

function Properties() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("All Property Types");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [sortBy, setSortBy] = useState("Sort: Newest");

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      // Location search
      const matchesLocation =
        location.trim() === "" ||
        property.location
          .toLowerCase()
          .includes(location.toLowerCase().trim());

      // Property type
      const matchesType =
        propertyType === "All Property Types" ||
        property.type === propertyType;

      // Price filter
      const price = property.price.toLowerCase();

      let matchesPrice = true;

      if (priceRange === "Under ₹30 Lakhs") {
        matchesPrice =
          price.includes("lakhs") &&
          parseFloat(price.replace(/[^\d.]/g, "")) < 30;
      }

      if (priceRange === "₹30 - ₹50 Lakhs") {
        matchesPrice =
          price.includes("lakhs") &&
          parseFloat(price.replace(/[^\d.]/g, "")) >= 30 &&
          parseFloat(price.replace(/[^\d.]/g, "")) <= 50;
      }

      if (priceRange === "₹50 Lakhs - ₹1 Crore") {
        if (price.includes("crore")) {
          matchesPrice = parseFloat(price.replace(/[^\d.]/g, "")) <= 1;
        } else if (price.includes("lakhs")) {
          matchesPrice =
            parseFloat(price.replace(/[^\d.]/g, "")) > 50;
        } else {
          matchesPrice = false;
        }
      }

      if (priceRange === "Above ₹1 Crore") {
        matchesPrice = price.includes("crore");
      }

      return matchesLocation && matchesType && matchesPrice;
    });

    // Sorting
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => {
        const getPrice = (property) => {
          const value = parseFloat(
            property.price.replace(/[^\d.]/g, "")
          );

          if (property.price.toLowerCase().includes("crore")) {
            return value * 100;
          }

          return value;
        };

        return getPrice(a) - getPrice(b);
      });
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => {
        const getPrice = (property) => {
          const value = parseFloat(
            property.price.replace(/[^\d.]/g, "")
          );

          if (property.price.toLowerCase().includes("crore")) {
            return value * 100;
          }

          return value;
        };

        return getPrice(b) - getPrice(a);
      });
    }

    return result;
  }, [location, propertyType, priceRange, sortBy]);

  const clearFilters = () => {
    setLocation("");
    setPropertyType("All Property Types");
    setPriceRange("Any Price");
    setSortBy("Sort: Newest");
  };

  return (
    <main className="properties-page">

      {/* Header */}
      <section className="properties-header">

        <span className="section-tag">
          EXPLORE PROPERTIES
        </span>

        <h1>
          Find Your Perfect Property
        </h1>

        <p>
          Browse through our collection of beautiful
          homes, apartments and villas.
        </p>

      </section>

      {/* Search and Filters */}
      <section className="properties-search">

        <input
          type="text"
          placeholder="Search by location..."
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <select
          value={propertyType}
          onChange={(event) =>
            setPropertyType(event.target.value)
          }
        >
          <option>All Property Types</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Commercial</option>
        </select>

        <select
          value={priceRange}
          onChange={(event) =>
            setPriceRange(event.target.value)
          }
        >
          <option>Any Price</option>
          <option>Under ₹30 Lakhs</option>
          <option>₹30 - ₹50 Lakhs</option>
          <option>₹50 Lakhs - ₹1 Crore</option>
          <option>Above ₹1 Crore</option>
        </select>

        <button
          type="button"
          onClick={() => {
            // Filters work automatically
            // This button keeps the UI consistent.
          }}
        >
          Search
        </button>

      </section>

      {/* Properties */}
      <section className="properties-section">

        <div className="properties-top">

          <div>

            <h2>
              Available Properties
            </h2>

            <p>
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? "property"
                : "properties"}{" "}
              found
            </p>

          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
          >
            <option>Sort: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

        </div>

        {/* Clear Filters */}
        {(location ||
          propertyType !== "All Property Types" ||
          priceRange !== "Any Price") && (
          <button
            type="button"
            onClick={clearFilters}
            style={{
              marginBottom: "25px",
              padding: "10px 16px",
              border: "none",
              borderRadius: "7px",
              background: "#111111",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Clear Filters
          </button>
        )}

        {/* Property Cards */}
        {filteredProperties.length > 0 ? (

          <div className="property-list-grid">

            {filteredProperties.map((property) => (

              <div
                className="listing-card"
                key={property.id}
              >

                <div
                  className="listing-image"
                  style={{
                    backgroundImage: `url(${property.image})`,
                  }}
                >

                  <span className="property-status">
                    {property.status}
                  </span>

                </div>

                <div className="listing-content">

                  <span className="listing-type">
                    {property.type}
                  </span>

                  <h3>
                    {property.title}
                  </h3>

                  <p className="listing-location">
                    📍 {property.location}
                  </p>

                  <div className="listing-price">
                    {property.price}
                  </div>

                  <div className="listing-details">

                    <span>
                      🛏 {property.beds} Beds
                    </span>

                    <span>
                      🛁 {property.baths} Baths
                    </span>

                    <span>
                      📐 {property.area} sqft
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

        ) : (

          <div
            style={{
              textAlign: "center",
              padding: "70px 20px",
              background: "#ffffff",
              borderRadius: "16px",
            }}
          >

            <h2>
              No Properties Found
            </h2>

            <p
              style={{
                color: "#64748b",
                marginTop: "10px",
              }}
            >
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "7px",
                background: "#8b1e2d",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Reset Filters
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Properties;