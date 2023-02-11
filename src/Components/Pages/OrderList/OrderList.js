import React from 'react';
import { useProducts } from '../../../Context/ProductProvider/ProductProvider';
import SingleOrder from "./SingleOrder"
const OrderList = () => {
    const {
        state: { cart, loading, error },
      } = useProducts();
    //   console.log(Products);
let content
if(loading){
     content =<p>Loading</p>;
}
if(error){
    content=<p>Something went wrong</p>;
}
if (!loading && !error && cart.length === 0) {
    content= <p>Nothing to show</p>;
}
if (!loading && !error && cart.length) {
    content = cart.map((singleCardOrder, idx) => (
        <SingleOrder key={idx} singleCardOrder={singleCardOrder}></SingleOrder>
    ));
}
  return (
    <div className="CardBox">
      {content}
    </div>
  );
};

export default OrderList;