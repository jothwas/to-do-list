import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ToDoGenerator from "./components/ToDoGenerator";
import ToDoList from "./components/ToDoList";

//current list was passed to todolist
function App() {
  const [list, setList] = useState([
    // id was removed
    { task: "test task 1", done: false, listId: 1 },
    { task: "test task 2", done: false, listId: 2 },
    { task: "test task 3", done: false, listId: 3 },
  ]);
  const [currentListId, setCurrentListId] = useState(1);
  return (
    <div className="App">
      <Header />
      <ToDoGenerator setList={setList} currentListId={currentListId} />

      <ToDoList
        list={list}
        setList={setList}
        currentListId={currentListId}
        setCurrentListId={setCurrentListId}
      />
    </div>
  );
}

export default App;
