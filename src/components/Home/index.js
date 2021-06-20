import React from "react";
import "./home.css";
import { auth } from "../../firebase";
// import Navbar from "../Navbar";

const Home = () => {
  const handleLogOut = () => {
    alert("logging out");
    auth.signOut();
    window.location.reload();
  };
  return (
    <>
      <div className="home">
        <div>Welcome to FaceBook CLone</div>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </>
  );
};

export default Home;
