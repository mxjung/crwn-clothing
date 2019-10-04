export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Check to see if Item already exists in cartItem
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // If not existing, add New item to cart
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
