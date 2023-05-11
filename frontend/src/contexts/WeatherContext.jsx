import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

export const WeatherContext = React.createContext({
  weatherData: null,
  setWeatherData: () => {},
});

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState([]);

  const weatherContextValue = useMemo(() => {
    return { weatherData, setWeatherData };
  }, [weatherData]);

  return (
    <WeatherContext.Provider value={weatherContextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
