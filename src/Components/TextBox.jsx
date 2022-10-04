import { useField } from 'formik';
import React from 'react'

const TextBox = ({ ...props }) => {
    const [field, meta] = useField(props.name);
    return (
        <input className="form-control" {...props}></input>
    )
}

export default TextBox