import { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
type TAction = {
  type: "addTodo" | "taskCompleted";
  payload: TTodo | string;
};

const typeConstants = {
  ADD_TODO: "addTodo",
  TASK_COMPLETED: "taskCompleted",
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstants.TASK_COMPLETED:
      return currentState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return currentState;
  }
};
type TodoProviderProps = {
  children: ReactNode;
};
const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
