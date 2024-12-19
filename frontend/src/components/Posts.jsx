import React from "react";
import { DummyPosts } from "../Constants";
import SinglePost from "./SinglePost";

const Posts = () => {
  return (
    <div>
      <h1>Dummy Posts</h1>
      <div className="posts_container">
        {DummyPosts.length > 0 &&
          DummyPosts.map((post) => {
            return <SinglePost post={post} />;
          })}
      </div>
    </div>
  );
};

export default Posts;
