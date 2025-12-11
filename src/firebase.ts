import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAF0DqA8EWq2kvWg2omdRMa5pZFISNIPdw",
    authDomain: "bella-donna-2f875.firebaseapp.com",
    projectId: "bella-donna-2f875",
    storageBucket: "bella-donna-2f875.firebasestorage.app",
    messagingSenderId: "253471574158",
    appId: "1:253471574158:web:fb5b0ff3347281e23ea1df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
