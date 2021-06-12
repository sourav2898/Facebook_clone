import React from "react";
import "./Landing.css";
import Login from "../Login";
import CopyrightIcon from "@material-ui/icons/Copyright";

const language = [
  "English (UK)",
  "हिन्दी",
  "मराठी",
  "ಕನ್ನಡ",
  "മലയാളം",
  "తెలుగు",
  "தமிழ்",
  "ગુજરાતી",
  "বাংলা",
  "ਪੰਜਾਬੀ",
];

const index = () => {
  const d = new Date().getFullYear();

  return (
    <>
      <div className="landing">
        <div className="leftbar">
          <img
            className="fb_image"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="facebook"
          />
          <h2 className="desc">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="rightbar">
          <Login />
        </div>
      </div>
      <div className="lnd_footer">
        <div className="footer">
          <ul>
            {language.map((value, index) => {
              return <li id={index}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="copyright">
        Facebook <CopyrightIcon style={{ fontSize: "13px" }} /> {d}
      </div>
    </>
  );
};

export default index;
