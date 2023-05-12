import React from "react";
import Weather from "../../components/Weather/Weather";

import "./Packpage.css";

export default function Packpage() {
  return (
    <div className="main">
      <h1 className="packpage-title">Welcome to PackSmart !</h1>
      <h2 className="packpage-subtitle">🧳 The App that helps you pack !🧳</h2>
      <p className="title-instructions">
        Choose destination and type of vacation and you'll get what to pack
      </p>
      <Weather />
    </div>
  );
}
