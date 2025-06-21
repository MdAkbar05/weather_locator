import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    temperature: "",
    climate: "",
    maxTemperature: "",
    minTemperature: "",
    humadity: "",
    cloudyPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  // fetch weather data from API
  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Weather data is loading...",
      });

      // call the weather API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed with status: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updatedWeatherData = {
        ...weatherData,
        location: location?.location || data?.name,
        climate: data?.weather[0].main,
        temperature: data?.main.temp,
        maxTemperature: data?.main.temp_max,
        minTemperature: data?.main.temp_min,
        humadity: data?.main.humidity,
        cloudyPercentage: data?.clouds.all,
        wind: data?.wind.speed,
        // format the time and date to a more readable format
        time: new Date(data?.dt * 1000).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      status: true,
      message: "Finding your location...",
    });
    if (location.latitude && location.longitude && location.location) {
      fetchWeatherData(location.longitude, location.latitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { longitude, latitude } = position.coords;
        fetchWeatherData(longitude, latitude);
      });
    }
  }, [location.latitude, location.longitude]);
  return {
    weatherData,
    loading,
    error,
  };
}
