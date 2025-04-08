import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home"


function SignOut(){
    function deletehandler()
{const csrf = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  axios.defaults.headers["X-CSRF-Token"] = csrf;
axios.delete(`http://localhost:3000/users/sign_out`)
.then(response =>
    window.location.href="/"
)
}

}

export default SignOut;