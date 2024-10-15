import { useNavigate } from "react-router-dom";
import "./Home.css";
import Topbar from "./components/Topbar";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="homeContent">
            <Topbar></Topbar>
            <div className="hero">
                <h1>The only form making service you'll ever need</h1>
                <p>Create and share forms quickly and easily. For free, for ever.</p>
                <button className="primary-button" onClick={() => navigate("/")}>Get started</button>
            </div>
        </div>
    )
}

export default Home;