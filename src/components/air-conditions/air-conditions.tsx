import './air-conditions.css';

export const AirConditions = (props: any) => {
  const current = props?.data?.current;
  return (
    <div className="air-conditions-container">
      <h2 className="air-conditions-header">Air Condtions</h2>
      <section className="air-conditions-grid">
        <div>
          <label>Real feel</label>
          <div>{current?.feelslike_c}&deg;</div>
        </div>
        <div>
          <label>Wind</label>
          <div>{current?.wind_kph} Km/h</div>
        </div>
        <div>
          <label>UV index</label>
          <div>{current?.uv}</div>
        </div>
        <div>
          <label>Chance of rain</label>
          <div>{current?.cloud} %</div>
        </div>
        <div>
          <label>Humidity</label>
          <div>{current?.humidity}</div>
        </div>
      </section>
    </div>
  );
};
