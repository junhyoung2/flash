const Result = ({ onExit }) => {
    return (
        <div className="finish">
            <p>조사병단 도전 과제 완료</p>
            <button onClick={onExit}>처음으로</button>
        </div>
    );
};

export default Result;