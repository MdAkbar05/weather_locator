import Header from "./components/header";
import WeatherBoard from "./components/weather/WeatherBoard";

// background image import
import clearSky from "./assets/backgrounds/clear-sky.jpg";
import fewClouds from "./assets/backgrounds/few-clouds.jpg";
// import scatteredClouds from "./assets/backgrounds/scattered-clouds.jpg";
import showerRain from "./assets/backgrounds/shower-rain.jpg";
import sunny from "./assets/backgrounds/sunny.jpg";
// import winter from "./assets/backgrounds/winter.jpg";
import thunderstorm from "./assets/backgrounds/thunderstorm.jpg";
// import rainyDay from "./assets/backgrounds/rainy-day.jpg";
// import thunder from "./assets/backgrounds/thunderstorm.jpg";
import snow from "./assets/backgrounds/snow.jpg";
import mist from "./assets/backgrounds/mist.jpeg";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";

export default function App() {
  const { weatherData } = useContext(WeatherContext);

  const [backgroundImage, setBackgroundImage] = useState(null);

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Clear":
        return clearSky;
      case "Clouds":
        return fewClouds;
      case "Rain":
        return showerRain;
      case "Thunderstorm":
        return thunderstorm;
      case "Snow":
        return snow;

      case "Mist":
        return mist;
      default:
        return sunny;
    }
  }

  useEffect(() => {
    setBackgroundImage(getBackgroundImage(weatherData.climate));
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="grid place-items-center h-screen bg-cover bg-no-repeat bg-center"
    >
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
