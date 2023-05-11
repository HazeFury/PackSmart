import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

export const LocationContext = React.createContext({
  location: null,
  setLocation: () => {},
});

export function LocationProvider({ children }) {
  const [location, setLocation] = useState([]);

  const LocationContextValue = useMemo(() => {
    return { location, setLocation };
  }, [location]);

  return (
    <LocationContext.Provider value={LocationContextValue}>
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
