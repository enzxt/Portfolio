import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbeopvNklyq2Qr74xGH7jnaYu7E744jvw",
  authDomain: "portfolio-6f20f.firebaseapp.com",
  projectId: "portfolio-6f20f",
  storageBucket: "portfolio-6f20f.appspot.com",
  messagingSenderId: "1065929283946",
  appId: "1:1065929283946:web:e4ae968c1b4ba628642d13"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore