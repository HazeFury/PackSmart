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
  const [type, setType] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9f02a6789ca981ee3a69eeb7f8ce34e&units=metric&lang=fr`;
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

  const filteredItems = (el, tp) => {
    if (tp.main.feels_like.toFixed() <= 8) {
      return el.temperature === "cold";
    }
    if (
      tp.main.feels_like.toFixed() > 8 &&
      tp.main.feels_like.toFixed() <= 16
    ) {
      return el.temperature === "middle";
    }
    if (
      tp.main.feels_like.toFixed() > 16 &&
      tp.main.feels_like.toFixed() <= 24
    ) {
      return el.temperature === "hot";
    }
    if (tp.main.feels_like.toFixed() > 24) {
      return el.temperature === "extraHot";
    }
    if (type === "sport") {
      return el.type === "sport";
    }
    if (type === "chill") {
      return el.type === "chill";
    }
    return el.id;
  };

  function FilterType(el) {
    if (type === "") {
      return null;
    }
    if (type === "sport") {
      // eslint-disable-next-line react/destructuring-assignment
      return el.type === "sport";
    }
    if (type === "chill") {
      // eslint-disable-next-line react/destructuring-assignment
      return el.type === "chill";
    }
    return null;
  }

  const filteredExtra = (el, tp) => {
    if (tp.weather[0].main === "Clear") {
      return el.weather === "clear";
    }
    if (tp.weather[0].main === "Clouds") {
      return el.weather === "cloud";
    }
    if (tp.weather[0].main === "Rain") {
      return el.weather === "rain";
    }
    return null;
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
                placeholder="Enter Location"
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
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="type-select" onChange={(e) => setType(e.target.value)}>
            <option value="">---</option>
            <option value="sport">Sport</option>
            <option value="chill">Chill</option>
          </select>
        </label>
      </form>
      {showLuggage && (
        <div className="luggage">
          <h1 className="luggage-title">Your Luggage:</h1>
          <div>
            <div className="clothes-container">
              <h2 className="title">Clothes</h2>
              <ul className="luggage-list">
                {items[0].vetements
                  .filter((item) => filteredItems(item, weatherData))
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
            <div className="accessory-container">
              <h2 className="title">Accessories</h2>
              <ul className="accessory-list">
                {items[1].accessoires
                  .filter((item) => FilterType(item))
                  .map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
            <div className="extra-container">
              <h2 className="title">Extra</h2>
              <ul className="extra-list">
                {items[2].extras
                  .filter((item) => filteredExtra(item, weatherData))
                  .map((item) => (
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
