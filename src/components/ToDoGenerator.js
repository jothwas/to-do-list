import { useState } from "react";

const ToDoGenerator = ({ setList }) => {
  const [newToDo, setNewToDo] = useState("");
  const submit = (event) => {
    event.preventDefault();
    setList((prevList) => {
      const newList = [...prevList];
      newList.push({ id: newList.length + 1, task: newToDo, done: false });
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
