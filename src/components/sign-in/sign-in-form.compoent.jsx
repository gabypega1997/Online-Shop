import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormInputs = () => {
        setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const respons = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            console.log(respons);
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-fount":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }

        resetFormInputs();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <form className="sign-in-container" onSubmit={handleSubmit}>
            <h2>I alredy have an account</h2>
            <span>Sign in with your email and password</span>
            <FormInput
                label="email"
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
            />
            <FormInput
                label="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={handleChange}
            />
            <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button
                    type="button"
                    onClick={signInWithGoogle}
                    buttonType="google"
                >
                    Google sign in
                </Button>{" "}
            </div>
        </form>
    );
};

export default SignInForm;
