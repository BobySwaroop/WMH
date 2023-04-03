// Your web app's Firebase configuration
import { createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";


const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyArqvnO85h8Yn8p15BpdK12NbeIZ25YwpY",
  authDomain: "upload-4fe61.firebaseapp.com",
  projectId: "upload-4fe61",
  storageBucket: "upload-4fe61.appspot.com",
  messagingSenderId: "695823135747",
  appId: "1:695823135747:web:fdc03444ec3d94c63f8a36",
  measurementId: "G-X2WWP96J3S"
};

export const useFirebase = () => useContext(FirebaseContext);



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);


