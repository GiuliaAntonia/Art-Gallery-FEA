
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCm0S1TZ5_Em8JQq69K8Qd9beMMcsEWi2U",
  authDomain: "react-auth-app-28415.firebaseapp.com",
  projectId: "react-auth-app-28415",
  storageBucket: "react-auth-app-28415.appspot.com",
  messagingSenderId: "757710304204",
  appId: "1:757710304204:web:f2cfc192f6973050af6369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);