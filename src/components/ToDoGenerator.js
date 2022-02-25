import { useState } from "react";

const ToDoGenerator = ({ setList, currentListId }) => {
  const [newToDo, setNewToDo] = useState("");
  const submit = (event) => {
    event.preventDefault();
    setList((prevList) => {
      const newList = prevList.map((toDo) => {
        return { ...toDo };
      });

      newList.push({ task: newToDo, done: false, listId: currentListId });
      setNewToDo("");
      return newList;
    });
  };
  return (
    <form onSubmit={submit}>
      <label>
        Add a new task:
        <input
          value={newToDo}
          onChange={(event) => {
            setNewToDo(event.target.value);
          }}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default ToDoGenerator;
