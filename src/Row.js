import React, { useState, useEffect } from "react";
import axios from "./Axios.js";
import "./Row.css";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchDta() {
      // console.log("fetchUrl is " + fetchUrl);
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchDta();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log("url = " + url);
          // const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams)

          // setTrailerUrl(urlParams.get("v"));
          setTrailerUrl(url);
        }
      );
    }
  };
  return (
    <div className="row">
      {console.log("return")}
      <h1>{title}</h1>
      <div className="row__posters">
        {Movies?.map((m) => {
          return (
            <img
              onClick={() => handleClick(m)}
              // key={`${m.name}`}
              alt={m.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? m.poster_path : m.backdrop_path}`}
            />
          );
        })}
      </div>
      {/* { <YouTube videoId={trailerUrl} opts={opts} />} */}

      <div style={{ padding: "40px" }}>
        {trailerUrl && <ReactPlayer url={trailerUrl} controls={true} />}
      </div>
    </div>
  );
};

export default Row;
