import React, { useEffect } from "react";
import "./signup.css";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";
import { Button } from "@material-ui/core";
import { Formik } from "formik";
import { auth } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: 210,
    },
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(1.5),
    },
    help: {
      width: "0.5em",
    },
  },
  button: {
    backgroundColor: "#00a400",
    color: "#fff",
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: "lightgreen",
      color: "#333",
    },
  },
}));

const Signup = ({ openSignUp }) => {
  const classes = useStyles();
  const curr_year = new Date().getUTCFullYear();
  const curr_month = new Date().getUTCMonth();
  const curr_date = new Date().getUTCDate();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const pronoun = [
    "Select Your pronoun",
    "She :'Wish her a happy birthday!'",
    "He :'Wish him a happy birthday!'",
    "They :'Wish them a happy birthday!'",
  ];
  let years = [];
  for (let i = 1905; i <= curr_year; i++) {
    years.push(i);
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="signup_contianer">
        <div className="signup">
          <div className="signup_header">
            <div>
              <h2>Sign Up</h2>
              <p>Its quick and easy</p>
            </div>
            <div>
              <CloseIcon onClick={openSignUp} />
            </div>
          </div>
          <div className="signup_form">
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                date: curr_date,
                month: curr_month,
                year: curr_year,
                gender: "",
                pronoun: "",
                optional: "",
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
                if (!values.first_name) errors.first_name = "Required";
                if (!values.last_name) errors.last_name = "Required";
                if (!values.password) errors.password = "Required";
                if (!values.date || !values.month || !values.year)
                  errors.dob = "Required";
                if (!values.gender) errors.gender = "Required";
                if (values.gender !== "Custom") values.pronoun = "";
                return errors;
              }}
              onSubmit={(values) => {
                console.log(values);
                auth
                  .createUserWithEmailAndPassword(values.email, values.password)
                  .then((authUser) => {
                    openSignUp();
                    return authUser.user.updateProfile({
                      displayName: values.first_name + values.last_name,
                    });
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
                /* and other goodies */
              }) => (
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="name">
                    <TextField
                      error={errors.first_name && touched.first_name}
                      id="first_name"
                      name="first_name"
                      type="text"
                      className="first_name text"
                      placeholder="First name"
                      variant="outlined"
                      value={values.first_name}
                      onChange={handleChange}
                    />
                    <TextField
                      error={errors.last_name && touched.last_name}
                      id="last_name"
                      name="last_name"
                      type="text"
                      className="last_name text"
                      placeholder="Surname"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.last_name}
                    />
                  </div>
                  <TextField
                    style={{ width: "99%" }}
                    error={errors.email && touched.email}
                    name="email"
                    id="email"
                    type="email"
                    className="email text"
                    placeholder="Mobile number or email address"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <TextField
                    style={{ width: "99%" }}
                    error={errors.password && touched.password}
                    id="password"
                    name="password"
                    type="password"
                    className="pass text"
                    placeholder="New Password"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <p className="sub_title">
                    Date of birth
                    <HelpIcon style={{ fontSize: "12px", marginLeft: "5px" }} />
                  </p>
                  <div className="dob">
                    <select
                      name="date"
                      id="date"
                      onChange={handleChange}
                      style={errors.date && { border: "1px solid red" }}
                    >
                      {[...Array(32)].map((value, index) => {
                        return (
                          index !== 0 && (
                            <option
                              key={index}
                              value={index}
                              selected={index === values.date}
                            >
                              {index}
                            </option>
                          )
                        );
                      })}
                    </select>
                    <select
                      name="month"
                      id="month"
                      onChange={handleChange}
                      style={errors.month && { border: "1px solid red" }}
                    >
                      {months.map((value, index) => {
                        return (
                          <option key={index} selected={index === values.month}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      id="year"
                      name="year"
                      onChange={handleChange}
                      style={errors.year && { border: "1px solid red" }}
                    >
                      {years.map((value, index) => {
                        return (
                          <option keye={index} selected={value === values.year}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="sub_title">
                    Gender
                    <HelpIcon style={{ fontSize: "12px", marginLeft: "5px" }} />
                  </p>
                  <div className="gender">
                    <span>
                      Male
                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        onChange={handleChange}
                      />
                    </span>
                    <span>
                      Female{" "}
                      <input
                        type="radio"
                        value="Female"
                        name="gender"
                        onChange={handleChange}
                      />
                    </span>
                    <span>
                      Custom{" "}
                      <input
                        type="radio"
                        value="Custom"
                        name="gender"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                  {values.gender === "Custom" && (
                    <div className="pronoun">
                      <select
                        name="pronoun"
                        id="pronoun"
                        onChange={handleChange}
                      >
                        {pronoun.map((value, index) => {
                          return (
                            <option
                              disabled={index === 0}
                              selected={index === 0}
                              key={index}
                            >
                              {value}
                            </option>
                          );
                        })}
                      </select>
                      <p>Your pronoun is visible to everyone</p>
                      <div className="optional">
                        <input
                          name="optional"
                          id="optional"
                          placeholder="Gender(Optional)"
                          value={values.optional}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                  <p className="desc">
                    By clicking Sign Up, you agree to our Terms, Data Policy and
                    Cookie Policy. You may receive SMS notifications from us and
                    can opt out at any time.
                  </p>
                  <div className="sinup_button">
                    <Button
                      className={classes.button}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      SignUP
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
