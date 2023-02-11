import React from 'react';
import { useProducts } from '../../../Context/ProductProvider/ProductProvider';
import { actionType } from '../../child/Form/ActionTypes';

const SingleShop = ({topSingle}) => {
    const {image, model, price, rating} = topSingle
    const {dispatch} = useProducts()
  return (
    <div className="">
      <div className="rounded-md shadow-md bg-gray-50 text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">Model: {model}</h2>
            <p className="text-gray-800"> Price: 
                {price}
            </p>
            <p className="text-gray-800"> rating: 
                {rating}
            </p>
          </div>
          <button
          onClick={()=> dispatch({type: actionType.AddToCart, payload: topSingle})}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-pink-600 text-gray-50"
          >
           Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;