import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DummyAuthors } from "../Constants";

const SinglePost = ({ post }) => {
  const navigate = useNavigate();
  const [authorDetail, setAuthorDetail] = useState();
  const shortDescription =
    post.desc.length > 145 ? post.desc.substring(0, 145) + "..." : post.desc;
  const postTtile =
    post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title;

  /*  */
  const gotoAuthorPage = (e, id) => {
    e.stopPropagation();
    if (id) {
      navigate(`/posts/users/${id}`);
    }
  };

  /* Getting Author Name */
  const getAuthorName = (authorId) => {
    const response = DummyAuthors.find((author) => author.id === authorId);
    if (response) {
      setAuthorDetail(response);
    }
  };

  useEffect(() => {
    getAuthorName(post.authorID);
  }, []);

  return (
    <article
      key={post.id}
      className="singlePost shadow-lg"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div className="post_thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>
      <div className="my-3 px-3">
        <h3>{postTtile}</h3>
        <p>{shortDescription}</p>
      </div>
      <div className="flex justify-between items-center my-3 pl-1 pr-4">
        {/* Author Detail */}
        <div
          onClick={(e) => gotoAuthorPage(e, authorDetail?.id)}
          className="flex items-center gap-1 hover:cursor-pointer"
        >
          <img
            className="w-9 h-9 rounded-full"
            src={authorDetail?.profileImg}
            alt=""
          />
          <p>{authorDetail?.name}</p>
        </div>
        <p className="uppercase cursor-pointer text-xs hover:underline duration-150">
          {post.category}
        </p>
      </div>
    </article>
  );
};

export default SinglePost;
