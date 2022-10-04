import React from 'react'

const Dropdown = (props) => {
    return (
        <div className="form-group">
            <select className="form-select" id="exampleFormControlSelect1" defaultValue={'DEFAULT'} {...props}>
                <option value="DEFAULT" disabled>{props.placeholder}</option>
                <option value="XYZ">XYZ</option>
            </select>
        </div>
    )
}

export default Dropdown