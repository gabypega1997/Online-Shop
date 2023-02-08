import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBofoUWUloQMCujw6NKguNpa5Tjxa7eNI",
    authDomain: "crwn-clothing-acb10.firebaseapp.com",
    projectId: "crwn-clothing-acb10",
    storageBucket: "crwn-clothing-acb10.appspot.com",
    messagingSenderId: "104542688221",
    appId: "1:104542688221:web:0b09bbbe2e35a2aa78dc34",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);
};
