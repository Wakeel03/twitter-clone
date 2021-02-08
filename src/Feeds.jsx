import "./Feeds.css";
import Post from "./Post";
import CreatePost from "./CreatePost";
import db from "./firebase.js";

import React, { useState, useEffect } from "react";

function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="feeds">
      <CreatePost />
      {posts.map((post) => (
        <Post
          id={post.id}
          user={post.data.user}
          description={post.data.description}
          url={post.data.url}
        />
      ))}
    </div>
  );
}

export default Feeds;
