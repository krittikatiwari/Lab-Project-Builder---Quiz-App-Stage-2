export default function(){
    return(
        <div>
            <div className="result">
                <h1>Result</h1>
            </div>
            <div className="cont">
                <div className="prac">
                    <h3>You need more practice! </h3>
                </div>
                <div className="score">
                    <h2>Your score is 20%</h2>
                </div>
                <div className="set">
                    <div>Total number of questions</div>
                    <div>15</div>
                </div>
                <div className="set">
                    <div>Number of attempted questions</div>
                    <div>9</div>
                </div>
                <div className="set">
                    <div>Number of correct answers</div>
                    <div>3</div>
                </div>
                <div className="set">
                    <div>Number of wrong answers</div>
                    <div>6</div>
                </div>
            </div>
            <div>
                <button className="again">Play again</button>
                <button className="back">Back to home</button>
            </div>
        </div>
    )
}