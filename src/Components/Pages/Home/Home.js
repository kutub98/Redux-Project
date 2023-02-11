import React from "react";
import { useProducts } from "../../../Context/ProductProvider/ProductProvider";
import SingleCard from "./SingleCard";
import "./Home.css";

const Home = () => {
  const {
    state: { Products, loading, error },
  } = useProducts();
//   console.log(Products);

let content
if(loading){
     content =<p>Loading</p>;
}
if(error){
    content=<p>Something went wrong</p>;
}
if (!loading && !error && Products.length === 0) {
    content= <p>Nothing to show</p>;
}
if (!loading && !error && Products.length) {
    content = Products.map((singleCard, idx) => (
        <SingleCard key={idx} singleCard={singleCard}></SingleCard>
    ));
}
  return (
    <div className="CardBox">
      {content}
    </div>
  );
};

export default Home;

