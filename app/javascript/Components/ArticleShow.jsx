import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

function ArticleShow() {
  const [article, setArticle] = useState([]);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  const [userNotLogged, setuserNotLogged] = useState(false);
  const [content, setContent] = useState("");
  const [showFullContent, setShowFullContent] = useState(false);
  const { id } = useParams();
  const [currentUser, setcurrentUser] = useState(0);
  const history = useHistory();
  const csrf = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  axios.defaults.headers["X-CSRF-Token"] = csrf;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${id}`, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        if (response.data.not_found) {
          history.push(`/not_found`);
        } else {
          setArticle(response.data.article);
          setComments(response.data.comments);
          setUser(response.data.user);
          setAuth(response.data.res);
          setuserNotLogged(response.data.user_not_logged);
          setcurrentUser(response.data.current_user_id);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function deleteHandler() {
    axios
      .delete(`http://localhost:3000/articles/${id}`)
      .then(() => history.push(`/articles`))
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  }

  function deleteComments(comment_id) {
    axios
      .delete(
        `http://localhost:3000/articles/${article.id}/blog_comments/${comment_id}`
      )
      .then(() => (window.location.href = `/articles/${article.id}`));
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  function addComment() {
    if (content.trim() !== "") {
      axios
        .post(`http://localhost:3000/articles/${article.id}/blog_comments`, {
          content,
        })
        .then(() => {
          alert("Comment posted successfully");
          history.push(`/articles/${article.id}`);
        })
        .catch((error) => {
          alert("An error occurred: " + error.message);
        });
    } else {
      alert("Please write some content to post.");
    }
  }

  const maxLength = 300; 
  return (
    <div className="container mt-4 p-4 bg-white rounded shadow-lg">
      <h1 className="text-primary text-center mb-3">{article.title}</h1>

     
      <p className="lead">
        {showFullContent || article.content?.length <= maxLength
          ? article.content
          : `${article.content?.slice(0, maxLength)}...`}
      </p>
      {article.content?.length > maxLength && (
        <button
          className="btn btn-link p-0"
          onClick={() => setShowFullContent(!showFullContent)}
        >
          {showFullContent ? "Show Less" : "Show More"}
        </button>
      )}

      <div>
        <b>Author: </b>
        <b className="text-info">{user.name}</b>
      </div>
      <hr />

      {!userNotLogged && (
        <div className="mb-3">
          <h5>Add Comment</h5>
          <textarea
            rows="4"
            className="form-control"
            onChange={contentHandler}
            value={content}
            placeholder="Write a comment..."
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={addComment}>
            Add Comment
          </button>
        </div>
      )}

      <h3 className="mt-4">Comments</h3>
      <ul className="list-group">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {comment.content}
            {comment.user_id === currentUser && (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteComments(comment.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {auth && (
        <div className="mt-4 d-flex gap-2">
          <Link to={`/articles/${article.id}/edit`} className="btn btn-warning">
            Edit
          </Link>
          <button className="btn btn-dark" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      )}

      {!userNotLogged ? <SignOutButton /> : <SignInButton />}
      <div className="mt-3">
        <Link to="/articles" className="btn btn-secondary">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ArticleShow;
