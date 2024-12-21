import React, { useContext } from "react";
import { LangContext } from "./langContext";
import frenshFlag from "./frensh.jpeg";
import englishFlag from "./english.png";
import spanishFlag from "./spanish.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LangComponent() {
  const { setLang } = useContext(LangContext);
  return (
    <>
    <style>
      {`
        .lang-logo{
          width:30px;
          height:30px;
          margin-right:10px;
          border-radius:50%;
          cursor:pointer;
        }
      `}
    </style>
      <div>
        <img className="lang-logo" src={englishFlag} alt="English" onClick={() => setLang("EN")} />
        <img className="lang-logo" src={frenshFlag} alt="French" onClick={() => setLang("FR")} />
        <img className="lang-logo" src={spanishFlag} alt="Spanish" onClick={() => setLang("ES")} />
      </div>
    </>
  );
}
