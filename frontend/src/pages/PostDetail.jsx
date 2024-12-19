import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DummyPosts, DummyAuthors } from "../Constants";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [authorDetail, setAuthorDetail] = useState(null);
  const getAuthorDetail = (authorId) => {
    const response = DummyAuthors.find((author) => author.id === authorId);
    if (response) {
      // console.log("Response: ", response);
      setAuthorDetail(response);
    } else {
      setAuthorDetail(null);
    }
  };

  useEffect(() => {
    const response = DummyPosts.find((post) => post.id === Number(id));
    // console.log("Response: ", response);
    if (response) {
      setPostDetail(response);
      getAuthorDetail(response.authorID);
    } else {
      setPostDetail(null);
    }
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="smallContainer">
      <div className="flex items-center justify-between">
        {/* Author Detail */}
        <div className="flex items-center gap-3">
          <Link to={`/posts/users/${authorDetail?.id}`}>
            <img
              className="w-9 h-9 rounded-full"
              src={authorDetail?.profileImg}
              alt={authorDetail?.name}
            />
          </Link>
          <h3>{authorDetail?.name}</h3>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-3">
          <button className="btn primary" type="button">
            Edit
          </button>
          <button className="btn danger" type="button">
            Delete
          </button>
        </div>
      </div>

      <div>
        <div className="overflow-hidden rounded-[10px]">
          <img
            className="w-full object-cover aspect-[3/1.5] rounded-[10px] hover:scale-110 duration-100"
            src={postDetail?.thumbnail}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <h1>{postDetail?.title}</h1>
          <p>{postDetail?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
