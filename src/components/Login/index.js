import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, makeStyles } from "@material-ui/core";
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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login_container">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <Button className={classes.btn} variant="contained" color="primary">
            Login
          </Button>
        </form>
        <p className="forgot">Forgotten Password?</p>
        <Button
          className={classes.btn_create}
          variant="contained"
          color="green"
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
