import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Button } from "react-bootstrap";

function LoginPage() {
  let navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const visiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
     
      }}
      validationSchema={Yup.object({
        
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("No password provided")
          .min(8, "Password is too short - should be 8 chars minimum."),
      
      })}
      onSubmit={(values) => {
        navigate("/");
        console.log(values);
      }}
    >
      <Form className="regis_form">
  
        <div className="em_regis regis">
          <label htmlFor="email">Email Address:</label>
          <Field name="email" type="email" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="email" />
        </div>
        <div className="up_regis regis">
          <label htmlFor="password">Password:</label>
          <div className="gg">
          <Field name="password" type={passwordShown ? "text" : "password"} />
     
          
          </div>
          
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="password" />
        </div>
     
        <Button variant="primary" size="lg" active type="submit" >
          Login
        </Button>
      
      </Form>
    </Formik>
  );
}
export default LoginPage;