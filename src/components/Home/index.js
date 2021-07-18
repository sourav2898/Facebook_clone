import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import "./home.css";
import { left_bar_first_half, left_bar_second_half, contacts } from "./helper";
import { Link } from "react-router-dom";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Avatar from "@material-ui/core/Avatar";
// import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CreatePost from "../CreatePost/index";
import Posts from "../Posts";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = ({ user }) => {
  const [showing, isShowing] = useState(false);
  const [postInput, setPostInput] = useState("");
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, isLoading] = useState(true);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
      // setError('');
    }
  };

  const removeAsset = () => {
    setImage({});
    console.log("removed");
  };

  const handleUpload = () => {
    if (
      image.size === 0 ||
      isNaN(image.size) ||
      image === null ||
      image === undefined ||
      image === ""
    ) {
      alert("Please Select an Image");
    } else {
      console.log(image);
      setUploading(true);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      const myProm = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progress function....
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress);
            setProgress(progress);
          },
          (error) => {
            // Error function...
            console.log(error);
            alert(error.message);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts").add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  caption: postInput,
                  imageUrl: url,
                  username: user?.displayName,
                  email: user?.email,
                });
                setProgress(0);
                setPostInput("");
                setImage({});
                setUploading(false);
                alert("Hurray!! Uploaded Successfully..");
                document.getElementById("file").value = "";
                // window.scrollTo(500,0);
                setShowPost(false);
                resolve();
              })
              .catch((error) => {
                console.log("error while uploading", error);
                setUploading(false);
                setProgress(0);
                alert(
                  "Sorry there was an error while uploading....Please try after some time.Thank you!!"
                );
                reject();
              });
          }
        );
      });
      myProm.then(() => {
        setTimeout(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 1500);
      });
    }
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
        isLoading(false);
      });
  }, []);

  // console.log(posts);

  return (
    <>
      {showPost && (
        <CreatePost
          close={() => {
            setShowPost(false);
            setProgress(0);
            setPostInput("");
            setImage({});
          }}
          user={user}
          postInput={postInput}
          setPostInput={setPostInput}
          img={image}
          handleImage={(e) => handleChange(e)}
          removeAsset={() => removeAsset()}
          handleUpload={() => handleUpload()}
          uploading={uploading}
          progress={progress}
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
              {/* <div
                className="post_lower_actions"
                onClick={() => setShowPost(true)}
              >
                <VideocamIcon style={{ marginRight: "5px", color: "red" }} />
                <p>Live Video</p>
              </div> */}
              <div
                className="post_lower_actions"
                onClick={() => setShowPost(true)}
              >
                <PhotoLibraryIcon
                  style={{ marginRight: "5px", color: "green" }}
                />
                <p>Photo Post</p>
              </div>
              <div
                className="post_lower_actions"
                onClick={() => setShowPost(true)}
              >
                <InsertEmoticonIcon
                  style={{ marginRight: "5px", color: "yellow" }}
                />
                <p>Feeling/Activity</p>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="loader">
              <CircularProgress />
            </div>
          ) : (
            <>
              {posts?.map((value) => {
                return (
                  <Posts
                    id={value?.id}
                    postId={value?.id}
                    caption={value?.post?.caption}
                    image={value?.post?.imageUrl}
                    username={value?.post?.username}
                    postEmail={value?.post?.email}
                    email={user?.email}
                    likes={value?.post?.likes}
                    isLoading={() => isLoading()}
                  />
                );
              })}
            </>
          )}
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
