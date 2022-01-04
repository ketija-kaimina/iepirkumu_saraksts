import React from "react";
import "./Item.css";

const Item = ({
  id,
  item,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  complete,
}) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "#a339a0",
          fontSize: "22px",
        }}
      />
      <img
        style={{ cursor: "pointer" }}
        onClick={() => remove(id)}
        src="https://img.icons8.com/fluency/48/000000/trash.png"
        alt="Izdzēst"
      />
      <img
        style={{ cursor: "pointer" }}
        src="https://img.icons8.com/emoji/36/000000/pencil-emoji.png"
        onClick={() => handleItem(id)}
        alt="edit item"
      />
    </div>
  );
};
export default Item;
