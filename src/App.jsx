import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "402020a81466e93c7aa4d9a4f563ba42";

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setWeather(null);
    }
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    if (newCity.trim() !== "") {
      fetchWeather(newCity); 
    } else {
      setWeather(null); 
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="mb-3 col-md-1 w-25 mx-auto text-white">
        <input
          type="text"
          className="form-control::placeholder{color:white} bg-secondary border-white rounded-pill text-center text-white"
          placeholder="Enter Location"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;

