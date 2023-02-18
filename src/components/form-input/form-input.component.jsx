import "./form-input.styles.jsx";
import {
    FormInputContainer,
    FormLabel,
    Group,
    InputPassword,
    SchrinkLabel,
} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            {otherProps.type === "password" ? (
                <InputPassword {...otherProps} />
            ) : (
                <FormInputContainer {...otherProps} />
            )}
            {label &&
                (otherProps.value.length !== 0 ? (
                    <SchrinkLabel>{label}</SchrinkLabel>
                ) : (
                    <FormLabel>{label}</FormLabel>
                ))}
        </Group>
    );
};

export default FormInput;
