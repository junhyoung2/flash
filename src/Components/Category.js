const Category = ({ cardData,onSelected }) => {
  console.log(cardData[0].name);

  return (
    <div className="category">
      <h1>조사병단 도전 과제</h1>
      <div className="category-wrap">
        {
          cardData.map((item) => (
            <button key={item.id} onClick={()=>{onSelected(item)}}>{item.name}</button>
          ))
        }
      </div>
    </div>
  );
};

export default Category;
