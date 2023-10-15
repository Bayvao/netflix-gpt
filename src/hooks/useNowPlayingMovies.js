import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
		const json = await data.json();

		const nowPlayingMovies = {
			type: "Now Playing Movies",
			...json,
		};

		dispatch(addNowPlayingMovies(nowPlayingMovies));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;