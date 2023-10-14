import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [showCaptchaContent, setShowCaptchaContent] = useState(false);
	const [showSignIn, setShowSigIn] = useState(true);

	const handleShowCaptchaContent = () => {
		setShowCaptchaContent(!showCaptchaContent);
	};

	const toggleSignInForm = () => {
		setShowSigIn(!showSignIn);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="logo"
				/>
			</div>
			<form className="w-3/12 text-white absolute my-36 mx-auto right-0 left-0 p-12 bg-opacity-80 rounded-md bg-black">
				<h1 className="font-bold text-3xl py-4">
					{showSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{!showSignIn && (
					<input
						className="p-4 h-14 my-3 w-full rounded-md bg-gray-700"
						type="text"
						placeholder="Full Name"
					/>
				)}
				<input
					className="p-4 h-14 my-3 w-full rounded-md bg-gray-700"
					type="text"
					placeholder="Email Address"
				/>
				<input
					className="p-4 my-3 h-14 w-full rounded-md bg-gray-700"
					type="password"
					placeholder="Password"
				/>
				<button className="p-4 my-10 w-full rounded-md bg-red-700">
					{showSignIn ? "Sign In" : "Sign Up"}
				</button>

				{showSignIn ? (
					<p className="text-xl my-4">
						<span className="text-gray-400">New to Netflix? </span>
						<span
							className="hover:underline hover:cursor-pointer"
							onClick={toggleSignInForm}>
							Sign Up now
						</span>
					</p>
				) : (
					<p className="text-xl my-4">
						<span className="text-gray-400">
							Already Registered{" "}
						</span>
						<span
							className="hover:underline hover:cursor-pointer"
							onClick={toggleSignInForm}>
							Sign In now
						</span>
					</p>
				)}

				<p className="my-4">
					<span className="text-gray-400">
						This page is protected by Google reCAPTCHA to ensure
						you're not a bot.
					</span>
					<span
						className="text-blue-600 hover:underline hover:cursor-pointer"
						onClick={handleShowCaptchaContent}>
						{" "}
						Learn more.
					</span>
				</p>
				{showCaptchaContent && (
					<p className="my-4">
						<span className="text-gray-400">
							The information collected by Google reCAPTCHA is
							subject to the Google
							<span className="text-blue-600 hover:underline hover:cursor-pointer">
								{" "}
								Privacy Policy
							</span>{" "}
							and
							<span className="text-blue-600 hover:underline hover:cursor-pointer">
								{" "}
								Terms of Service
							</span>
							, and is used for providing, maintaining, and
							improving the reCAPTCHA service and for general
							security purposes (it is not used for personalised
							advertising by Google).
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default Login;
