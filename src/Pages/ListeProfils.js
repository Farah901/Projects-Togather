import React from 'react';
import CarteProfil from './CarteProfil';

export default function ListeProfils({ profils, supprProfil }) {
  return (
    <div>
      {profils.map((profil, index) => (
        <div key={index} className="profil-card">
          <CarteProfil
            nom={profil.nom}
            age={profil.age}
            profession={profil.profession}
            image={profil.image}
            className="card"
          />
          <div className="button-container">
            <button
              onClick={() => supprProfil(index)}
              className="delete-btn"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <style>
        {`
          .profil-card {
            margin: 15px;
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease;
          }

          .profil-card:hover {
            transform: translateY(-5px);
          }

          .button-container {
            margin-top: 10px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .delete-btn {
            padding: 8px 20px;
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .delete-btn:hover {
            background-color: #c0392b;
          }

          .card {
            width: 100%;
            margin-bottom: 15px;
          }
        `}
      </style>
    </div>
  );
}
