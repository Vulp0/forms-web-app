import "../index.css";

function Topbar() {
    return (
        <div className="topbar">
            <a href="/">
                <h1 className="logoText">For<span>Me</span></h1>
            </a>
            <span className="material-symbols-outlined menuIcon">
                menu
            </span>
        </div>
    )
}

export default Topbar