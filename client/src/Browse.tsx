import ResultCard from "./components/ResultCard";
import Topbar from "./components/Topbar";
import "./Browse.css";

function Browse() {
    return (
        <div className="content">
            <Topbar></Topbar>
            <div className="panel resultsPanel">
                <form className="searchBar" autoComplete="off">
                    <input className="searchButton" type="submit" value="Search" />
                    <input className="searchField" type="search" name="" id="" placeholder="Search templates, or not..." />
                </form>
                <div className="searchResults">
                    <ResultCard></ResultCard>
                    <ResultCard></ResultCard>
                    <ResultCard></ResultCard>
                    <ResultCard></ResultCard>
                </div>
            </div>
        </div>
    )
}

export default Browse;