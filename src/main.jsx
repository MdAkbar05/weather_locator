import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FavouriteProvider from "./provider/FavouriteProvider.jsx";
import WeatherProvider from "./provider/WeatherProvider.jsx";
import LocationProvider from "./provider/LocationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  </StrictMode>
);
