import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyDown() {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  function handleClick() {
    if (input) {
      setTask([...task, input]);
      setInput("");
    }
  }
  function handleDelete(index) {
    setTask(task.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type="text"
        placeholder="Enter here..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {task.map((taskItem, index) => (
          <li key={index}>
            {taskItem}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
