import { useContext } from "react";
import { stateManagement } from "../../Context/StateContext/StateContext";


const Child = () => {
//   const [count, setCount] = useState(0);
    const state = useContext(stateManagement)
    const { count, setCount} = state
    console.log(state);
  return (
    <div>
      <div>
        <p>child</p>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
        <button onClick={() => setCount((prevNum) => prevNum + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Child;
