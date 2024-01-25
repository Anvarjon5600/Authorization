import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwT1XbEqJeSMhcqs5amu_IWnsw_DfBswM",
  authDomain: "fir-auth-cff07.firebaseapp.com",
  projectId: "fir-auth-cff07",
  storageBucket: "fir-auth-cff07.appspot.com",
  messagingSenderId: "376379833965",
  appId: "1:376379833965:web:bff6248b2778cd4869c964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

//=> TO implement We need to create database from firbase firestore and auth from firebase auth. 