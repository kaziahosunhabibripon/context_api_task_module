import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currenState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return {
        ...currenState,
        name: action.payload,
      };
    case "addAge":
      return {
        ...currenState,
        age: action.payload,
      };
    case "addHobbies":
      return {
        ...currenState,
        hobbies: [...currenState.hobbies, action.payload],
      };

    default:
      return currenState;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
        className="border border-purple-300 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button
        className="p-2 w-[80px] rounded-lg bg-violet-500 text-slate-100"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default UseReducer;
