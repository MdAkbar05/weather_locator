import { useContext } from "react";
import pin from "../../assets/pin.svg";
import { WeatherContext } from "../../context/index";

// import cloud image
import cloud from "../../assets/cloud.svg";
import haze from "../../assets/haze.svg";
import rainy from "../../assets/rainy.svg";
import sun from "../../assets/sun.svg";
import thunder from "../../assets/thunder.svg";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { location, temperature, time, climate } = weatherData;

  const weatherIcons = (climate) => {
    switch (climate) {
      case "Clouds":
        return cloud;
      case "Haze":
        return haze;
      case "Rain":
        return rainy;
      case "Clear":
        return sun;
      case "Thunderstorm":
        return thunder;
      case "Fog":
        return haze; // using haze icon for fog
      case "Mist":
        return haze; // using haze icon for mist
      default:
        return sun; // default icon
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={weatherIcons(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°C
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="location pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{time}</p>
    </div>
  );
}
