import React from "react";
import { useHistory } from "react-router";
import "./Srimongol.css";

const Srimongol = () => {
  const history = useHistory();

  const handlecheckout = () => {
    history.push("/shipment");
  };
  return (
    <div className="Srimongol">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Srimongol</h2>
            <p>
              Sreemangal is an upazila of Moulvibazar District[1] in the Sylhet
              Division of Bangladesh. It is located at the southwest of the
              district, and borders the Habiganj District to the west and the
              Indian state of Tripura to the south. Sreemangal is often referred
              to as the 'tea capital' of Bangladesh, and is most famous for its
              tea fields. Other than tea, the rubber, pineapple, wood, betel,
              and lemon industries also exist in the upazila
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

export default Srimongol;
