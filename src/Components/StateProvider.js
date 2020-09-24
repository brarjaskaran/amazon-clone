// setup data later
// we need to track the basket
import React, { createContext, useContext, useReducer } from "react";

// this is data layer
export const StateContext = createContext();

// Build a provider
// export const StateProvider = ({ reducer, initialState, childern }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {childern}
//   </StateContext.Provider>
// );

export function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
