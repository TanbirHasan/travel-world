import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./News.css";

const News = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=136f1355a3e4435a8122b3a13d7f1975"
    )
      .then((res) => res.json())
      .then((data) => setnews(data.articles));
  }, []);

  return (
    <div className="News">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {news.map((news) => (
              <NewsItem
                style={{ border: "1px solid black" }}
                news={news}
              ></NewsItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
