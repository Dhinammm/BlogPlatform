import React, { useState } from "react";
import axios from "axios";

import Home from "./Home"

function ArticleNew() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
  axios.defaults.headers["X-CSRF-Token"] = csrf;

  function titlehandler(event) {
    setTitle(event.target.value);
  }

  function contenthandler(event) {
    setContent(event.target.value);
  }

  

  function createhandler() {
    axios
      .post("http://localhost:3000/articles", { title, content })
      .then(() => {
        alert("Article created successfully");
        navigate("/articles");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="container mt-5">
<Home/>
<SignOutButton></SignOutButton>
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Create a New Article</h2>
        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={titlehandler}
            value={title}
            placeholder="Enter article title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Content</label>
          <textarea
            className="form-control"
            rows="6"
            onChange={contenthandler}
            value={content}
            placeholder="Write your article content here..."
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={createhandler} className="btn btn-success px-4 fw-bold">
            Submit
          </button>
          <button onClick={Cancel} className="btn btn-dark px-4 fw-bold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleNew;
