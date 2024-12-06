import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="weather-info">
      <div className="weather-profile">
        <div className="NT">
          <p>{data.name}</p>
          <h1>{data.main.temp}°C</h1>
        </div>
        <p className="descr">{data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>   
      </div>
      
      <div className="weather-prop">
        <p className="para">{data.main.feels_like}<br />Feels Like</p>
        <p className="para">{data.main.humidity}<br />Humidity</p>
        <p className="para">{data.wind.speed}KPH<br />Wind Speed</p>
      </div>
    </div>
  );
};

export default Weather;
