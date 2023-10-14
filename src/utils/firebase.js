// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCD-R6BqmaLhxxcWXsaVx5LCuPaue1U22c",
	authDomain: "netflix-gpt-dde02.firebaseapp.com",
	projectId: "netflix-gpt-dde02",
	storageBucket: "netflix-gpt-dde02.appspot.com",
	messagingSenderId: "133187264799",
	appId: "1:133187264799:web:13959718b05e7a3448d02a",
	measurementId: "G-FR6XVR9SVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
