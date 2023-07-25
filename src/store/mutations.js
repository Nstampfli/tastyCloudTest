export default {
  addToCart(state, product) {
    const existingProduct = state.cartItems.find(
      (item) => item.title === product.title
    );

    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      product.count = 1;
      state.cartItems.push(product);
    }
  },

  updateItemCount(state, { product, newCount }) {
    const item = state.cartItems.find((cartItem) => cartItem.title === product.title);
    if (item) {
      item.count = newCount;
    }
  },

  removeFromCart(state, product) {
    state.cartItems = state.cartItems.filter(
      (item) => item.title !== product.title
    );
  },
  clearCart(state) {
    state.cartItems = [];
  },
};
