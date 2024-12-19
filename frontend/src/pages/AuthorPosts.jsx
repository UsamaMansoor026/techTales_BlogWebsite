import React from "react";
import { useParams } from "react-router-dom";

const AuthorPosts = () => {
  const { id } = useParams();
  return <div>AuthorPosts for author ID: ${id}</div>;
};

export default AuthorPosts;
