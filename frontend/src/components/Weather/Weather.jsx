import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContext } from "../../contexts/WeatherContext";
import "./Weather.css";

export default function Weather() {
  const { weatherData, setWeatherData } = React.useContext(WeatherContext);
  const [location, setLocation] = useState("");
  const [items, setItems] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [showLuggage, setShowLuggage] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9f02a6789ca981ee3a69eeb7f8ce34e&units=metric&lang=en`;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vetements")
      .then((res) => setItems(res.data));
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      axios.get(url).then((response) => {
        setWeatherData(response.data);
        setShowWeather(true);
        setShowLuggage(true);
      });
      setLocation("");
    }
  };

  const handleLocationChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  const handleInputClick = () => {
    setLocation("");
  };

  return (
    <>
      <div className="weather-card-container">
        <div className="weather-card">
          <div className="weather-top-container">
            <div className="search">
              <input
                value={location}
                onChange={handleLocationChange}
                onKeyDown={searchLocation}
                onClick={handleInputClick}
                placeholder="Enter Your Destination"
                type="text"
                className="search-input"
              />
              <button
                type="button"
                className="submit-location-btn"
                onClick={() => {
                  axios.get(url).then((response) => {
                    setWeatherData(response.data);
                    setShowWeather(true);
                    setShowLuggage(true);
                  });
                  setLocation("");
                }}
              >
                Search
              </button>
            </div>
            {showWeather && weatherData && (
              <>
                <div className="location-date">
                  <div className="location">
                    <p>{weatherData.name}</p>
                  </div>
                  <div className="date">
                    <p>{date.toDateString("fr-FR")}</p>
                  </div>
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
              </>
            )}
          </div>

          {showWeather && weatherData && (
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
      </div>

      {showLuggage && (
        <div className="luggage-container">
          <div className="luggage">
            <div className="luggage-title-container">
              <h1 className="luggage-title">Your Luggage:</h1>
            </div>
            <div>
              <ul className="luggage-list">
                {items[0].vetements_tres_froid.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
