import "../ResultCard.css";

function ResultCard() {
    return (
        <div className="resultCard">
            <div className="resultImg"></div>

            <div className="resultInfo">
                <h2 className="resultName">template3</h2>
                <div className="resultAuthor">
                    <p>By: </p>
                    <span>user23</span>
                </div>
                <div className="resultTopics">
                    <p>Topics: </p>
                    <span>Quiz </span>
                    <span>Quiz </span>
                    <span>Quiz </span>
                    <span>Quiz</span>
                    <span>Quiz</span>
                    <span>Quiz</span>
                    <span>Quiz</span>
                </div>
                <div className="resultTags">
                    <p>Tags: </p>
                    <span>Quiz</span>
                    <span>Quiz</span>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;