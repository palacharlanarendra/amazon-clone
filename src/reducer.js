/* eslint-disable default-case */
export const initialState = {
  basket: [],
};
export let reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const removeIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (removeIndex >= 0) {
        newBasket.splice(removeIndex, 1);
      }
      return { ...state, basket: newBasket };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
