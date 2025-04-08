
import { useHistory } from "react-router-dom";
import axios from "axios";



function SignOut(){
    const history=useHistory();
    function deletehandler()
{const csrf = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
  axios.defaults.headers["X-CSRF-Token"] = csrf;
axios.delete(`http://localhost:3000/users/sign_out`)
.then(response =>
     history.push(`/`)
)
}

}

export default SignOut;