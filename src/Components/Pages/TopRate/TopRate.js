import React from 'react';
import { useProducts } from '../../../Context/ProductProvider/ProductProvider';
import SingleTopRat from './SingleTopRat';

const TopRate = () => {
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
        content = Products.filter(product => product.rating >= 4).map((topSingle, idx) => (
            <SingleTopRat key={idx} topSingle ={topSingle}></SingleTopRat>
        ));
    }

      return (
        <div className="CardBox">
          {content}
        </div>
      );
};

export default TopRate;