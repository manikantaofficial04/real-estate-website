import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    setSuccess("");

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(
        "Login successful! Welcome back."
      );

      setEmail("");
      setPassword("");
    }
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        {/* Form */}
        <div className="auth-content">

          <span className="section-tag">
            WELCOME BACK
          </span>

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to your account and continue your
            property journey with us.
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

            {/* Email */}
            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors({
                      ...errors,
                      email: "",
                    });
                  }
                }}
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
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  if (errors.password) {
                    setErrors({
                      ...errors,
                      password: "",
                    });
                  }
                }}
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


            {/* Options */}
            <div className="form-options">

              <label className="remember-me">

                <input type="checkbox" />

                Remember me

              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="auth-button"
            >
              Login
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-signup">

            Don't have an account?

            <Link to="/signup">
              Create Account
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
              A Better Place
              <br />
              Starts Here.
            </h2>

            <p>
              Discover beautiful homes and premium
              properties designed for the way you live.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;