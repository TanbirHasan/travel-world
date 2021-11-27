import React from "react";
import cox from "../Img/Sajek.png";
import sundorban from "../Img/sundorbon.png";
import srimongol from "../Img/Sreemongol.png";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="MainSection">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1>COX'S BAZAR</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    vero eveniet vel itaque quasi? Ullam, harum magni nemo sint,
                    quis cum veniam impedit explicabo repellendus, deleniti
                    consequatur corrupti voluptas! Accusantium!
                  </p>
                </div>
                <div className="carousel-item">
                  <h1>ShundorBon</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    vero eveniet vel itaque quasi? Ullam, harum magni nemo sint,
                    quis cum veniam impedit explicabo repellendus, deleniti
                    consequatur corrupti voluptas! Accusantium!
                  </p>
                </div>
                <div className="carousel-item">
                  <h1>Srimongol</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    vero eveniet vel itaque quasi? Ullam, harum magni nemo sint,
                    quis cum veniam impedit explicabo repellendus, deleniti
                    consequatur corrupti voluptas! Accusantium!
                  </p>
                </div>
              </div>
            </div>

            <button>Booking</button>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h3>COX'S BAZAR</h3>
                <a href="/cox-bazar">
                  <img src={cox} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4">
                <h3>SUNDORBON</h3>
                <a href="/sundorbon">
                  <img src={sundorban} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4">
                <h3>SRIMONGOL</h3>
                <a href="/srimongol">
                  <img src={srimongol} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
