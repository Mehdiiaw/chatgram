import React from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';
//icon
import google from "../assets/google.svg";
//styles 
import styles from "../Styles/Login.module.css";
const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h3>Welcome to Chatgram!!</h3>
                <div
                 className={styles.button}
                 onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                 >
                    <img src={google} alt='google-icon' /> Sign in With Google
                </div>
            </div>
        </div>
    );
};

export default Login;