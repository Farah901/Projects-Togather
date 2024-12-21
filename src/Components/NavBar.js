import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LangComponent from "../Pages/LangComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeToggler from "../Pages/ThemeToggler";
import { ThemeContext } from "../Pages/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark" : "navbar-light"}`}>
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                Profiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/world-flags">
                World Geography
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo-app">
                DoneDeal
              </Link>
            </li>
          </ul>
          {/* Language Component */}
          <LangComponent />
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
