import { actionType } from "../../../Components/child/Form/ActionTypes"

export const productInitialState ={
    loading: false,
    Products: [],
    error: false,
    cart: [],
    WishList: [],
    ErrorMessage: ''
}
export const productReducer =(state, action) =>{
    switch(action.type){
        case actionType.Fetching_Start: 
        return {
            ...state,
            loading: true,
            error: false,
        };
        case actionType.Fetching_Success: 
        return {
            ...state,
            loading: false,
            Products: action.payload,
            error: false,
        };
        case actionType.Fetching_Error: 
        return {
            ...state,
            loading: false,
            error: true,
        };
        case actionType.AddToCart: 
        return {
            ...state,
           cart: [...state.cart, action.payload]
        };
        case actionType.AddWishList: 
        // if(state.WishList.find(item => item.id === action.payload.id)){
        //     return {
        //         ...state,
        //         error: true,
        //         ErrorMessage: "This item already are exist"
        //     }
        // }else{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                WishList: [...state.WishList, action.payload]
            };
        // }
        
        
        default:
        return state;
    }
}