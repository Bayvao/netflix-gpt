import React from "react";
import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
	return (
		<div className="w-48 pr-4 relative">
			<img alt="img" src={TMDB_IMG_CDN_URL + posterPath} />
		</div>
	);
};

export default MovieCard;
