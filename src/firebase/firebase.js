import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg3n67vWGBYHb-01F3rJhiMnv2JDTOqjE",
  authDomain: "insta-clone-yt-e902c.firebaseapp.com",
  projectId: "insta-clone-yt-e902c",
  storageBucket: "insta-clone-yt-e902c.appspot.com",
  messagingSenderId: "162729507895",
  appId: "1:162729507895:web:9fe9cc5ab76867396a93b2",
  measurementId: "G-417CLVC8LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
