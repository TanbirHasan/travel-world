import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  const { title, urlToImage, url, description } = props.news;
  console.log(props.news);
  return (
    <div className="News-item">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={urlToImage} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <div className="news">
              <h4>{title}</h4>
              <p>{description}</p>
              <a href={url}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
