import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(
        "Thank you! Your message has been sent successfully."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">

        <span className="section-tag">
          GET IN TOUCH
        </span>

        <h1>
          Let's Talk About
          <span> Your Next Home</span>
        </h1>

        <p>
          Have a question about a property or need help
          finding your dream home? Our team is here to help.
        </p>

      </section>


      {/* Contact Content */}
      <section className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            We're Here to
            <span> Help</span>
          </h2>

          <p>
            Whether you're buying, selling or renting,
            our experienced team can help you find the
            right property.
          </p>

          <div className="contact-items">

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <strong>Our Office</strong>
                <span>
                  Hyderabad, Telangana, India
                </span>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <strong>Phone</strong>
                <span>
                  +91 98765 43210
                </span>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <strong>Email</strong>
                <span>
                  hello@realestate.com
                </span>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                🕒
              </div>

              <div>
                <strong>Working Hours</strong>
                <span>
                  Monday - Saturday, 9:00 AM - 6:00 PM
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form-card">

          <h2>
            Send Us a Message
          </h2>

          <p>
            Fill out the form and our team will get back
            to you shortly.
          </p>

          {success && (
            <div
              style={{
                padding: "12px 15px",
                marginBottom: "20px",
                borderRadius: "8px",
                background: "#e8f7ee",
                color: "#187a45",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {success}
            </div>
          )}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* First + Last Name */}
            <div className="contact-form-row">

              <div className="form-group">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                {errors.firstName && (
                  <span
                    style={{
                      color: "#b42318",
                      fontSize: "12px",
                    }}
                  >
                    {errors.firstName}
                  </span>
                )}

              </div>


              <div className="form-group">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />

                {errors.lastName && (
                  <span
                    style={{
                      color: "#b42318",
                      fontSize: "12px",
                    }}
                  >
                    {errors.lastName}
                  </span>
                )}

              </div>

            </div>


            {/* Email */}
            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span
                  style={{
                    color: "#b42318",
                    fontSize: "12px",
                  }}
                >
                  {errors.email}
                </span>
              )}

            </div>


            {/* Phone */}
            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <span
                  style={{
                    color: "#b42318",
                    fontSize: "12px",
                  }}
                >
                  {errors.phone}
                </span>
              )}

            </div>


            {/* Message */}
            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && (
                <span
                  style={{
                    color: "#b42318",
                    fontSize: "12px",
                  }}
                >
                  {errors.message}
                </span>
              )}

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="contact-submit-button"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* Back */}
      <div className="contact-back">

        <Link to="/properties">
          ← Browse Properties
        </Link>

      </div>

    </main>
  );
}

export default Contact;