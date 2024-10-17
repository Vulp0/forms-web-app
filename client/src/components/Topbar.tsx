import "../index.css";

function Topbar() {
    return (
        <div className="topbar">
            <a href="/">
                <h3 className="logoText">For<span>Me</span></h3>
            </a>
            <span className="material-symbols-outlined menuIcon">
                menu
            </span>
        </div>
    )
}

export default Topbar