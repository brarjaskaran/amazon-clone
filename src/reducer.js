export const initialState = {
  basket: [436],
  user: null,
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      return { state };

    default:
      return state;
  }
}

export default reducer;
