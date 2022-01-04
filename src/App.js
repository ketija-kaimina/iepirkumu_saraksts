import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { v4 as uuidv4 } from "uuid";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [list, setList] = useState(arr);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item && item.length <= 25 && !edit) {
      setList([...list, newItem]);
      setItem("");
      setError("");
    } else if (item && item.length <= 25 && edit && editId) {
      setList(
        list.map((el) => {
          if (el.id === editId) {
            return { ...el, item: item };
          }
          return el;
        })
      );
      setItem("");
      setEditId(null);
      setEdit(false);
      setError("");
    } else if (!item) setError("Produktu nevar pievienot, ja lauks ir tukšs!");
    else if (item.length > 25) setError("Vārds nevar būt garāks par 25 burtiem");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Iepirkumu saraksts</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Produkta nosaukums"
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Pievienot
        </button>
        {error && <p style={{ color: "black" }}>{error}</p>}
      </form>
      <div>
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            list={list}
            setList={setList}
            complete={c.complete}
            setItem={setItem}
            setEdit={setEdit}
            setEditId={setEditId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
