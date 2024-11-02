import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvqEWzBeRPKFZqiBy9Tdj2YQj9RQel0hw",
  authDomain: "ecologyenergestyc.firebaseapp.com",
  projectId: "ecologyenergestyc",
  storageBucket: "ecologyenergestyc.firebasestorage.app",
  messagingSenderId: "367942329961",
  appId: "1:367942329961:web:b7fd56e597f985ee1ea4f8",
  measurementId: "G-4R2BM0X99R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

