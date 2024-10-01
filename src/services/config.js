
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marolio-60035.firebaseapp.com",
  projectId: "marolio-60035",
  storageBucket: "marolio-60035.appspot.com",
  messagingSenderId: "801018924720",
  appId: "1:801018924720:web:ff71c178147002dad3f575"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


