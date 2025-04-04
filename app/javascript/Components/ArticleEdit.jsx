import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
function ArticleEdit() {
    const [article, setArticle] = useState({ title: "", content: "" });
    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);
    const { id } = useParams(); 
    const navigate= useHistory();
    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${id}`, { headers: { Accept: "application/json" } })
            .then(response => {
                setArticle(response.data.article);
                setTitle(response.data.article.title);
                setContent(response.data.article.content);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    function updateHandler() {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
        if (!csrfToken) {
            console.error("CSRF token missing");
            return;
        }

        axios.put(`/articles/${article.id}`, 
            { article: { id, title, content } },
            {
                headers: {
                    "X-CSRF-Token": csrfToken,
                    "Content-Type": "application/json",
                },
            }
        )
        .then(response => {
            alert("Article updated successfully");
           navigate.push(`/articles/${id}`) ;
        })
        .catch(error => {
            alert("Error updating article");
        });
    }

    return (
        <div className="container mt-4">
              <Home/>
              <SignOutButton/>
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Edit Article</h2>
                
                <div className="mb-3">
                    <label className="form-label fw-bold">Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Content</label>
                    <textarea 
                        rows="5" 
                        className="form-control"
                        onChange={(e) => setContent(e.target.value)} 
                        value={content}
                    />
                </div>

                <div className="d-flex justify-content-end mt-3">
    <Link to={`/articles/${id}`} className="btn btn-secondary fw-bold px-4 py-2 me-2">
        Cancel
    </Link>
  
    <button 
        onClick={updateHandler} 
        className="btn btn-success fw-bold px-4 py-2"
    >
        Update
    </button>
</div>

            </div>
        </div>
    );
}

export default ArticleEdit;
