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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // is user data not exists
    //create/set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createAt });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;

    // if user data exists

    //return userDocRef
};
