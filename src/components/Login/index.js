import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import { auth } from "../../firebase";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    marginBottom: "10px",
    width: "100%",
  },
  btn: {
    padding: "8px",
    width: "100%",
  },
  btn_create: {
    padding: "8px",
    width: "50%",
    margin: "10px",
    backgroundColor: "green",
    color: "#fff",
    "&:hover": {
      backgroundColor: "lightGreen",
      color: "#333",
    },
  },
}));

const Login = ({ openSignUp }) => {
  const classes = useStyles();

  return (
    <>
      <div className="login_container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) errors.password = "Required";
            return errors;
          }}
          onSubmit={(values) => {
            auth
              .signInWithEmailAndPassword(values.email, values.password)
              .then(() => {
                alert("login successfull");
                return true;
              })
              .catch((error) => {
                alert(error.message);
                return false;
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                error={errors.email}
                className={classes.textField}
                name="email"
                id="email"
                type="email"
                placeholder="Email address or phone number"
                value={values.email}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                error={errors.password}
                className={classes.textField}
                name="password"
                id="Password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                variant="outlined"
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
        <p className="forgot">Forgotten Password?</p>
        <Button
          className={classes.btn_create}
          variant="contained"
          color="green"
          onClick={openSignUp}
        >
          Create New Account
        </Button>
      </div>

      <p className="create_page">
        <b> Create a Page </b>for a celebrity, band or business.
      </p>
    </>
  );
};

export default Login;
