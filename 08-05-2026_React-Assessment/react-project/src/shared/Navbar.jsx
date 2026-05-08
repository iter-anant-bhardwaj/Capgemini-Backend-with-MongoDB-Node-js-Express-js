// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../pages/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">COMPANYNAME</div>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/login">LOGIN</Link>
      </div>

    </nav>
  );
};

export default Navbar;