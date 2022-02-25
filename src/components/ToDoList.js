import { useState } from "react";
//buttons use the passed down prop from app.js
const ToDoList = ({ list, setList, currentListId, setCurrentListId }) => {
  const copyList = list.map((toDo) => {
    return { ...toDo };
  });
  const filteredList = copyList.filter((item) => {
    if (item.listId === currentListId) {
      return true;
    } else {
      return false;
    }
  });
  console.log(currentListId);
  const deleteToDo = (index) => {
    console.log(index);
    setList((prevList) => {
      const copyList = prevList.map((toDo) => {
        return { ...toDo };
      });
      copyList.splice(index, 1);
      return copyList;
    });
  };
  return (
    <div>
      <ul>
        {filteredList.map((item, index) => {
          return (
            <li key={`${item.task} + ${index}`}>
              <input type="checkbox" />
              {item.task}
              <button>Edit</button>
              <button
                onClick={() => {
                  deleteToDo(index);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={() => setCurrentListId(1)}>
        no.1
      </button>
      <button type="button" onClick={() => setCurrentListId(2)}>
        no.2
      </button>
      <button type="button" onClick={() => setCurrentListId(3)}>
        no.3
      </button>
    </div>
  );
};

export default ToDoList;
