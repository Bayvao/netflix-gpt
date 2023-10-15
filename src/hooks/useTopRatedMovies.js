import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
		const json = await data.json();

		const topRatedMovies = {
			type: "Top Rated Movies",
			...json,
		};

		dispatch(addTopRatedMovies(topRatedMovies));
	};

	useEffect(() => {
		getTopRatedMovies();
	}, []);
};

export default useTopRatedMovies;
