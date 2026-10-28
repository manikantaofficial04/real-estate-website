import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          🏠 RealEstate
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/agent/1">Agents</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-actions">
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>

          <NavLink to="/signup" className="signup-btn">
            Sign Up
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;