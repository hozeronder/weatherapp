import axios from "axios";
import { useContext, useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import Weather from "./weather";
import Forecast from "./forecast";
import CityContext from "../weatherapi/CityContext";

// Data Identification
const Weatherdata = () => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const { latitude, longitude } = useGeolocation();
  const { city } = useContext(CityContext);
  const key = process.env.REACT_APP_API_KEY;
  const lang = navigator.language.split("-")[0];

  // Location Data Receive part

  const getWeatherData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}&lang=${lang}`
      );
      setWeather(data);
    } catch {
      console.log("Current Data Error(With Geolocation)");
    }
  };
  // Forecast Data Receive Part

  const getForecastData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=50&units=metric&appid=${key}&lang=${lang}`
      );
      setForecast(data);
    } catch {
      console.log("Forecast Data Error(With Geolocation)");
    }
  };

  // City Data Receive Part

  const getWeatherDataCity = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=${lang}`
      );
      setWeather(data);
    } catch {
      console.log("Current Data Error(With City Name)");
    }
  };
  const getForecastCity = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=50&units=metric&appid=${key}&lang=${lang}`
      );

      setForecast(data);
    } catch {
      console.log("Forecast Data Error(With City Name)");
    }
  };

  //Location Data Receive at Beginning.

  useEffect(() => {
    latitude &&
      longitude &&
      getWeatherData(latitude, longitude) &&
      getForecastData(latitude, longitude);
  }, [latitude, longitude]);

  //City Data Receive When City Is Change.

  useEffect(() => {
    city && getWeatherDataCity(city) && getForecastCity(city);
  }, [city]);

  // Return Data as weather info

  return (
    <div>
      <Weather weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default Weatherdata;
