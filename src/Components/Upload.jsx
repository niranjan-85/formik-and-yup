
import { Formik, useField } from 'formik';
import React, { useState, useRef } from 'react'
import TextBox from './TextBox'

const Upload = ({ formik, placeholder, ...props }) => {
    const fileInput = useRef(null);
    const [uploadedFile, setuploadedFile] = useState(placeholder)

    const FileHandler = (event) => {
        formik.setFieldValue("file", event.target.files[0]);
        setuploadedFile(event.target.files[0].name)
    }

    return (
        <>
            <div className="d-flex">
                <TextBox type="text" placeholder={uploadedFile} name={props.name} />
                <button
                    className='btn btn-primary'
                    onClick={(event) => {
                        event.preventDefault()
                        fileInput.current.click()
                    }}
                >
                    Upload
                </button>
                <input
                    name={props.name}
                    {...props}
                    ref={fileInput}
                    style={{ display: 'none' }}
                    onChange={FileHandler}
                />
            </div>


        </>
    )
}

export default Upload