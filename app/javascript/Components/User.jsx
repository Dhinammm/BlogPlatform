import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Home from "./Home";

function User() {
  const [users, setUsers] = useState([]);
  const [current_user, setCurrentuser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/users", {
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        setUsers(response.data.users);
        setCurrentuser(response.data.current_user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <Home/>
      <h1 className="text-primary text-center mb-4">Users List</h1>
      <ul className="list-group mb-3">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`} className="text-decoration-none">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default User;