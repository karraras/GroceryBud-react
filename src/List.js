import React from "react";
const List = ({ list, handleDelete }) => {
  const [check, setCheck] = React.useState(false);
  return (
    <div className="items">
      {list.map((value, index) => {
        return (
          <div className="single-item" key={index}>
            <input type="checkbox" onChange={() => setCheck((e) => !e)} />
            <p
              style={{
                textTransform: "capitalize",
                textDecoration: check ? "line-through" : "none",
              }}
            >
              {value.value}
            </p>
            <button
              className="btn remove-btn"
              onClick={() => handleDelete(value.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
