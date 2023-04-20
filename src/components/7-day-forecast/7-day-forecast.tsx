import "./7-day-forecast.css";

export const SevenDayForecast = (props: any) => {
  const forecast = props?.data?.forecast?.forecastday || [];

  return (
    <div className="seven-forecast-container">
      <h2 className="seven-forecast-header">7-day Forecast</h2>
      <section className="seven-forecast-section">
        {forecast.map((cast: any, index: number) => {
          const day = cast?.day;
          return (
            <div className="seven-forecast-day" key={index}>
              <div>{cast?.date}</div>
              <img src={day?.condition?.icon} alt={day?.condition?.text} />
              <div>
                {day?.maxtemp_c} / {day?.mintemp_c}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
