import './today-forecast.css';

export const TodayForecast = (props: any) => {
  const forecast = props?.data?.forecast?.forecastday
    ? props?.data?.forecast?.forecastday[0]
    : [];
  const hours = forecast?.hour || [];
  return (
    <div className="today-forecast-container">
      <h2 className="today-forecast-header">Today's Forecast</h2>
      <section className="today-forecast-section">
        {hours.map((hour: any, index: number) => {
          return (
            <div key={index}>
              <div>{hour?.time?.split(" ")[1]}</div>
              <img src={hour?.condition?.icon} alt={hour?.condition?.text} />
              <div>{hour?.temp_c}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
