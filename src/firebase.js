
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnPIeQuORSrriK0TJ4rZg-cnyfbN0sX1E",
  authDomain: "react-auth-portal.firebaseapp.com",
  projectId: "react-auth-portal",
  storageBucket: "react-auth-portal.firebasestorage.app",
  messagingSenderId: "509721620869",
  appId: "1:509721620869:web:254c206246f69774b1d4ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
