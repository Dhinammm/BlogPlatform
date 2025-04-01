import React from "react";

function ArticleShow() {
    const rootDiv = document.getElementById("root");
    const article = JSON.parse(rootDiv.getAttribute("article"));
    const user = JSON.parse(rootDiv.getAttribute("user"));
    const currentUser = window.currentUser || null;
    return (
        <>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        {currentUser ?(currentUser.id == article.user_id ? 
       ( <a href={`/articles/${article.id}/edit`}>Edit</a>):null):null}
        <a href={`/articles/`}>Back</a>
        </>
    )
}

export default ArticleShow;
