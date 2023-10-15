import { useDispatch } from "react-redux";
import {
	API_OPTIONS,
	POPULAR_MOVIES_URL,
	UPCOMING_MOVIES_URL,
} from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();

	const getUpcomingMovies = async () => {
		const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
		const json = await data.json();

		const upcomingMovies = {
			type: "Upcoming Movies",
			...json,
		};

		dispatch(addUpcomingMovies(upcomingMovies));
	};

	useEffect(() => {
		getUpcomingMovies();
	}, []);
};

export default useUpcomingMovies;
