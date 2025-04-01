import React from "react";

function User() {
  const rootDiv = document.getElementById("root");
  const usersData = JSON.parse(rootDiv.getAttribute("data-users") || "[]");

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}><a href={`/users/${user.id}`}>{user.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default User;
