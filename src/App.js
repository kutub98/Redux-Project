import logo from "./logo.svg";
import "./App.css";
import Child from "./Components/child/Child";
import Parent from "./Components/child/Parent";
import StateContext from "./Context/StateContext/StateContext";
import FormInput from "./Components/child/Form/FormInput";
import Route from "./Routes/Route";




function App() {
  return (
    <div className="">
      
    
      <StateContext> 
        <Route></Route>
       </StateContext>
      
      
    </div>
  );
}

export default App;
