import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./createPost.css";
import Avatar from "@material-ui/core/Avatar";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Button } from "@material-ui/core";

const CreatePost = ({ close, user, postInput, setPostInput }) => {
  return (
    <div className="create_post">
      <div className="container">
        <div className="header">
          <h1>{}</h1>
          <h3>Create Post</h3>
          <HighlightOffIcon
            onClick={close}
            style={{
              cursor: "pointer",
              color: "lightgray",
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
          >
            {" "}
          </textarea>
        </div>
        <div className="post_lower">
          <div className="post_lower_actions">
            <PhotoLibraryIcon style={{ marginRight: "5px", color: "green" }} />
            <p>Photos</p>
          </div>
          <div className="post_lower_actions">
            <InsertEmoticonIcon
              style={{ marginRight: "5px", color: "yellow" }}
            />
            <p>Feeling/Activity</p>
          </div>
        </div>
        <div className="post_btn">
          <Button
            style={{ width: "100%" }}
            color="primary"
            variant="contained"
            disabled={postInput === ""}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
