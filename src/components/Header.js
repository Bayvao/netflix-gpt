import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import IconUser from "../utils/icons/IconUser";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const [isOpen, setIsOpen] = useState(false);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
				navigate("/error");
			});
	};

	return (
		<div className="absolute place-items-center w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-44"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
			{user && (
				<div
					className="flex p-2"
					onMouseOver={() => setIsOpen((prev) => !prev)}
					onMouseOut={() => setIsOpen((prev) => !prev)}>
					<img
						className="w-12 h-12"
						alt="user-icon"
						src="https://occ-0-2461-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfQy06KCq87W959_ASfZ78T-34XjYXvXndSdD6n9DKjeKaMooe7LiYFm2kVFFtB_wH6sT4g_5TC1cDFHso1g86IUDq10.png?r=962"
					/>
					{isOpen && (
						<div className="absolute right-6 z-10 mt-4 w-48 top-16 origin-top-right bg-black py-2 mx-4 focus:outline-none">
							<div className="flex flex-col w-full justify-between hover:cursor-pointer divide-y">
								<button className=" text-white text-left px-3 my-2 text-sm ">
									<div className="flex">
										<IconUser name="Account" />
										<span className="mx-4 pb-1">
											{" "}
											Account{" "}
										</span>
									</div>
								</button>

								<button
									className="text-white py-4 text-center text-sm "
									onClick={handleSignOut}>
									Sign out of NetflixGPT
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
