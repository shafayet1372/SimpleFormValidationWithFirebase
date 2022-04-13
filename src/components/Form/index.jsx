import React, { useEffect } from "react";
import FormController from "./FormController";
import { useState } from "react";
import db from "../../firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmedPassword: "",
};
export default function Index() {
  let [values, setValues] = useState(initialValues);
  let [errors, setErrors] = useState(null);
  let [hideSpinner, setSpinner] = useState(true);
  let [agreement, setAgreement] = useState(false);
  let collections = collection(db, "signupform");
  let changeHandler = (e) => {
    setValues((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  let addData = async () => {
    let { name, email, password } = values;

    try {
      await addDoc(collections, { username: name, password, email });
      toast("successfully signedup !", {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "success",
      });
      setSpinner(true);
      setErrors(null);
      setValues(initialValues);
      setAgreement(false);
    } catch (e) {
      alert();
    }
  };
  let errorsHandle = () => {
    let { name, email, password, confirmedPassword } = values;
    let errors = {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
    if (!name) {
      errors.name = "name is required";
    }
    if (!email) {
      errors.email = "email is required";
    }
    if (!password) {
      errors.password = "password is required";
    } else if (!(password.length >= 8 && password.length < 16)) {
      errors.password = "password must have 8-16 characters long";
    }
    if (password !== confirmedPassword || !confirmedPassword) {
      errors.confirmedPassword = "please confirm password";
    }

    return errors;
  };

  let agreementHandler = (e) => {
    setAgreement((p) => e.target.checked);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    let errors = errorsHandle();

    if (Object.values(errors).some((x) => x)) {
      setErrors(errors);
    } else {
      setSpinner(false);
      addData();
    }
  };
  return (
    <FormController
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      values={values}
      hideSpinner={hideSpinner}
      errors={errors}
      agreementHandler={agreementHandler}
      isAgree={agreement}
    />
  );
}
