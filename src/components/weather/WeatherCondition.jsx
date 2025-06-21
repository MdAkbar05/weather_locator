import { useContext } from "react";
import tempMax from "../../assets/icons/temp-max.svg";
import tempMin from "../../assets/icons/temp-min.svg";
import humidity from "../../assets/icons/humidity.svg";
import cloud from "../../assets/icons/cloud.svg";
import wind from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";

export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);
  const {
    maxTemperature,
    minTemperature,
    humadity: humadityPercentage,
    cloudyPercentage,
    wind: windSpeed,
    climate,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        Weather Condition <u>{climate}</u>.
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°C</p>
            <img src={tempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°C</p>
            <img src={tempMin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(humadityPercentage)}%</p>
            <img src={humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(cloudyPercentage)}%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(windSpeed)} km/h</p>
            <img src={wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
