import { Link } from "react-router-dom";
import Topbar from "./components/Topbar";
import "./index.css";
import "./Login.css";

function Login() {
    return (
        <div className="content">
            <Topbar></Topbar>
            <div className="panel">
                <h2>Sign in</h2>
                <span></span>
                <form action="">
                    <div className="inputFieldContainer">
                        <div className="combo">
                            <label className="labelText" htmlFor="Name">Name</label>
                            <input className="inputField" type="text" name="Name" id="NameInput" />
                        </div>

                        <div className="combo">
                            <label className="labelText" htmlFor="Email">Email</label>
                            <input className="inputField" type="email" name="Email" id="EmailInput" />
                        </div>

                        <div className="combo">
                            <label className="labelText" htmlFor="Password">Password</label>
                            <input className="inputField" type="password" name="Password" id="PasswordInput" />
                        </div>
                    </div>
                    
                    <div className="buttons">
                        <Link to={"/signup"}>Don't have an account?</Link>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;