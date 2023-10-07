// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeKm1LI9XhWVfXZLBD0cwbkKXhUa2X6Rc",
  authDomain: "news-auth-web.firebaseapp.com",
  projectId: "news-auth-web",
  storageBucket: "news-auth-web.appspot.com",
  messagingSenderId: "14294633001",
  appId: "1:14294633001:web:4574a5a19468aa27f76a38"
};


const app = initializeApp(firebaseConfig);
export default app;