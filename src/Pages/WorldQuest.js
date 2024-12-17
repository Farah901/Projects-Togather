import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';

function Api() {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch countries data on initial load
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Calculate the data for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const currentCountries = countries.slice(startIndex, startIndex + itemsPerPage);

  // Total pages based on countries length and items per page
  const totalPages = Math.ceil(countries.length / itemsPerPage);

  // Handlers for pagination buttons
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
    <NavBar />
      <div className="api-app-container">
        <div className="api-country-list">
          {currentCountries.map((country) => (
            <div key={country.cca3} className="api-country-card">
              <h2>{country.name.common}</h2>
              <strong>Region: </strong>{country.continents && country.continents[0]} <br />
              <strong>Capital: </strong>{country.capital && country.capital[0]} <br />

              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="api-flag-image"
              />
            </div>
          ))}
        </div>
        <div className="api-pagination">
          <button className="api-pagination-button" onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          <span className="api-pagination-text">
            Page {page} of {totalPages}
          </span>
          <button className="api-pagination-button" onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>

      <style>
        {`
          /* Container Styling */
          .api-app-container {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f9;
          }

          /* Title Styling */
          .api-title {
            text-align: center;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
          }

          /* Country Cards Container */
          .api-country-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }

          /* Individual Country Card Styling */
          .api-country-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .api-country-card:hover {
            transform: scale(1.05);
          }

          /* Flag Image Styling */
          .api-flag-image {
            width: 100%;
            height: auto;
            max-width: 100px;
            margin-top: 10px;
          }

          /* Pagination Styling */
          .api-pagination {
            text-align: center;
            margin-top: 30px;
          }

          .api-pagination-button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            margin: 0 10px;
            transition: background-color 0.3s ease;
          }

          .api-pagination-button:hover {
            background-color: #0056b3;
          }

          .api-pagination-button:disabled {
            background-color: #d6d6d6;
            cursor: not-allowed;
          }

          .api-pagination-text {
            font-size: 1rem;
            color: #333;
          }
        `}
      </style>
    </>
  );
}

export default Api;
