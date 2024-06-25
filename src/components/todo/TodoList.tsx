import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="w-1/3   flex flex-col justify-center items-center">
      {state.map((todo: TTodo) => (
        <div
          className={` ${todo.isCompleted ? "line-through text-red-700" : ""}
          flex cursor-pointer shadow-lg gap-2 rounded-sm bg-slate-100 justify-center items-center w-1/2  my-2`}
          key={todo.id}
          onClick={() => dispatch({ type: "taskCompleted", payload: todo.id })}
        >
          <h4 className="text-purple-500">{todo.id}</h4>
          <p className="text-green-500">{todo.title}</p>
          <p className="text-blue-500">
            {todo.isCompleted ? "Completed" : "Not Completed"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
