import "./App.css";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LiveTv from "./components/LiveTv";

const App = () => {
  const [user, setUser] = useState({});
  // const [signLoader, setSignLoader] = useState(false);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        // user has logged in...
        console.log("authuser found", authuser);
        setUser(authuser);
      } else {
        // user has logged out
        console.log("no authuser", authuser);
        setUser(null);
      }
    });
    return () => {
      // some cleanup actions
      unsubscribe();
    };
  }, [user]);

  return (
    <Router>
      {user && <Navbar />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Home user={user} /> : <LandingPage />)}
        ></Route>
        <Route exact path="/liveTv" component={LiveTv}></Route>
      </Switch>
    </Router>
  );
};

export default App;
