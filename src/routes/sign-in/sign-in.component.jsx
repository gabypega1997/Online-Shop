import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>SignIn with Goohle Popup</button>
        </div>
    );
};

export default SignIn;
