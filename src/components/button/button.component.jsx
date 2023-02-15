import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
    oneChar:"one-charcter"
};

// add another button classes for a one char button

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
