import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col justify-center items-center ">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
