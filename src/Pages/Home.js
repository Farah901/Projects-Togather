import React, { useContext } from "react";
import NavBar from '../Components/NavBar'; 
import { LangContext } from "./langContext";

export default function Home() {
  const { titre, text } = useContext(LangContext);

  return (
    <>
      <style>
        {`
          .conta {
            height:85vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
          }

          .conta h1 {
            color: #343a40;
            margin-bottom: 20px;
            font-family: 'Arial', sans-serif;
          }

          .conta p {
            font-size: 1rem;
            color: #6c757d;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            font-family: 'Arial', sans-serif;
          }

        `}
      </style>

      <NavBar />
          <br /><br />
      <div className="conta">
        <h1>{titre}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
