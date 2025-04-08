import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [current_user, setCurrentuser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/articles", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setArticles(response.data.articles);
        setCurrentuser(response.data.current_user);
        if (current_user) {
          <Link to="/users/sign_out">Sign out</Link>;
        } else {
          <Link to="/users/sign_in">Sign in</Link>;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <div
      className="container mt-4 p-4 rounded shadow-lg"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #e3f2fd)",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-center mb-4 text-dark">Articles List</h1>

      <div className="d-flex justify-content-end mb-3">
        {current_user ? <SignOutButton /> : <SignInButton />}
      </div>

      <ul className="list-group mb-3">
        {articles.map((article) => (
          <li
            key={article.id}
            className="list-group-item border-0 shadow-sm rounded mb-2"
          >
            <Link
              to={`/articles/${article.id}`}
              className="text-decoration-none fw-bold text-dark"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between">
        <Link
          to="/users"
          className="btn btn-outline-secondary fw-bold px-4 py-2 rounded shadow-sm"
        >
          See all authors
        </Link>

        {current_user && (
          <Link
            to="/articles/new"
            className="btn btn-info fw-bold px-4 py-2 rounded shadow-sm"
          >
            Create article
          </Link>
        )}
      </div>
    </div>
  );
}

export default Articles;
