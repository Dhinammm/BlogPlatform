import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

function UserShow() {
  const [user, setUser] = useState({ id: 0, name: "" });
  const [auth, setAuth] = useState(true);
  const [articles, setArticles] = useState([]);
  const [fake, setFake] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const csrf = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");
  axios.defaults.headers["X-CSRF-Token"] = csrf;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`, {
          headers: { Accept: "application/json" },
        });

        if (response.data.res === false) {
          setUser(response.data.user);
          setArticles(response.data.articles);
          setFake(response.data.fake);
          setAuth(false);
        } else {
          history.push("/not_found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      history.push(`http://localhost:3000/users/`);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="container mt-4 p-4 bg-blue text-light rounded shadow">
      <h3 className="mb-3">{user.name}</h3>

      <ul className="list-group list-group-flush mb-3">
        {articles.length > 0 ? (
          articles.map((article) => (
            <li key={article.id} className="list-group-item bg-blue text-light">
              <Link to={`/articles/${article.id}`} className="text-info">
                {article.title}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-warning">User hasn't posted any articles.</li>
        )}
      </ul>

      <div className="row mt-5">
        <div className="col-md-6 d-flex flex-column align-items-start">
          {!fake && !auth && (
            <Link
              to="/articles/new"
              className="btn btn-success fw-bold shadow-sm mb-2"
            >
              Create Article
            </Link>
          )}
        </div>

        <div className="col-md-6 d-flex justify-content-end align-items-end">
          {!fake && (
            <button
              onClick={deleteHandler}
              className="btn btn-danger fw-bold shadow-sm"
            >
              Delete Account
            </button>
          )}
        </div>
      </div>

      <Link to={`/users/`} className="btn btn-outline-dark mb-2">
        Back
      </Link>
      <Link to="/" className="btn btn-outline-dark mb-2">
        Home
      </Link>
    </div>
  );
}

export default UserShow;
