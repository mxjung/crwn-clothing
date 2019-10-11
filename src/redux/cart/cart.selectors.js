import { createSelector } from "reselect";

// Input selector: Function that takes in the whole state and outputs a slice of it
const selectCart = state => state.cart;

// Takes 2 inputs, 1st: an array of input selectors, 2nd: a function that returns value we want out of the selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
