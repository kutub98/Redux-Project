import React, { createContext, useContext, useEffect, useState } from "react";

const productContent = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("ProductContext.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const value = {
    data,
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
