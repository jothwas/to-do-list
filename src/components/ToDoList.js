const ToDoList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={`${item.task} + ${index}`}>
              <input type="checkbox" checked="" />
              {item.task}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
