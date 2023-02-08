import logo from "./logo.svg";
import "./App.css";
import Child from "./Components/child/Child";
import Parent from "./Components/child/Parent";
import StateContext from "./Context/StateContext/StateContext";
import FormInput from "./Components/child/Form/FormInput";
import Route from "./Routes/Route";
import ProductProvider from "./Context/ProductProvider/ProductProvider";

function App() {
  return (
    <div className="">
      <ProductProvider>
        <StateContext>
          <Route></Route>
        </StateContext>
      </ProductProvider>
    </div>
  );
}

export default App;
