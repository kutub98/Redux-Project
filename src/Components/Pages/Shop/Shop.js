import React from 'react';
import { useProducts } from '../../../Context/ProductProvider/ProductProvider';
import SingleShop from './SingleShop';
const Shop = () => {
    const {
        state: { WishList, loading, error },
      } = useProducts();
    //   console.log(Products);
    
    let content
    if(loading){
         content =<p>Loading</p>;
    }
    if(error){
        content=<p>Something went wrong</p>;
    }
    if (!loading && !error && WishList.length === 0) {
        content= <p>Nothing to show</p>;
    }
    if (!loading && !error && WishList.length) {
        content = WishList.filter(product => product.rating >= 4).map((topSingle, idx) => (
            <SingleShop key={idx} topSingle ={topSingle}></SingleShop>
        ));
    }

      return (
        <div className="CardBox">
          {content}
        </div>
      );
};

export default Shop;