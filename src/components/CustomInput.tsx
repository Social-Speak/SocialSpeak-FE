import { Input, TextField } from "@mui/material";
import { InputHTMLAttributes } from "react";

interface InputProps {
    id?: string;
    label?: string;
    name?: string
    placeholder?: string;
    type?: string;
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    size?: "small" | "medium";
}

const CustomInput = ({ id, label, name, type, placeholder, value, onChange, size, ...props }: InputProps) => {
    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            size={size}
            onChange={onChange}
        />
    );
};

export default CustomInput;