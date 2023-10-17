import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { gptRecommendedMovieName, gptRecommendedMovieResults } = useSelector(
    (store) => store.gpt
  );

  if (!gptRecommendedMovieName) return null;

  return (
    <div className="w-screen px-6 py-6 mt-6 bg-black bg-opacity-90 text-white">
      <div>
        {gptRecommendedMovieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptRecommendedMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
