import React from "react";
import gmap from "../Img/gmap.jpg";
import "./ShipmentRoom.css";
import img1 from "../Img/Rectangle 26.png";
import img2 from "../Img/Rectangle 27.png";
import img3 from "../Img/Rectangle 28.png";

const ShipmentRoom = (props) => {
  const { roomimg, roomimg2, roomimg3 } = props.bookroom;
  console.log(props.bookroom);
  return (
    <div className="ShipmentRoom">
      <div className="container">
        <div className="inner-item">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4>
                    <a href="#">Light bright airy stylish ppt</a>
                  </h4>
                  <p>4 guests , 2 bedrooms , 2 bathrooms</p>
                  <p>wifi , air conditioning, smart tv</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4>
                    <a href="#">Aparment in Los panaroma</a>
                  </h4>
                  <p>4 guests , 2 bedrooms , 2 bathrooms</p>
                  <p>wifi , air conditioning, smart tv</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4>
                    <a href="#">Ar lounge & pool</a>
                  </h4>
                  <p>4 guests , 2 bedrooms , 2 bathrooms</p>
                  <p>wifi , air conditioning, smart tv</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={gmap} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentRoom;
