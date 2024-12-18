import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    isMenuOpen: false, // Toggle state for the menu
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <div>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }

            /* Navbar Container */
            .navbar {
              background-color: #333;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 20px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            /* Navbar Brand */
            .navbar-brand {
              color: white;
              font-size: 24px;
              text-decoration: none;
            }

            /* Navbar Links */
            .nav-links {
              list-style-type: none;
              display: flex;
              margin: 0;
              padding: 0;
            }

            .nav-links li {
              margin: 0 15px;
            }

            .nav-links a {
              color: white;
              text-decoration: none;
              font-size: 18px;
              padding: 10px 15px;
              border-radius: 5px;
              transition: background-color 0.3s, color 0.3s;
            }

            .nav-links a:hover {
              background-color: #555;
              color: #fff;
            }

            .nav-links a.active {
              background-color: #007bff;
              color: white;
            }

            /* Hamburger Menu Icon */
            .hamburger {
              display: none;
              flex-direction: column;
              cursor: pointer;
            }

            .hamburger span {
              background-color: white;
              height: 3px;
              width: 25px;
              margin: 3px 0;
              transition: all 0.3s ease;
            }

            /* Mobile Menu */
            @media (max-width: 768px) {
              .hamburger {
                display: flex;
              }

              .nav-links {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: #333;
                position: absolute;
                top: 60px;
                left: 0;
                padding: 10px 0;
              }

              .nav-links.open {
                display: flex;
              }

              .nav-links li {
                text-align: center;
                margin: 10px 0;
              }
            }
          `}
        </style>

        {/* Navbar */}
        <nav className="navbar justify-content-center">

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${this.state.isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/world-flags">World Geography</Link>
            </li>
            <li>
              <Link to="/todo-app">DoneDeal</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
