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
          Want to go on vacation but don't know what to pack?
        </h2>
        <p className="description">
          Our application simplifies the preparation of the{" "}
          <span>luggage </span>
          for your holidays.
          <br /> All you have to do is fill in your <span>destination</span> and
          the type of vacation you are planning, and we will take care of the
          rest! We will provide you with a <span>personalized list</span> of
          <span>must-have clothing</span> depending on{" "}
          <span>the weather conditions.</span> Travel light and focus on the
          important things - exploring, relaxing and creating unforgettable
          memories!
          <span className="sun">&#x1F31E;</span>
        </p>
        <Link to="/packing" className="button">
          Let's PackSmart!
        </Link>
      </div>
    </div>
  );
}
