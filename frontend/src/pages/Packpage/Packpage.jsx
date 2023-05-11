import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContext } from "../../contexts/WeatherContext";
import Weather from "../../components/Weather/Weather";
import "./Packpage.css";

export default function Packpage() {
  const [items, setItems] = useState(null);
  const { weatherData } = React.useContext(WeatherContext);

  const temperature = weatherData.main.feels_like.toFixed();

  const filterItems = () => {
    if (temperature < 14) {
      return items[0].vetements[1].name;
    }
    if (temperature >= 14) {
      return items[2].vetements[1].name;
    }
    return null;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/vetements")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="main">
      <h1>Welcome to Packingpage</h1>
      <Weather />
      {items && weatherData && <h1 className="victory">{filterItems()}</h1>}
      <p className="temperature">{temperature}</p>
      <p>{items[0].vetements[1].name}</p>
    </div>
  );
}
