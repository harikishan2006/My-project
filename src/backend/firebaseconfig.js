import { initializeApp } from "firebase/app";

//! Authentication Services from Firebase 
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0RTbBcMl2sqkPZM2t25Y1V-w-WCQNy7s",
  authDomain: "music-application-35415.firebaseapp.com",
  projectId: "music-application-35415",
  storageBucket: "music-application-35415.firebasestorage.app",
  messagingSenderId: "918381150084",
  appId: "1:918381150084:web:5fbdcef023e492702127d1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;