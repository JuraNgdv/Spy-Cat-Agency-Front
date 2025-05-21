import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import classNames from "classnames";

interface CustomInputProps extends Omit<TextFieldProps, 'name'> {
    label: string;
    name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
                                                     label,
                                                     name,
                                                     ...props
                                                 }) => {
    const [field, meta] = useField(name);
    const isError = Boolean(meta.touched && meta.error);

    return (
        <div>
            <TextField
                {...field}
                {...props}
                name={name}
                label={label}
                error={isError}
                helperText={isError ? meta.error : ''}
                fullWidth
            />
        </div>
    );
};

export default CustomInput;
