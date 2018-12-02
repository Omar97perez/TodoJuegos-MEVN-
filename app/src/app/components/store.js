import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Fifa 19', image: '//placehold.it/200', price: 3999 },
      { invId: 2, name: 'Fifa 18', image: '//placehold.it/200', price: 3599 },
      { invId: 3, name: 'Fifa 17', image: '//placehold.it/200', price: 3399 },
      { invId: 4, name: 'Fifa 16', image: '//placehold.it/200', price: 1999 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});