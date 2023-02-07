import { createContext, useState } from "react";

export const stateManagement = createContext();
const StateContext = ({children}) => {
    const [count, setCount] = useState(0)

    const stateInfo  = {count, setCount}

    return (
        <div>
            <stateManagement.Provider value={stateInfo}>
               {children} 
            </stateManagement.Provider>
        </div>
    );
};

export default StateContext;