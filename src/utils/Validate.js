export const checkValidData = (showSignIn, name, email, password) => {
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (
		!showSignIn &&
		(name === null || name === undefined || name.trim().length === 0)
	)
		return "Please enter a valid name.";
	if (!isEmailValid) return "Please enter a valid email address.";
	if (!isPasswordValid) return "Password is not valid";

	return null;
};
