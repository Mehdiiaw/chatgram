import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDoyK5Q94cqCQ2FA9tePqkvWPK9d-Bw_TE",
    authDomain: "chatgram-e1eb9.firebaseapp.com",
    projectId: "chatgram-e1eb9",
    storageBucket: "chatgram-e1eb9.appspot.com",
    messagingSenderId: "401116348165",
    appId: "1:401116348165:web:f5dddf704698bd50c6c16c"
}).auth();