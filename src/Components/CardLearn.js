import { useState } from "react";

const CardLearn = ({ cardData, onExit }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [show, setShow] = useState(false);

    const handleNext = () => {
        if (currentIdx + 1 < cardData.length) {
            setCurrentIdx(currentIdx + 1);
            setShow(false); // 다음 카드로 넘어갈 때 답변 숨기기
        } else {
            onExit(true);
        }
    };

    const handleExit = () => {
        onExit(true);
    };

    return (
        <div className="learn-mode">
            <h2>조사병단 도전 과제</h2>
            <p>질문 : {cardData[currentIdx].question}</p>
            {show && <p>답변 : {cardData[currentIdx].answer}</p>}
            <div className="button-group">
                <button onClick={() => setShow(!show)}>
                    {show ? "답변닫기" : "답변보기"}
                </button>
                <button onClick={handleNext}>다음 카드</button>
                <button
                    onClick={() => {
                        onExit(true);
                    }}
                >
                    학습 종료
                </button>
            </div>
        </div>
    );
};

export default CardLearn;
