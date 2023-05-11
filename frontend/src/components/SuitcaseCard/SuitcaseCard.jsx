import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../../contexts/WeatherContext";

export default function SuitcaseCard() {
  const { weatherData } = useContext(WeatherContext);

  const [setItemList] = useState([]);
  const server = "http://localhost:3000/vetements";

  useEffect(() => {
    axios.get(server).then((response) => {
      setItemList(response.data);
    });
  }, []);

  return (
    <div className="suitcase">
      <p>{weatherData.main.feels_like.toFixed()}</p>
    </div>
  );
}
