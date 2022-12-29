import React, { useState, useEffect } from "react";
import axios from "./Axios.js";
import requests from "./Request.js";
import "./Row.css";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const Result = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        Result?.data.results[
          Math.floor(Math.random() * Result.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    // return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    if (str != undefined && str.length > n) return str.substr(0, n - 1) + "...";
    return str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          Title is : {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Description: {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
