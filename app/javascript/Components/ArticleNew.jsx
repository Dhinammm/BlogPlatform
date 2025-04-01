import React from "react";
import { useState } from "react";

function ArticleNew(){
    const rootDiv = document.getElementById("root");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    function titlehandler(event){
        setTitle(event.target.value);
    }

    function contenthandler(event){
        setContent(event.target.value);
    }

   const user_id =1;
    function createhandler() {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
        if (!csrfToken) {
            console.error("CSRF token missing");
            return;
        }
    
        fetch(`/articles/`, {
            method: "POST",
            headers: {
                "X-CSRF-Token": csrfToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({article: { title, content, user_id}} )
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
        .catch(error => window.location.href= `/articles/`);
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
        <button onClick={createhandler}>Submit</button>
        </>
    );
}

export default ArticleNew