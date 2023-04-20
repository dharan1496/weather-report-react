import { useEffect, useState } from "react";
import "./weather.css";
import { WeatherReport } from "../weather-report/weather-report";
import { AirConditions } from "../air-conditions/air-conditions";
import { TodayForecast } from "../today-forecast/today-forecast";
import { SevenDayForecast } from "../7-day-forecast/7-day-forecast";

export const Weather = () => {
  const [city, setCity] = useState("chennai");
  const [data, setData] = useState(null);

  const search = () => {
    getData();
    setCity("");
  };

  useEffect(() => getData(), []);

  const getData = () => {
    setData(null);
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c50138e788d0428fa5c71216231904&q=${city}&days=7&aqi=yes`
    )
      .then((response: any) => response.json())
      .then((json: any) => setData(json));
  };

  let element = <div className="loader">Loading...</div>;
  if (data && data['error']) {
    element = <div className="error">Error Occured! Please try again with different value.</div>;
  } else if (data) {
    element = (
      <div className="weather-sections">
        <div>
          <WeatherReport data={data} />
          <AirConditions data={data} />
          <TodayForecast data={data} />
        </div>
        <div>
          <SevenDayForecast data={data} />
        </div>
      </div>
    );
  }

  return (
    <div className="weather-container">
      <section className="weather-container-section">
        <input
          type="text"
          placeholder="search for cities"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </section>
      {element}
    </div>
  );
};
