import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

//
const News = (props) => {
  const { cat } = useParams();
  console.log(cat);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title =
      "NewsApp - " +
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1);
    updateNews();
  }, []);


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2
        className="text-center"
        style={{
          paddingTop: "6rem",
          position: "relative",
          color: `${props.fcolor}`,
          backgroundColor: `${props.bcolor}`,
        }}
      >
        {" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Top
        Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div
          className="container"
          style={{
            color: `${props.fcolor}`,
            backgroundColor: `${props.bcolor}`,
          }}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3 my-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={
                      element.author ? element.author.slice(0, 20) : "Unknown"
                    }
                    date={element.publishedAt}
                    source={element.source.name}
                    fcolor={props.fcolor}
                    bcolor={props.bcolor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    
    </>
  );
};
News.defaultProps = {
  country: "in",
};
News.propTypes = {
  country: PropTypes.string,
};

export default News;
