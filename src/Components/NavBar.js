import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
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

            .navbar {
              background-color: #333;
              list-style-type: none;
              padding: 10px 0;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .navbar li {
              margin: 0 15px;
            }

            .navbar a {
              color: white;
              text-decoration: none;
              font-size: 18px;
              padding: 10px 15px;
              border-radius: 5px;
              transition: background-color 0.3s, color 0.3s;
            }

            .navbar a:hover {
              background-color: #555;
              color: #fff;
            }

            .navbar a.active {
              background-color: #007bff;
              color: white;
            }

            @media (max-width: 768px) {
              .navbar {
                flex-direction: column;
              }

              .navbar li {
                margin: 10px 0;
              }

              .navbar a {
                font-size: 16px;
                padding: 10px;
              }
            }
          `}
        </style>
        <ul className="navbar">
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
      </div>
    );
  }
}
