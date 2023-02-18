import "./form-input.styles.jsx";
import { FormInputContainer, FormInputLabel, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInputContainer {...otherProps} />

            {label && (
                // <FormInputLabel
                //     // className={`${
                //     //     otherProps.value.length === 0 ? "schrink" : ""
                //     // } form-input-label`}
                // >
                //     {label}
                // </FormInputLabel>
                {otherProps.value.length }
            )}
        </Group>
    );
};

export default FormInput;
