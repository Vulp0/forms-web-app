// import { useParams } from "react-router-dom";
import "./TemplateInfo.css";
import Tag from "./components/Tag";
import Topbar from "./components/Topbar";

function TemplateInfo() {
    // let { templateId } = useParams();

    return (
        <div className="content">
            <Topbar></Topbar>
            <div className="panel templatePanel">
                <div className="templateInformation">
                    <div className="infoHead">
                        <h1>Javascript knowledge test</h1>
                        <div className="imgPlaceholder">⠀</div>
                    </div>
                    <div className="infoBody">
                        <div className="infoSection">
                            <p>Author: <span>randomUser112</span></p>
                        </div>
                        <div className="infoSection">
                            <p>Created: <span>2020/11/04T14:40:22</span></p>
                        </div>
                        <div className="infoSection">
                            <p>Topics:</p>
                            <div className="tagBox">
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                            </div>
                        </div>
                        <div className="infoSection">
                            <p>Tags:</p>
                            <div className="tagBox">
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                                <Tag displayText="Quiz" />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="primaryButton">Fill form</button>

                <div className="templateComments">
                    <div className="commentBox">
                        <form className="commentForm" action="">
                            <textarea className="inputField" name="" id="" placeholder="Add a comment..."></textarea>
                            <button type="submit">Post</button>
                        </form>
                    </div>

                    <div className="commentList">
                        <h2><span>3</span> Comments</h2>

                        <div className="comment">
                            <p className="commentDate">2024/12/12T05:30:19</p>
                            <div className="commentBody">
                                <div className="pfpPlaceholder"></div>
                                <p>This is a comment, idk what to type in here. Man im hungry.</p>
                            </div>
                        </div>

                        <div className="comment">
                            <p className="commentDate">2024/12/12T05:30:19</p>
                            <div className="commentBody">
                                <div className="pfpPlaceholder"></div>
                                <p>This is a comment, idk what to type in here. Man im hungry.</p>
                            </div>
                        </div>

                        <div className="comment">
                            <p className="commentDate">2024/12/12T05:30:19</p>
                            <div className="commentBody">
                                <div className="pfpPlaceholder"></div>
                                <p>This is a comment, idk what to type in here. Man im hungry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateInfo;