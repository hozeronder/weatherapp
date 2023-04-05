import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { round } from "mathjs";

const Forecast = (props) => {
  const { forecast } = props;
  if (!forecast) {
    return <p>Receiving Data...</p>;
  }

  function timeStamp(savedTime) {
    const formatedDate = new Date(savedTime).toLocaleString("tr-TR", {
      month: "long",
      day: "2-digit",
    });
    return formatedDate;
  }

  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="cards text">
            <div>{timeStamp(forecast.list[0].dt_txt)}</div>
            <div>{forecast.list[0].weather[0].description.toUpperCase()}</div>
            <div>{round(forecast.list[0].main.temp_min)}°C</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon.slice(
                " ",
                2
              )}d@2x.png`}
            ></img>
          </div>
          <div className="cards text">
            <div>{timeStamp(forecast.list[8].dt_txt)}</div>
            <div>{forecast.list[8].weather[0].description.toUpperCase()}</div>
            <div>{round(forecast.list[8].main.temp)}°C</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon.slice(
                " ",
                2
              )}d@2x.png`}
            ></img>
          </div>
          <div className="cards text">
            <div>{timeStamp(forecast.list[16].dt_txt)}</div>
            <div>{forecast.list[16].weather[0].description.toUpperCase()}</div>
            <div>{round(forecast.list[16].main.temp)}°C</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon.slice(
                " ",
                2
              )}d@2x.png`}
            ></img>
          </div>
          <div className="cards text">
            <div>{timeStamp(forecast.list[24].dt_txt)}</div>
            <div>{forecast.list[24].weather[0].description.toUpperCase()}</div>
            <div>{round(forecast.list[24].main.temp)}°C</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon.slice(
                " ",
                2
              )}d@2x.png`}
            ></img>
          </div>
          <div className="cards text">
            <div>{timeStamp(forecast.list[32].dt_txt)}</div>
            <div>{forecast.list[32].weather[0].description.toUpperCase()}</div>
            <div>{round(forecast.list[32].main.temp)}°C</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon.slice(
                " ",
                2
              )}d@2x.png`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
