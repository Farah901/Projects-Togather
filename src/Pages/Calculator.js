import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import mathjs for expression evaluation
import NavBar from "../Components/NavBar";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Use mathjs to safely evaluate the expression
        let result = evaluate(input);
        // Limit result to 4 decimal places if it is a decimal
        if (typeof result === "number" && result % 1 !== 0) {
          result = result.toFixed(4);
        }
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "CE") {
      setInput(input.slice(0, -1)); // Remove last character
    } else if (value === "√") {
      try {
        let sqrtResult = Math.sqrt(parseFloat(input));
        setInput(sqrtResult.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value); // Add value to input string
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "√", "+",
    "C", "CE", "=",
  ];

  return (
    <>
      <NavBar />
      <h1 className="text-center">Calculator</h1>
      <div className="calculator-container">
        <div className="calculator">
          <div className="display">{input || "0"}</div>
          <div className="buttons">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => btn && handleClick(btn)}
                className={`btn ${isNaN(btn) && btn !== "." && btn !== "" ? "operator" : ""} ${btn === "" ? "empty" : ""}`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`          

          /* Calculator Container Styling */
          .calculator-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          /* Calculator Styling */
          .calculator {
            width: 320px;
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            border: 2px solid white;
          }

          /* Display Styling */
          .display {
            padding: 20px;
            font-size: 2rem;
            background: #222;
            color: #fff;
            text-align: right;
            border-bottom: 2px solid black;
          }

          /* Buttons Grid Layout */
          .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
            background: #222;
          }

          /* Button Styling */
          .btn {
            padding: 20px;
            font-size: 1.2rem;
            color: #222;
            background: #fff;
            border: none;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
          }

          /* Button Active State */
          .btn:active {
            background: #ddd;
            color: black;
            transform: scale(0.95);
          }

          /* Operator Button Styling */
          .operator {
            background: #05a389;
            color: #fff;
          }

          .operator:active {
            background: #026e5c;
          }

          /* Empty Button Styling (for spacing) */
          .empty {
            background: transparent;
            cursor: default;
          }

          /* Button Hover Effect */
          .btn:hover:not(.empty) {
            background: #f1f1f1;
            color: black;
          }

          /* Special Styling for Equal Button (spanning two columns) */
          .btn:nth-last-child(1) {
            background: #05a389;
            color: #fff;
            grid-column: span 2;
          }

          .btn:nth-last-child(1):active {
            background: #026e5c;
          }
        `}
      </style>
    </>
  );
};

export default App;
