import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar'; 
import { Carousel } from 'react-bootstrap';
import CalculatorImg from './calculatorImg.png';
import Countries from './Countrie.png';
import todoImg from './toDoListImg.png';
import profilesImg from './ProfilesImg.png';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container-fluid text-center mt-4 px-5">
        {/* Carousel Section */}
        <Carousel>
          {/* First Carousel Item - Calculator */}
          <Carousel.Item>
            <div className="image-container">
              <img 
                className="d-block w-100"
                src={CalculatorImg} 
                alt="Calculator"
                style={{ borderRadius: '10px', objectFit: 'cover', height: '500px' }}
              />
            </div>
            <Carousel.Caption>
              <div className="caption-blur">
                <h3>Calculator</h3>
                <p>Perform quick calculations.</p>
                <Link to="/calculator" className="btn btn-primary">Go to Calculator</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Carousel Item - Profiles List */}
          <Carousel.Item>
            <div className="image-container">
              <img 
                className="d-block w-100"
                src={profilesImg}
                alt="Profiles List"
                style={{ borderRadius: '10px', objectFit: 'cover', height: '500px' }}
              />
            </div>
            <Carousel.Caption>
              <div className="caption-blur">
                <h3>Profiles List</h3>
                <p>Manage your profiles easily.</p>
                <Link to="/profiles" className="btn btn-primary">Go to Profiles</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Carousel Item - Todo App */}
          <Carousel.Item>
            <div className="image-container">
              <img 
                className="d-block w-100"
                src={todoImg}
                alt="Todo App"
                style={{ borderRadius: '10px', objectFit: 'cover', height: '500px' }}
              />
            </div>
            <Carousel.Caption>
              <div className="caption-blur">
                <h3>Todo App</h3>
                <p>Organize your tasks efficiently.</p>
                <Link to="/todo-app" className="btn btn-primary">Go to Todo App</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Fourth Carousel Item - World Countries API */}
          <Carousel.Item>
            <div className="image-container">
              <img 
                className="d-block w-100"
                src={Countries}
                alt="World Countries"
                style={{ borderRadius: '10px', objectFit: 'cover', height: '500px' }}
              />
            </div>
            <Carousel.Caption>
              <div className="caption-blur">
                <h3>World Countries</h3>
                <p>Learn about countries around the world.</p>
                <Link to="/world-flags" className="btn btn-primary">Go to World Flags</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Additional CSS Styling */}
      <style jsx="true">{`
        .container-fluid {
          max-width: 100%;
          margin: auto;
        }

        .image-container {
          border-radius: 10px;
          overflow: hidden;
        }

        .carousel-caption {
          bottom: 20px;
        }

        .caption-blur {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          padding: 15px;
          border-radius: 10px;
          display: inline-block;
        }

        .caption-blur h3, 
        .caption-blur p {
          color: white;
          margin: 0;
        }

        .btn-primary {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
