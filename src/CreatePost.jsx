import "./CreatePost.css";
import React, { useState } from "react";
import pp1 from "./img/pp1.jpg";
import db from "./firebase.js";

function CreatePost() {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const createNewPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      user: "Wakeel",
      description: description,
      url: url,
    });
    setDescription("");
    setUrl("");
  };

  return (
    <div className="createPost">
      <div className="createPost__header">
        <h2>Home</h2>
      </div>
      <form>
        <div className="createPost__input">
          <img src={pp1} className="createPost__profilePicture"></img>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's happening?"
          />
        </div>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="createPost__imageUrl"
          placeholder="Image url"
        ></input>
        <button type="submit" onClick={createNewPost}>
          Tweet
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
