import { createStore } from "vuex";

const store = createStore( {
  state() {
    return {
      cart: [],
    }
  },
  mutations: {
    addToCart(state, product) {
      if (state.cart.some(item => item.name === product.name)) {
        state.cart.find(item => item.name === product.name).quantity++
      }
      else {
        state.cart.push({
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      }
    },
    removeFromCart(state, product) {
      state.cart.find(item => item.name === product.name).quantity--
      if (state.cart.find(item => item.name === product.name).quantity === 0) {
        state.cart.splice(state.cart.indexOf(product), 1)
      }
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product)
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }
})

export default store;