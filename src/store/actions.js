export default {
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    updateItemCount({ commit }, { product, newCount }) {
      commit('updateItemCount', { product, newCount });
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  };