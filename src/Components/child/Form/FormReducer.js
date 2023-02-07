import { useState } from "react";
import { actionType } from "./ActionTypes";



export const initialState = {
    FirstName: "",
    LastName: "",
    Email: "",
    gender: "",
    Education: "",
    message: "",
    number: 0,
    terms: false,
  };

export  const reducers = (state, action ) => {
    // console.log(action)
    switch(action.type){
      case actionType.INPUT:
      return{
        ...state,
        [action.payload.name] : action.payload.value,
      }
      case actionType.TOGGLE:
      return{
        ...state,
        terms: !state.terms
      }
      default:
      return state
    }
  };