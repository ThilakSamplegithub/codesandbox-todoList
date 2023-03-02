import { useState } from "react";
import TodoList from "./TodoList";
export default function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  function handleAdd() {
    const newItem = {
      id: Date.now() * Math.random() + text,
      text: text,
      status: false
    };
    const itemAfterAddition = [...todo, newItem];
    setTodo(itemAfterAddition);
    setText("");
  }
  function toggle(id) {
    let togglededArr = todo.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodo(togglededArr);
  }
  return (
    <>
      <div style={{ backgroundColor: "rgb(94,0,184)" }}>Title</div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Title"
        />
      </div>
      <div className="button" onClick={handleAdd}>
        {" "}
        <button>ADD</button>
      </div>
      <TodoList todo={todo} toggle={toggle} />
    </>
  );
}
