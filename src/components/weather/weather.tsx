import { useEffect, useState } from "react";
import "./weather.css";
import { WeatherReport } from "../weather-report/weather-report";
import { AirConditions } from "../air-conditions/air-conditions";
import { TodayForecast } from "../today-forecast/today-forecast";
import { SevenDayForecast } from "../7-day-forecast/7-day-forecast";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  const search = () => {
    getData();
    setCity("");
  };

  useEffect(() => getData(), []);

  const getData = () => {
    // testQuery();
    setData(null);
    setLoader(true);
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c50138e788d0428fa5c71216231904&q=${
        city || "chennai"
      }&days=7&aqi=yes`
    )
      .then((response: any) => response.json())
      .then(setData)
      .then(() => setLoader(false));
  };

  const testQuery = () => {
    const query = `
    query {
      allLifts {
        name
      }
    }
    `;
    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    };
    fetch("https://snowtooth.moonhighway.com/", options)
      .then((response) => response.json())
      .then(console.log);
  };

  let element = <div className="loader">Loading...</div>;
  if (!loader && data) {
    if ("error" in data) {
      element = (
        <div className="error">
          Error Occured! Please try again with different value.
        </div>
      );
    } else {
      element = (
        <div className="weather-sections">
          <div>
            <WeatherReport  data={data} />
            <AirConditions data={data} />
            <TodayForecast data={data} />
          </div>
          <div>
            <SevenDayForecast data={data} />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="weather-container">
      <section className="weather-container-section">
        <input
          data-testid="city"
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
