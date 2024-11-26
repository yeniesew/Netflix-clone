import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch movies from the API
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies: ", error);
      }
    })();
  }, [fetchUrl]);

  // Handle the trailer URL
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close the trailer if already open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log("Error fetching trailer: ", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto play the video
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            key={movie.id} // Use unique movie id instead of index
            onClick={() => handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie?.name || movie?.title || "Movie Poster"} // Fallback alt text
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {/* Conditionally render the YouTube trailer if trailerUrl is set */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
