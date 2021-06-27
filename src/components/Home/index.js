import React, { useState } from "react";
import "./home.css";
import { left_bar_first_half, left_bar_second_half, contacts } from "./helper";
import { Link } from "react-router-dom";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CreatePost from "../CreatePost/index";
import Posts from "../Posts";

const Home = ({ user }) => {
  const [showing, isShowing] = useState(false);
  const [postInput, setPostInput] = useState("");
  const [showPost, setShowPost] = useState(false);

  console.log("home page", user);

  return (
    <>
      {showPost && (
        <CreatePost
          close={() => {
            setShowPost(false);
          }}
          user={user}
          postInput={postInput}
          setPostInput={setPostInput}
        />
      )}

      <div className="home">
        <div className="home_left">
          <p className="home_left_link">
            <Link className="link">
              {" "}
              <AccountCircleTwoToneIcon
                style={{ marginRight: "10px", color: "lightseagreen" }}
              />{" "}
              {user?.displayName}
            </Link>
          </p>
          {left_bar_first_half.map((value, index) => {
            return (
              <p key={index} className="home_left_link">
                <Link className="link">
                  {" "}
                  <span
                    className="left_icon"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    {value.icon}
                  </span>{" "}
                  {value?.name}
                </Link>
              </p>
            );
          })}
          {!showing && (
            <p
              className="home_left_link arrow"
              style={{
                borderBottom: "2px solid gray",
              }}
              onClick={() => isShowing(true)}
            >
              <Link className="link">
                {" "}
                <ArrowDropDownIcon style={{ marginRight: "10px" }} /> Show More
              </Link>
            </p>
          )}
          {showing &&
            left_bar_second_half.map((value, index) => {
              return (
                <p key={index} className="home_left_link">
                  <Link className="link">
                    {" "}
                    <span
                      className="left_icon"
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      {value.icon}
                    </span>{" "}
                    {value?.name}
                  </Link>
                </p>
              );
            })}
          {showing && (
            <p
              className="home_left_link arrow"
              style={{
                borderBottom: "2px solid gray",
              }}
              onClick={() => isShowing(false)}
            >
              <Link className="link">
                {" "}
                <ArrowDropUpIcon style={{ marginRight: "10px" }} /> Show Less
              </Link>
            </p>
          )}
        </div>
        <div className="home_mid">
          <div className="post">
            <div className="input">
              <Avatar style={{ marginRight: "10px" }}>
                {user?.displayName?.charAt(0)}
              </Avatar>
              <input
                className="post_input"
                name="post_input"
                id="post_input"
                placeholder={`What's on your mind, ${user?.displayName}?`}
                value={postInput}
                onClick={() => setShowPost(true)}
                readOnly
              />
            </div>
            <div className="post_lower">
              <div className="post_lower_actions">
                <VideocamIcon style={{ marginRight: "5px", color: "red" }} />
                <p>Live Video</p>
              </div>
              <div className="post_lower_actions">
                <PhotoLibraryIcon
                  style={{ marginRight: "5px", color: "green" }}
                />
                <p>Photo Post</p>
              </div>
              <div className="post_lower_actions">
                <InsertEmoticonIcon
                  style={{ marginRight: "5px", color: "yellow" }}
                />
                <p>Feeling/Activity</p>
              </div>
            </div>
          </div>
          <Posts />
        </div>
        <div className="home_right">
          <div className="right_header">
            <p>Contacts</p>
            {contacts?.map((value, index) => {
              return (
                <div className="contacts" id={index}>
                  <Avatar style={{ marginRight: "10px" }}>
                    {value.charAt(0)}
                  </Avatar>
                  <p>{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
