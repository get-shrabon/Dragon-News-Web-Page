// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqnqzwS3orGS8rqllvogcPcuTagt49FPU",
  authDomain: "dragon-news-web-7b919.firebaseapp.com",
  projectId: "dragon-news-web-7b919",
  storageBucket: "dragon-news-web-7b919.appspot.com",
  messagingSenderId: "14630563952",
  appId: "1:14630563952:web:7e114b7b9f884ffb5304b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
