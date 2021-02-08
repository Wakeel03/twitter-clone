import "./Post.css";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import pp1 from "./img/pp1.jpg";
import pic1 from "./img/pic1.jpg";

import React from "react";

function Post({ id, user, description, url }) {
  return (
    <div className="post">
      <div className="post__header">
        <img src={pp1} className="post__profilePicture"></img>
        <div className="post__username">{user}</div>
        <div className="post__username2">@{user}</div>
        <div className="post__timeElapsed">2m</div>
      </div>
      <div className="post__description">{description}</div>
      <img src={url} className="post__image"></img>
      <div className="post__actions">
        <div className="post__action">
          <BsChat />
          <h5>106</h5>
        </div>
        <div className="post__action">
          <AiOutlineRetweet />
          <h5>55</h5>
        </div>
        <div className="post__action">
          <AiOutlineHeart />
          <h5>1.6K</h5>
        </div>
        <div className="post__action">
          <FiShare />
        </div>
      </div>
    </div>
  );
}

export default Post;
