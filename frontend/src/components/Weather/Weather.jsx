import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Lyon,fr");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9f02a6789ca981ee3a69eeb7f8ce34e&units=metric&lang=fr`;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const handleLocationChange = (event) => setLocation(event.target.value);

  const handleInputClick = () => {
    setLocation("");
  };
  return (
    <div className="weather-card">
      <div className="weather-top-container">
        <div className="search">
          <input
            value={location}
            onChange={handleLocationChange}
            onKeyDown={searchLocation}
            onClick={handleInputClick}
            placeholder="Enter Location"
            type="text"
            className="search-input"
          />
          <div className="clock">
            <p>{date.toLocaleString("fr-FR")}</p>
          </div>
        </div>
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h2>{data.main.temp.toFixed()}°c</h2> : null}
        </div>
        <div className="weather-description">
          {data.weather ? (
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather-icon"
              className="weather-icon"
            />
          ) : null}
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
      </div>

      {data.name !== undefined && (
        <div className="weather-bottom-container">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Ressenti</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidité</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}km/h</p> : null}
            <p>Vent</p>
          </div>
        </div>
      )}
    </div>
  );
}
