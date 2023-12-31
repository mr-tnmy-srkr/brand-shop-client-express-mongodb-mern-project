// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const all = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:all.VITE_APIKEY,
  authDomain:all.VITE_AUTHDOMAIN,
  projectId:all.VITE_PROJECTID,
  storageBucket:all.VITE_STORAGEBUCKET,
  messagingSenderId:all.VITE_MESSAGINGSENDERID,
  appId:all.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);