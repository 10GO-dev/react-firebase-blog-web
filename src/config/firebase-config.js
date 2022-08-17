// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


const app = initializeApp({
  apiKey: "AIzaSyCZ61S1FE75thj71x_nzZedsWqVfpia7do",
  authDomain: "wall-posting-app.firebaseapp.com",
  projectId: "wall-posting-app",
  storageBucket: "wall-posting-app.appspot.com",
  messagingSenderId: "1014983604194",
  appId: "1:1014983604194:web:f5f5f3ddbc90a6aa372bbb"
});

export const auth = getAuth(app)
export const db = getFirestore(app)
;
export default app