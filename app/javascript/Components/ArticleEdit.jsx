import React from "react";
import { useState } from "react";
import axios from "axios";
function ArticleEdit(){
    const rootDiv = document.getElementById("root");
    const article = JSON.parse(rootDiv.getAttribute("article"));
    const user = JSON.parse(rootDiv.getAttribute("user"));
    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);
    const id= article.id;
    function titlehandler(event){
        setTitle(event.target.value);
    }

    function contenthandler(event){
        setContent(event.target.value);
    }
    function updatehandler() {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
        if (!csrfToken) {
            console.error("CSRF token missing");
            return;
        }
    
        fetch(`/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "X-CSRF-Token": csrfToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({article: { title, content}} )
        })
        .then(response => {
            if (response.ok) {
                alert("Article updated successfully!");
                window.location.href = `/articles/${article.id}`; 
            } else {
                return response.text().then(text => {
                    window.location.href = `/articles/${article.id}`;
                    console.error("Update failed:", text);
                    alert("Failed to update article.");
                    window.location.href = `/articles/${article.id}`; 
                });
            }
        })
        .catch(error => window.location.href= `/articles/${article.id}`);
    }
    
    return (
        <>
        <h2>Title</h2>
        <input type="text" onChange={titlehandler} value={title}/>
        <h2>Content</h2>
        <textarea 
  rows="10" 
  cols="100" 
  onChange={contenthandler} 
  value={content}
/>
        <button onClick={updatehandler}>Submit</button>
        </>
    )
}

export default ArticleEdit