import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDOKAsluN4o77zFtCckWnv1cJlU5P4b988",
	authDomain: "esd-telehealth.firebaseapp.com",
	databaseURL:
		"https://esd-telehealth-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "esd-telehealth",
	storageBucket: "esd-telehealth.appspot.com",
	messagingSenderId: "721198297538",
	appId: "1:721198297538:web:ccf32bbb96763bf28fa65b",
	measurementId: "G-FGZNQH31XZ",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
