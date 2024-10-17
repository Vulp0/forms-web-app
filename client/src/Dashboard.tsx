import Strip from "./components/Strip";
import Topbar from "./components/Topbar";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="dashboardContainer">
                <div className="panel dash">
                    <div className="dashHead">
                        <h3>My templates</h3>
                        <button>See all</button>
                    </div>
                    <div className="dashBody">
                        <Strip>
                            <div className="leftSide">template3</div>
                            <div className="rightSide">
                                <div className="tally">
                                    <p>12</p>
                                    <div className="placeholderIcon"></div>
                                </div>

                                <div className="tally">
                                    <p>15</p>
                                    <div className="placeholderIcon"></div>
                                </div>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">template2</div>
                            <div className="rightSide">
                                <div className="tally">
                                    <p>12</p>
                                    <div className="placeholderIcon"></div>
                                </div>

                                <div className="tally">
                                    <p>15</p>
                                    <div className="placeholderIcon"></div>
                                </div>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">template1</div>
                            <div className="rightSide">
                                <div className="tally">
                                    <p>12</p>
                                    <div className="placeholderIcon"></div>
                                </div>

                                <div className="tally">
                                    <p>15</p>
                                    <div className="placeholderIcon"></div>
                                </div>
                            </div>
                        </Strip>
                    </div>
                </div>

                <div className="panel dash">
                    <div className="dashHead">
                        <h3>Statistics</h3>
                    </div>
                    <div className="dashBodyRow">
                        <div className="leftSide">
                            <div className="dial">
                                <h2>3</h2>
                                <p>Templates made so far</p>
                            </div>
                        </div>
                        <div className="rightSide">
                            <div className="dial">
                                <h2>80</h2>
                                <p>Forms filled</p>
                            </div>
                            <div className="dial">
                                <h2>29</h2>
                                <p>Total comments</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel dash">
                    <div className="dashHead">
                        <h3>Form results</h3>
                        <button>See all</button>
                    </div>
                    <div className="dashBody">
                        <Strip>
                            <div className="leftSide">
                                <p><span>template2</span> by:</p>
                            </div>
                            <div className="rightSide">
                                <div className="pfpPlaceholder"></div>
                                <p>username23</p>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">
                                <p><span>template2</span> by:</p>
                            </div>
                            <div className="rightSide">
                                <div className="pfpPlaceholder"></div>
                                <p>username23</p>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">
                                <p><span>template2</span> by:</p>
                            </div>
                            <div className="rightSide">
                                <div className="pfpPlaceholder"></div>
                                <p>username23</p>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">
                                <p><span>template2</span> by:</p>
                            </div>
                            <div className="rightSide">
                                <div className="pfpPlaceholder"></div>
                                <p>username23</p>
                            </div>
                        </Strip>

                        <Strip>
                            <div className="leftSide">
                                <p><span>template2</span> by:</p>
                            </div>
                            <div className="rightSide">
                                <div className="pfpPlaceholder"></div>
                                <p>username23</p>
                            </div>
                        </Strip>
                    </div>
                </div>

                <div className="panel dash">
                    <div className="dashHead">
                        <h3>Latest comments</h3>
                        <button>See all</button>
                    </div>
                    <div className="dashBody">
                        <Strip isComment>
                            <div className="leftSide">
                                <div className="pfpPlaceholder"></div>
                                <p><span>username23</span>:</p>
                            </div>
                            <div className="rightSide">
                                <div className="commentText">
                                    <p>wow what a beautiful website, as functional as it is well designed</p>
                                </div>
                            </div>
                        </Strip>

                        <Strip isComment>
                            <div className="leftSide">
                                <div className="pfpPlaceholder"></div>
                                <p><span>username23</span>:</p>
                            </div>
                            <div className="rightSide">
                                <div className="commentText">
                                    <p>wow what a beautiful website, as functional as it is well designed</p>
                                </div>
                            </div>
                        </Strip>

                        <Strip isComment>
                            <div className="leftSide">
                                <div className="pfpPlaceholder"></div>
                                <p><span>username23</span>:</p>
                            </div>
                            <div className="rightSide">
                                <div className="commentText">
                                    <p>wow what a beautiful website, as functional as it is well designed</p>
                                </div>
                            </div>
                        </Strip>

                        <Strip isComment>
                            <div className="leftSide">
                                <div className="pfpPlaceholder"></div>
                                <p><span>username23</span>:</p>
                            </div>
                            <div className="rightSide">
                                <div className="commentText">
                                    <p>wow what a beautiful website, as functional as it is well designed</p>
                                </div>
                            </div>
                        </Strip>

                        <Strip isComment>
                            <div className="leftSide">
                                <div className="pfpPlaceholder"></div>
                                <p><span>username23</span>:</p>
                            </div>
                            <div className="rightSide">
                                <div className="commentText">
                                    <p>wow what a beautiful website, as functional as it is well designed</p>
                                </div>
                            </div>
                        </Strip>
                    </div>
                </div>

                <div className="panel">
                    <div className="dashHead">
                        <h3>Admin panel</h3>
                        <button>Manage users</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;