import React from "react";
import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="max-w-sm md:max-w-lg overflow-hidden">
      <div className="w-36 md:w-60 md:h-96 pr-2 hover:object-cover hover:scale-150 hover:transition hover:duration-500 hover:cursor-pointer">
        <img alt="img" src={TMDB_IMG_CDN_URL + posterPath} />
      </div>
    </div>
  );
};

export default MovieCard;
