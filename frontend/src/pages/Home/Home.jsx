import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImg from "./background.jpg";

export default function Home() {
  return (
    <div className="main">
      <div className="home-container">
        <img id="home-image" src={backgroundImg} alt="voyage" />
        <h2 className="heading">
          Vous voulez partir en vacances mais vous ne savez pas quoi emmener ?
        </h2>
        <p className="description">
          Notre application simplifie la préparation des bagages pour vos
          vacances. Renseignez votre destination et le type de vacance et nous
          vous fournissons une liste personnalisée de vêtements indispensables
          selon les conditions météorologiques. Voyagez léger et concentrez-vous
          sur les choses importantes - explorer, se détendre et créer des
          souvenirs inoubliables!
        </p>
        <Link to="/packing" className="button">
          PackSmart
        </Link>
      </div>
    </div>
  );
}
