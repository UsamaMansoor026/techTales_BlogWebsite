import React, { useState } from "react";
import defaultImg from "../assets/defaultImg.jpg";

const CreatePost = () => {
  const [postImg, setPostImg] = useState();
  const [postData, setPostData] = useState({
    title: "",
    category: "",
    description: "",
  });
  const handleImg = (e) => {
    console.log(e.target.files[0]);
    setPostImg(e.target.files[0]);
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handlePostCreate = (e) => {
    e.preventDefault();
    console.log("PostData: ", postData);
    console.log("Post image: ", URL.createObjectURL(postImg));

    setPostData({
      title: "",
      category: "",
      description: "",
    });
    setPostImg(null);
  };

  return (
    <section className="container">
      <form className="create-post-form" onSubmit={handlePostCreate}>
        <div className="fields_wrapper">
          <div className="title_category_wrapper">
            {/* Post Title Field */}
            <div className="input-wrapper">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Post Title..."
                className="input"
                value={postData.title}
                onChange={handleOnChange}
              />
            </div>

            {/* Post Category Field */}
            <div className="input-wrapper">
              <label htmlFor="category">Select Category</label>
              <select
                name="category"
                id="category"
                className="input"
                onChange={handleOnChange}
                value={postData.category}
              >
                <option value="">Select</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Science">Science</option>
                <option value="Art">Art</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
          </div>
          <div className="input-wrapper title_category_wrapper">
            <label
              htmlFor="post-image"
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span>Post Image</span>
              <img
                className="image_label"
                src={postImg ? URL.createObjectURL(postImg) : defaultImg}
              />
            </label>
            <input
              type="file"
              name="post-image"
              id="post-image"
              onChange={handleImg}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Post Description Field */}
        <div className="input-wrapper">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Post Description..."
            className="input"
            onChange={handleOnChange}
            value={postData.description}
          ></textarea>
        </div>

        {/* Create Post Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn primary" type="submit">
            Create Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
