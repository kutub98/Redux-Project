import logo from "./logo.svg";
import "./App.css";
import Child from "./Components/child/Child";
import Parent from "./Components/child/Parent";
import StateContext from "./Context/StateContext/StateContext";
import FormInput from "./Components/child/Form/FormInput";

function App() {
  return (
    <div className="">
      <StateContext>
        {/* <Parent></Parent> */}
        <FormInput></FormInput>
      </StateContext>
    </div>
  );
}

export default App;
