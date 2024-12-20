import React, { useState } from "react";
import defaultImg from "../assets/defaultImg.jpg";

const EditPostForm = ({ postData, setShowEditForm }) => {
  const [newData, setNewData] = useState(postData);

  const handleOnChange = (e) => {
    setNewData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleImgChange = (e) => {
    setNewData((prev) => ({ ...prev, thumbnail: e.target.files[0] }));
  };

  return (
    <section className="container mb-16 border border-black">
      <form className="create-post-form bg-white overflow-y-auto">
        <p
          className="flex justify-end cursor-pointer text-2xl mr-3"
          onClick={() => setShowEditForm(false)}
        >
          X
        </p>
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
                value={newData?.title}
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
                value={newData?.category}
                onChange={handleOnChange}
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
                src={
                  newData?.thumbnail instanceof File
                    ? URL.createObjectURL(newData.thumbnail)
                    : newData?.thumbnail || defaultImg
                }
              />
            </label>
            <input
              type="file"
              name="post-image"
              id="post-image"
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Post Description Field */}
        <div className="input-wrapper">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Post Description..."
            className="input"
            value={newData?.desc}
            onChange={handleOnChange}
          ></textarea>
        </div>

        {/* Create Post Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn primary" type="submit">
            Update Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPostForm;
