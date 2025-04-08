
import { useParams, Link, useHistory } from "react-router-dom";

function SignOutButton(){

    return (
        <Link to="/users/sign_out">SignOut</Link>
    );
}

export default SignOutButton;