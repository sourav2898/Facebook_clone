import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./createPost.css";
import Avatar from "@material-ui/core/Avatar";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Button } from "@material-ui/core";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";

const CreatePost = ({
  close,
  user,
  img,
  postInput,
  setPostInput,
  handleImage,
  removeAsset,
  handleUpload,
  uploading,
  progress,
}) => {
  const handleChange = (e) => {
    handleImage(e);
  };

  return (
    <div className="create_post">
      <div className="container">
        <div className="header">
          <h1>{}</h1>
          <h3>Create Post</h3>
          <HighlightOffIcon
            onClick={
              !uploading
                ? close
                : () => {
                    alert("can't close upload under process.");
                  }
            }
            style={{
              cursor: `${!uploading ? "pointer" : "none"}`,
              color: `${!uploading ? "lightgray" : "gray"}`,
              fontWeight: "bold",
            }}
          />
        </div>
        <div className="info">
          <Avatar style={{ marginRight: "10px" }}>
            {user?.displayName?.charAt(0)}
          </Avatar>
          <h5>{user?.displayName}</h5>
        </div>
        <div className="content">
          <textarea
            rows={10}
            placeholder={`What's on your mind, ${user?.displayName}?`}
            value={postInput}
            onChange={(e) => {
              setPostInput(e.target.value);
            }}
          ></textarea>
        </div>
        {img?.size > 0 && (
          <div className="post_asset">
            {/* <img src="" alt="post_asset" /> */}
            <p> {img?.name} </p>
            <CancelPresentationIcon
              style={{
                color: `red`,
                cursor: "pointer",
              }}
              onClick={progress === 0 && removeAsset}
            />
          </div>
        )}
        <div className="post_lower">
          <div className="post_lower_actions">
            <input
              id="file"
              className="file"
              type="file"
              accept="image/*"
              onChange={handleChange}
              hidden
            />{" "}
            <label for="file" style={{ display: "flex" }}>
              <PhotoLibraryIcon
                style={{ marginRight: "5px", color: "green" }}
              />
              <p>Photos</p>
            </label>
          </div>
          <div className="post_lower_actions">
            <InsertEmoticonIcon
              style={{ marginRight: "5px", color: "yellow" }}
            />
            <p>Feeling/Activity</p>
          </div>
        </div>
        <div className="post_btn">
          {!uploading ? (
            <Button
              style={{ width: "100%" }}
              color="primary"
              variant="contained"
              disabled={postInput === ""}
              onClick={handleUpload}
            >
              Post
            </Button>
          ) : (
            <>
              <LinearProgressWithLabel value={progress} />
              <p
                style={{
                  color: "blue",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {progress}%
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
