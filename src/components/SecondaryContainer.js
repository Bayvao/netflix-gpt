import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		movies && (
			<div className="bg-black bg-opacity-95">
				<div className="-mt-52 pl-6 relative z-20">
					<MovieList
						title={movies?.nowPlayingMovies?.type}
						movies={movies?.nowPlayingMovies?.results}
					/>

					<MovieList
						title={movies?.popularMovies?.type}
						movies={movies?.popularMovies?.results}
					/>

					<MovieList
						title={movies?.topRatedMovies?.type}
						movies={movies?.topRatedMovies?.results}
					/>

					<MovieList
						title={movies?.upcomingMovies?.type}
						movies={movies?.upcomingMovies?.results}
					/>
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
