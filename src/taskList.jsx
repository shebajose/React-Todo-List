import Task from "./task";

const TaskList = ({todos, onChangeTodo, onDeleteTodo}) => {
  return (
    <div className="inline-block">
      {/* <ul> */}
      {todos.map(todo => (
        // <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        // </li>
      ))}
    {/* </ul> */}
    </div>
  );
};
export default TaskList;
