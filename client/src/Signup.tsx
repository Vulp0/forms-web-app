import { Link } from "react-router-dom";
import Topbar from "./components/Topbar";

function Signup() {
    return (
        <div className="content">
            <Topbar></Topbar>
            <div className="panel">
                <h2>Sign up</h2>
                <span></span>
                <form action="">
                    <div className="inputFieldContainer">
                        <div className="combo">
                            <label className="labelText" htmlFor="Name">Name</label>
                            <input className="inputField" type="text" name="Name" id="NameInput" placeholder="Your name"/>
                        </div>

                        <div className="combo">
                            <label className="labelText" htmlFor="Email">Email</label>
                            <input className="inputField" type="email" name="Email" id="EmailInput" placeholder="Your email address"/>
                        </div>

                        <div className="combo">
                            <label className="labelText" htmlFor="Password">Password</label>
                            <input className="inputField" type="password" name="Password" id="PasswordInput" placeholder="Password must be 8 characters or longer"/>
                        </div>
                    </div>
                    
                    <div className="buttons">
                        <Link to={"/login"}>Already have an account?</Link>
                        <button className="primaryButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;