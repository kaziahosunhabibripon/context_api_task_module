import ChildComp from "./ChildComp";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const CounterFunctional = ({ count, setCount }: TProps) => {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
      <ChildComp count={count} />
    </div>
  );
};

export default CounterFunctional;
