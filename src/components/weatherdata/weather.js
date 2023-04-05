import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { round } from "mathjs";

const Weather = (props) => {
  const { weather } = props;
  if (!weather) {
    return <p>Receiving Location...</p>;
  }
  return (
    <div>
      <div className="row">{weather.name}</div>
      <div className="row">{round(weather.main.temp)}°C </div>
      <div className="row" style={{ fontSize: "3vh" }}>
        {weather.weather[0].description.toUpperCase()}
      </div>
    </div>
  );
};

export default Weather;
