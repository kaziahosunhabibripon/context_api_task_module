import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
    setTask(" ");
  };

  return (
    <div className="w-1/3 shadow-lg  rounded-md bg-slate-100 flex flex-col my-10 justify-center items-center ">
      <h1 className="mt-5 text-2xl font-medium text-blue-700">Add Todo</h1>
      <form
        onSubmit={handleSubmit}
        className=" shadow-slate-400 flex flex-col  p-1 my-10 justify-center items-center"
      >
        <label htmlFor="todo" className=" font-medium text-emerald-600 text-lg">
          Task
        </label>
        <input
          className=" p-2 my-2 border rounded-lg bg-slate-200 text-slate-900 border-gray-500 outline-none"
          type="text"
          name="todo"
          id="todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p-2 w-[80px] rounded-lg bg-violet-500 text-slate-100"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
