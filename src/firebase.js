import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-trSxKWkvHZNTBy1mLSANcKYbbGDjTXA",
    authDomain: "twitter-clone-ecf99.firebaseapp.com",
    projectId: "twitter-clone-ecf99",
    storageBucket: "twitter-clone-ecf99.appspot.com",
    messagingSenderId: "295865266669",
    appId: "1:295865266669:web:d35300843fadf32fdeb7e4",
    measurementId: "G-YZB3TMQDJK"
  });

const db = firebaseApp.firestore();

export default db;