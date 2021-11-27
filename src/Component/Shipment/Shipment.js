import React, { useEffect, useState } from "react";
import "./Shipment.css";
import data from "../../Data";
import ShipmentRoom from "../ShipmentRoom/ShipmentRoom";

const Shipment = (props) => {
  console.log(props.jaiga);
  const [place, setplace] = useState([]);
  const [finalplace, setfinalplace] = useState([]);

  useEffect(() => {
    setplace(data);
  }, []);

  const handleClickCox = (place) => {
    const clickedplace = place.filter((pd) => pd.name === "Cox-bazar");
    setfinalplace(clickedplace);

    console.log("button clicked");
  };
  const handleClickShun = (place) => {
    const clickedplace = place.filter((pd) => pd.name === "Shundorbon");
    setfinalplace(clickedplace);
  };

  const handleClickSri = (place) => {
    const clickedplace = place.filter((pd) => pd.name === "Srimongol");
    setfinalplace(clickedplace);
  };
  return (
    <div className="Shipment">
      <div className="button">
        <button
          className="btn btn-info"
          onClick={() => {
            handleClickCox(place);
          }}
        >
          Click here for Cox Hotel Room
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            handleClickSri(place);
          }}
        >
          Click here for Srimongol Hotel Room
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            handleClickShun(place);
          }}
        >
          Click here for ShundorBon Hotel Room
        </button>
      </div>

      {finalplace.map((place) => (
        <ShipmentRoom bookroom={place}></ShipmentRoom>
      ))}
    </div>
  );
};

export default Shipment;
