import "./weather-report.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

export const WeatherReport = (props: any) => {
  const location = props?.data?.location?.name;
  const current = props?.data?.current;
  const condition = current?.condition;
  return (
    <div className="weather-report-container">
      <section>
        <div className="weather-report-temp">
          <div>{current?.temp_c} &deg;</div>
          <img src={condition?.icon} alt={condition?.text} />
        </div>
        <div>{current?.last_updated}</div>
        <div className="weather-report-location">{location} <FaMapMarkerAlt size={20} /></div>
      </section>
    </div>
  );
};
