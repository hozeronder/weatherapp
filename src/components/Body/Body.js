import { useContext, useEffect, useState } from "react";
import CityContext from "../weatherapi/CityContext";

import Weatherdata from "../weatherdata/weatherdata";
import Forecast from "../weatherdata/forecast.js";

function Body() {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="cards">
          </div>
          <div className="cards"></div>
          <div className="cards">asdfasdf</div>
          <div className="cards">asdfasdf</div>
          <div className="cards">asdfasdf</div>
          <div className="cards">asdfasdf</div>
          <div className="cards">asdfasdf</div>
        </div>
      </div>
    </div>
  );
}

export default Body;
