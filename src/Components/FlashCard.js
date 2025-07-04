const FlashCard = ({ cardData, onSelected, onLearn }) => {
    console.log(cardData);

    return (
        <div className="flash-card">
            <h2>{cardData.name}</h2>
            <ul>
                {cardData.flashcards.map((obj) => {
                    return <li key={obj.id}>{obj.question} </li>;
                })}
            </ul>
            <div className="button-group">
                <button
                    onClick={() => {
                        onLearn(true);
                    }}
                >
                    과제시작
                </button>
                <button
                    onClick={() => {
                        onSelected(null);
                    }}
                >
                    뒤로가기
                </button>
            </div>
        </div>
    );
};

export default FlashCard;
