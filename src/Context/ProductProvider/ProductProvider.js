import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { actionType } from "../../Components/child/Form/ActionTypes";
import { productInitialState, productReducer } from "../State/ProductState/ProductsReducer";

const productContent = createContext();

const ProductProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  const [state, dispatch]= useReducer(productReducer, productInitialState)
  console.log(state)
  useEffect(() => {
    dispatch({type: actionType.Fetching_Start})
    fetch("ProductContext.json")
      .then((res) => res.json())
      .then((data) => dispatch({type: actionType.Fetching_Success, payload: data}))
      .catch(error => {
        dispatch({type: actionType.Fetching_Error})
      })
  }, []);

  const value = {
    state,
    dispatch,
  };
  return (
    <div>
      <productContent.Provider value={value}>{children}</productContent.Provider>
    </div>
  );
};

export const useProducts = () => {
  const Context = useContext(productContent);
  return Context;
};

export default ProductProvider;
