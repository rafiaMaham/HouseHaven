import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "house-haven-50d75.firebaseapp.com",
  projectId: "house-haven-50d75",
  storageBucket: "house-haven-50d75.appspot.com",
  messagingSenderId: "511024449881",
  appId: "1:511024449881:web:2511364a1af554d41a2448",
};

export const app = initializeApp(firebaseConfig);
