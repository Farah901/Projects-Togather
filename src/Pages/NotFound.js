import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function NotFound() {
  return (
    <><NavBar/>
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div></>
  );
}
