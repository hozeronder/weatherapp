import React, { useContext } from "react";
import "../style.css";
import CityContext from "../weatherapi/CityContext";
import citydata from "../citydata.json";

// Get City From
function Header() {
  const { city, setCity } = useContext(CityContext);
  const cityOptions = citydata.map((res) => (
    <option key={res.id}>{res.name}</option>
  ));

  return (
    <div className="header">
      <div>
        <select className="dropdown" onChange={(e) => setCity(e.target.value)}>
        <option value="" disabled selected hidden>Select City</option>
        {cityOptions}
        </select>
      </div>
    </div>
  );
}

export default Header;
