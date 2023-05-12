import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="main">
      <h1>À propos de nous</h1>
      <div className="team-section">
        <div className="team-member">
          <h2>Teodor</h2>
          <p>Passionné de développement web et de nouvelles technologies.</p>
        </div>
        <div className="team-member">
          <h2>Aurélie</h2>
          <p>
            Experte en design d'interface utilisateur et en expérience
            utilisateur.
          </p>
        </div>
        <div className="team-member">
          <h2>Marc-Antoine</h2>
          <p>Développeur front-end créatif et enthousiaste.</p>
        </div>
        <div className="team-member">
          <h2>Pierre</h2>
          <p>Spécialiste en gestion de projet et résolution de problèmes.</p>
        </div>
      </div>
      <p className="hackathon">
        Nous avons réalisé ce projet lors d'un hackathon intensif d'une journée
        et demie. Vous pouvez consulter notre repository GitHub: <br />
        <a
          href="https://github.com/Ropie1981/PackSmart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github-image"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
      </p>
    </div>
  );
}
