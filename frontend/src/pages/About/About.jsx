import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="main">
      <h1>About Us</h1>
      <div className="team-section">
        <div className="team-member">
          <h2>Teodor</h2>
          <p>Passionate about web development and new technologies.</p>
        </div>
        <div className="team-member">
          <h2>Aurélie</h2>
          <p>Expert in User Interface design and User Experience.</p>
        </div>
        <div className="team-member">
          <h2>Marc-Antoine</h2>
          <p>Creative and enthusiastic Front-End developer.</p>
        </div>
        <div className="team-member">
          <h2>Pierre</h2>
          <p>Specialist in project management and problem solving.</p>
        </div>
      </div>
      <p className="hackathon">
        We realized this project during an intensive one-day hackathon and a
        half. You can check out our GitHub repository:
        <br />
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
