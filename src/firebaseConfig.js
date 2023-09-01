// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6UspbysrOo-czdLpl1GHNCRcVxqq8EE4",
    authDomain: "linked-inclone-2efc2.firebaseapp.com",
    projectId: "linked-inclone-2efc2",
    storageBucket: "linked-inclone-2efc2.appspot.com",
    messagingSenderId: "261426885597",
    appId: "1:261426885597:web:44d4999405d64d6c527c34",
    measurementId: "G-5Q4B8S3THW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
