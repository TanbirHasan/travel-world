import React from "react";
import { useHistory } from "react-router";
import "./Sundorbon.css";


const Sundorbon = () => {
  const history = useHistory();

  const handlecheckout = () => {
    history.push("/shipment");
  };
  return (
    <div className="Sundorbon">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Sundorbon</h2>
            <p>
              Sundarbans is a mangrove area in the delta formed by the
              confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay
              of Bengal. It spans from the Hooghly River in India's state of
              West Bengal to the Baleswar River in Bangladesh's division of
              Khulna.
            </p>
          </div>

          <div className="col-md-6">
            <form>
              <label>Origin</label>
              <input type="text" placeholder="" />
              <label>Destination</label>
              <input type="text" placeholder="" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <span class="form-label">From</span>
                    <input class="form-control" type="date" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span class="form-label">To</span>
                    <input class="form-control" type="date" required />
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

export default Sundorbon;
