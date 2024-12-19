import React from "react";
import { Link } from "react-router-dom";
import { DummyAuthors } from "../Constants";

const Authors = () => {
  return (
    <div className="container">
      <h1>Authors</h1>
      <div className="grid grid-cols-3 gap-5">
        {DummyAuthors?.length > 0 &&
          DummyAuthors.map((author) => (
            <article
              key={author.id}
              className="shadow-md shadow-gray-300 p-4 rounded-xl"
              // style={{ border: "1px solid blue" }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="overflow-hidden">
                  <img
                    className="w-32 rounded-lg"
                    src={author.profileImg}
                    alt=""
                  />
                </div>
                <div>
                  <h3>{author.name}</h3>
                  <p className="text-gray-600">{author.email}</p>
                </div>
              </div>
              <Link to={`/posts/users/${author.id}`} className="font-semibold">
                See Posts
              </Link>
            </article>
          ))}
      </div>
      {/* <Link to={`/posts/users/${26}`}>Go to author 26</Link> */}
    </div>
  );
};

export default Authors;
