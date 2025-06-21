import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    langitude: 0,
    latitude: 0,
    location: "",
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
