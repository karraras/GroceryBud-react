import React from "react";
import List from "./List";
import Alert from "./Alert";

let itemz = [];
itemz = JSON.parse(localStorage.getItem("items")) || [];
function App() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  let time = new Date().getTime();
  let data = {
    id: time,
    value: value,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      itemz.push(data);
      localStorage.setItem("items", JSON.stringify(itemz));
      setList(JSON.parse(localStorage.getItem("items")));
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id) => {
    let newList = list.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(newList));
    setList(JSON.parse(localStorage.getItem("items")));
  };
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-contr">
          <input
            value={value}
            className="form-input"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn">add item</button>
        </div>
      </form>
      <List list={list} handleDelete={handleDelete} />
    </section>
  );
}

export default App;
