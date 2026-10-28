import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms =
        "Please accept the Terms & Conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(
        "Account created successfully! Welcome to RealEstate."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        {/* Form */}
        <div className="auth-content">

          <span className="section-tag">
            GET STARTED
          </span>

          <h1>
            Create Your Account
          </h1>

          <p>
            Join our community and discover your perfect
            property with ease.
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
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* First + Last Name */}
            <div className="form-row">

              <div className="form-group">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
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
                  placeholder="Last name"
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
                placeholder="Enter your email"
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


            {/* Password */}
            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <span
                  style={{
                    color: "#b42318",
                    fontSize: "12px",
                  }}
                >
                  {errors.password}
                </span>
              )}

            </div>


            {/* Confirm Password */}
            <div className="form-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <span
                  style={{
                    color: "#b42318",
                    fontSize: "12px",
                  }}
                >
                  {errors.confirmPassword}
                </span>
              )}

            </div>


            {/* Terms */}
            <label className="terms-checkbox">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>
                I agree to the Terms & Conditions
              </span>

            </label>

            {errors.terms && (
              <span
                style={{
                  color: "#b42318",
                  fontSize: "12px",
                  marginTop: "-10px",
                }}
              >
                {errors.terms}
              </span>
            )}


            {/* Submit */}
            <button
              type="submit"
              className="auth-button"
            >
              Create Account
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-signup">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>


        {/* Visual */}
        <div className="auth-visual">

          <div className="auth-overlay">

            <span>
              FIND YOUR DREAM HOME
            </span>

            <h2>
              Your New Home
              <br />
              Awaits.
            </h2>

            <p>
              Explore beautiful properties and find a
              place that perfectly fits your lifestyle.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Signup;