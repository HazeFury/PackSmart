import React from "react";
import Weather from "../../components/Weather/Weather";

import "./Packpage.css";

export default function Packpage() {
  return (
    <div className="main">
      <h1>Welcome to Packingpage</h1>
      <Weather />
    </div>
  );
}
