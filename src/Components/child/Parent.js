import React, { useContext, useState } from 'react';
import { stateManagement } from '../../Context/StateContext/StateContext';
import Child from './Child';

const Parent = () => {
    // const [count, setCount] = useState(0);
    const state  = useContext(stateManagement)
    const { count, setCount} = state
    return (
        <div>
            <div>
                <p>Parent</p>
                <h1>{count}</h1>
            </div>
            <Child count={count} setCount={setCount}></Child>
        </div>
    );
};

export default Parent;