import React, { useState } from "react";
import "./Landing.css";
import Login from "../Login";
import Signup from "../Signup";
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

const Landing = () => {
  const d = new Date().getFullYear();
  const [lang, setLang] = useState("English (UK)");
  const [openUp, setOpenUp] = useState(false);

  const getLang = (value) => {
    setLang(value);
  };

  const openSignUp = () => {
    setOpenUp(!openUp);
  };

  return (
    <>
      <div className="landing">
        {openUp && <Signup openSignUp={openSignUp} />}

        <div className="leftbar">
          <img
            className="fb_image"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="facebook"
          />
          <h2 className="landing_desc">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="rightbar">
          <Login openSignUp={openSignUp} />
        </div>
      </div>
      <div className="lnd_footer">
        <div className="footer">
          <ul>
            {language?.map((value, index) => {
              return (
                <li
                  style={lang === value ? { color: "#111" } : {}}
                  id={index}
                  onClick={() => getLang(value)}
                >
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="copyright">
        Facebook <CopyrightIcon style={{ fontSize: "13px" }} /> {d}
      </p>
    </>
  );
};

export default Landing;
