import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const movieSection = Object.keys(movies);

  return (
    movies && (
      <div className="bg-black bg-opacity-95 w-screen">
        <div className="-mt-40 pl-6 relative z-20">
          {movieSection?.map((movie, i) => (
            <MovieList
              key={i}
              title={movies?.[movie]?.type}
              movies={movies?.[movie]?.results}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
