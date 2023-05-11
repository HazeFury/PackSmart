import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContext } from "../../contexts/WeatherContext";
import "./Weather.css";

export default function Weather() {
  const { weatherData, setWeatherData } = React.useContext(WeatherContext);
  const [location, setLocation] = useState("Lyon,fr");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9f02a6789ca981ee3a69eeb7f8ce34e&units=metric&lang=fr`;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeatherData(response.data);
    });
  }, [url]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      axios.get(url).then((response) => {
        setWeatherData(response.data);
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
            <p>{date.toLocaleDateString("fr-FR")}</p>
          </div>
        </div>
        <div className="location">
          <p>{weatherData.name}</p>
        </div>
        <div className="temp">
          {weatherData.main ? (
            <h2>{weatherData.main.temp.toFixed()}°c</h2>
          ) : null}
        </div>
        <div className="weather-description">
          {weatherData.weather ? (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather-icon"
              className="weather-icon"
            />
          ) : null}
          {weatherData.weather ? (
            <p>{weatherData.weather[0].description}</p>
          ) : null}
        </div>
      </div>

      {weatherData.name !== undefined && (
        <div className="weather-bottom-container">
          <div className="feels">
            {weatherData.main ? (
              <p>{weatherData.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Ressenti</p>
          </div>
          <div className="humidity">
            {weatherData.main ? <p>{weatherData.main.humidity}%</p> : null}
            <p>Humidité</p>
          </div>
          <div className="wind">
            {weatherData.wind ? (
              <p>{weatherData.wind.speed.toFixed()}km/h</p>
            ) : null}
            <p>Vent</p>
          </div>
        </div>
      )}
    </div>
  );
}
