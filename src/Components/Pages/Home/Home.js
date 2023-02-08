import React from 'react';
import { useProducts } from '../../../Context/ProductProvider/ProductProvider';

const Home = () => {
    const {data}= useProducts()
    console.log(data)
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;