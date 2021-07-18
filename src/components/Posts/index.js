import React, { useState, useEffect } from "react";
import "./posts.css";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import { Button } from "@material-ui/core";
import { db } from "../../firebase";
import Popover from "@material-ui/core/Popover";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Posts = ({ caption, image, username, postId, email, postEmail }) => {
  const [liked, isLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const likeAction = () => {
    console.log("like action called");
    if (!liked) {
      db.collection("posts").doc(postId).collection("likes").add({
        like: true,
        username: username,
        email: email,
      });
    } else {
      const arr = likes.filter(
        (like) => like.likes.email.toLowerCase() === email.toLowerCase()
      );
      // console.log(arr);
      if (arr.length > 0) {
        db.collection("posts")
          .doc(postId)
          .collection("likes")
          .doc(arr[0].id)
          .delete();
      }
    }
    isLiked(!liked);
  };

  const postComment = () => {
    if (comment !== "") {
      db.collection("posts").doc(postId).collection("comments").add({
        username: username,
        comment: comment,
        email: email,
      });
    }
    setComment("");
    setShowComments(true);
  };

  useEffect(() => {
    let unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("likes")
      .onSnapshot((snapshot) => {
        setLikes(
          snapshot.docs.map((doc) => ({ id: doc.id, likes: doc.data() }))
        );
      });

    let unsubscribe1 = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });

    return () => {
      unsubscribe();
      unsubscribe1();
    };
  }, [postId]);

  useEffect(() => {
    console.log("like useEffect called");
    const arr = likes.filter(
      (like) => like.likes.email.toLowerCase() === email.toLowerCase()
    );
    if (arr.length > 0) {
      isLiked(true);
    }
  }, [likes, email]);

  const deletePost = () => {
    // eslint-disable-next-line no-restricted-globals
    let cnf = confirm("Are you sure you want to delete this post?");
    if (cnf) {
      db.collection("posts").doc(postId).delete();
      handleClose();
    }
  };

  const deleteComment = (id) => {
    // eslint-disable-next-line no-restricted-globals
    let cnf = confirm("Are you sure you want to delete this comment?");
    if (cnf) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .doc(id)
        .delete();
    }
  };

  return (
    <div className="posts">
      <div className="header">
        <Avatar style={{ marginRight: "10px" }}>{username?.charAt(0)}</Avatar>
        <h5 className="user_name">{username}</h5>
        {postEmail === email && (
          <>
            {" "}
            <MoreHorizIcon
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <p style={{ padding: "10px", cursor: "pointer" }}>
                <EditIcon />
              </p>
              <p
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={deletePost}
              >
                <DeleteIcon />
              </p>
            </Popover>
          </>
        )}
      </div>
      <div className="post_content">
        <p>{caption}</p>
      </div>
      {image !== null && image !== "" && image !== undefined && (
        <div className="post_asset">
          <img className="image" src={image} alt="post_asset" />
        </div>
      )}
      <div className="likes_comments">
        <div className="likes">
          <ThumbUpAltIcon
            style={{ color: "blue", cursor: "pointer", marginRight: "5px" }}
          />
          <p>
            {" "}
            {likes.length === 0 || likes.length === 1
              ? `${likes.length} Like`
              : `${likes.length} Likes`}{" "}
          </p>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowComments(!showComments)}
        >
          <p>{comments.length} Comments</p>
        </div>
      </div>
      <div className="post_actions">
        {liked ? (
          <div
            style={{
              color: "blue",
              cursor: "pointer",
              marginRight: "5px",
              display: "flex",
            }}
            onClick={likeAction}
          >
            <ThumbUpAltIcon />
            <p>Like</p>
          </div>
        ) : (
          <div
            style={{
              color: "gray",
              cursor: "pointer",
              marginRight: "5px",
              display: "flex",
            }}
            onClick={likeAction}
          >
            <ThumbUpAltIcon />
            <p>Like</p>
          </div>
        )}
        <div
          style={{
            color: "gray",
            cursor: "pointer",
            marginRight: "5px",
            display: "flex",
          }}
        >
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div
          style={{
            color: "gray",
            cursor: "pointer",
            marginRight: "5px",
            display: "flex",
          }}
        >
          <ScreenShareOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
      {showComments && (
        <div className="comment_section">
          {comments.map((values, index) => {
            return (
              <div className="comment" id={index}>
                <div>
                  <Avatar style={{ marginRight: "10px" }}>
                    {username.charAt(0)}
                  </Avatar>
                </div>
                <div className="comment_content">
                  <p>{values?.data?.username}</p>
                  <p>{values?.data?.comment}</p>
                </div>
                {values?.data?.email === postEmail ||
                  (values?.data?.email === email && (
                    <DeleteIcon
                      color="secondary"
                      onClick={() => deleteComment(values.id)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
              </div>
            );
          })}
        </div>
      )}
      <div className="post_comments">
        <Avatar style={{ marginRight: "10px" }}>{username?.charAt(0)}</Avatar>
        <textarea
          rows={2}
          className="comment_input"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          color="secondary"
          variant="contained"
          disabled={comment === ""}
          onClick={postComment}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default Posts;
