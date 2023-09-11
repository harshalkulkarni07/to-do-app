import "./styles.css";
import { useState } from "react";
export default function App() {
  const [inputVa, setInputValue] = useState("");
  const [task, SetTask] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleCreateTask = (event) => {
    SetTask((oldArray) => [...oldArray, inputVa]);
  };
  return (
    <div className="App">
      {/* Input to create task */}
      <input type="text" onChange={handleInputChange}></input>
      <button onClick={handleCreateTask}>Add teask</button>
      {task &&
        task.map((index) => {
          return <div>{index}</div>;
        })}
    </div>
  );
}
