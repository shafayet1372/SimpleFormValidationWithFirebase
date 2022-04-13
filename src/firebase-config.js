// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuROxTQbK32l2z62JxU9vXral4YMp6JYA",
    authDomain: "react-c2930.firebaseapp.com",
    databaseURL: "https://react-c2930-default-rtdb.firebaseio.com",
    projectId: "react-c2930",
    storageBucket: "react-c2930.appspot.com",
    messagingSenderId: "128505380115",
    appId: "1:128505380115:web:7d5cc9e6be73557c87eee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = getFirestore(app)

export default db