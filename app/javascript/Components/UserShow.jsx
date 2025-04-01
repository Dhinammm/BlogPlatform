import React from "react";

function UserShow() {
    const rootDiv = document.getElementById("root");
    const articles = JSON.parse(rootDiv.getAttribute("article"));
    const user = JSON.parse(rootDiv.getAttribute("user"));

    // Get CSRF Token from the Rails meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const handleDelete = () => {
        if (!csrfToken)
        {alert("Csrf not present");}
        if (!window.confirm("Are you sure you want to delete your account?")) return;

        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": csrfToken,  // Include CSRF token
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (response.ok) {
                alert("Account deleted successfully.");
                window.location.href = "/users"; // Redirect after deletion
            } else {
                response.json().then(data => alert(data.error || "Failed to delete account."));
            }
        })
        .catch(error => console.error("Error:", error));
    };

    return (
        <>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <a href={`/articles/${article.id}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
            <a href={`/articles/new?user_id=${user.id}`}>Create new article</a>
            
            {/* Delete Account Button */}
            <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>
                Delete Account
            </button>
        </>
    );
}

export default UserShow;
