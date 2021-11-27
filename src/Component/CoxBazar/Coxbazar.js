import "./CoxBazar.css";
import coximg from "../Img/Sajek.png";
import { useHistory } from "react-router";
import Shipment from "../Shipment/Shipment";
import data from "../../Data";

const Coxbazar = () => {
  const history = useHistory();

  //console.log(place);

  const handlecheckout = () => {
    history.push("/shipment");
  };

  //const handleClick = (place) => {};

  return (
    <div className="Cox">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>COX'S BAZAR</h2>
            <p>
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds.
            </p>
          </div>

          <div className="col-md-6">
            <form className="form-control">
              <label>Origin</label>
              <input type="text" placeholder="Dhaka" required />
              <label>Destination</label>
              <input type="text" placeholder="" required />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">From</span>
                    <input className="form-control" type="date" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">To</span>
                    <input className="form-control" type="date" required />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handlecheckout}>
                Start Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coxbazar;
