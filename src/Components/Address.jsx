import React from "react";
import { Formik, Form } from "formik";
import TextBox from "./TextBox";
import Dropdown from "./Dropdown";
import Upload from "./Upload";
import {detailSchema} from '../Validation'

const Address = () => {
  return (
    <>
      <Formik
        validationSchema={detailSchema}
        enableReinitialize
        initialValues={{
          pincode: "",
          state: "",
          bldgNumber: "",
          bldgName: "",
          street: "",
          docNumber: "",
          dateOFIssue: "",
          file: null,
          crfFile: null,
        }}
        onSubmit={(value) => {
            //success
            console.log(value);
        }}
      >
        {(formik) => (
          <div className="new-section ">
            {console.log(formik.errors)}





            <div className="container mt-5">
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="number"
                      placeholder="Pincode *"
                      disabled = {true}
                    />

                  </div>
                  <div className="col">
                    <Dropdown
                      type="text"
                      placeholder="Country"
                      disabled = {true}
                    />
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="State *"
                      disabled = {true}

                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Dropdown
                      placeholder="District"
                      disabled = {true}
                    />
                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="City"
                      disabled = {true}
                    />
                  </div>
                  <div className="col">
                    <TextBox
                      placeholder="Area/Locality"
                      disabled = {true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Building Number *"
                      disabled = {true}
                    />

                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Building Name *"
                      disabled = {true}
                    />

                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Landmark"
                      disabled = {true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="State *"
                      disabled = {true}

                    />

                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="Circle"
                      disabled = {true}
                    />
                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="Jio Center"
                      name="jioCenter"
                      disabled = {true}
                    />
                  </div>
                </div>
              </div>















            <Form onSubmit={formik.handleSubmit}>
              <div className="container mt-5">
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="number"
                      placeholder="Pincode *"
                      name="pincode"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.pincode && formik.touched.pincode ? <p className="form-error">{formik.errors.pincode}</p> : ""}
                  </div>
                  <div className="col">
                    <Dropdown
                      type="text"
                      placeholder="Country"
                      name="country"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="State *"
                      name="state"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Dropdown
                      placeholder="District"
                      name="district"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="City"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <TextBox
                      placeholder="Area/Locality"
                      name="area"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Building Number *"
                      name="bldgNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.bldgNumber && formik.touched.bldgNumber ? <p className="form-error">{formik.errors.bldgNumber}</p> : ""}
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Building Name *"
                      name="bldgName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.bldgName && formik.touched.bldgName ? <p className="form-error">{formik.errors.bldgName}</p> : ""}
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Landmark"
                      name="landmark"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="State *"
                      name="street"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.street && formik.touched.street ? <p className="form-error">{formik.errors.street}</p> : ""}
                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="Circle"
                      name="circle"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <Dropdown
                      placeholder="Jio Center"
                      name="jioCenter"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="container mt-5">
                <div className="row">
                  <div className="col">
                    <Dropdown
                      placeholder="Document Type"
                      name="docType"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Document Number *"
                      name="docNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.docNumber && formik.touched.docNumber ? <p className="form-error">{formik.errors.docNumber}</p> : ""}
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Issuing Authority"
                      name="authority"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextBox
                      type="date"
                      placeholder="Date of Issue *"
                      name="dateOfIssue"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.dateOFIssue && formik.touched.dateOFIssue ? <p className="form-error">{formik.errors.dateOFIssue}</p> : ""}
                  </div>
                  <div className="col">
                    <TextBox
                      type="text"
                      placeholder="Place of Issue"
                      name="placeOfIssue"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col">
                    <Upload
                      type="file"
                      placeholder="Upload File ..."
                      name="poaFile"
                      formik={formik}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.file ? <p className="form-error">{formik.errors.file}</p> : ""}
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Upload
                      type="file"
                      placeholder="Upload CRF File"
                      name="crfFile"
                      formik={formik}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.crfFile ? <p className="form-error">{formik.errors.crfFile}</p> : ""}
                  </div>
                </div>
              </div>

              <div className="container text-center mt-5">
                <button className="btn btn-primary " type="submit">Submit</button>
                <button className="btn btn-primary ms-5" type="reset">Reset</button>
              </div>
              
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Address;
