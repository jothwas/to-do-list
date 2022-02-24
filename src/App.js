import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ToDoGenerator from "./components/ToDoGenerator";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([
    { id: 1, task: "test task 1", done: false },
    { id: 2, task: "test task 2", done: false },
    { id: 3, task: "test task 3", done: false },
  ]);
  return (
    <div className="App">
      <Header />
      <ToDoGenerator setList={setList} />
      <ToDoList list={list} />
    </div>
  );
}

export default App;
