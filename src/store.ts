import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 1
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})

export const useColorStore = defineStore({
  id: 'color',
  state: () => ({
    red: 0,
    blue: 0,
    green: 0
  }),
  getters: {
    hex: (state) => {
      return "#" + Number(state.red).toString(16).padStart(2, '0') + Number(state.green).toString(16).padStart(2, '0') + Number(state.blue).toString(16).padStart(2, '0')
    }
  }
})

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      { name: "Widgets", price: 10 },
      { name: "Doodads", price: 8 },
      { name: "Roundtuits", price: 12 },
      { name: "Fluff", price: 4 },
      { name: "Goobers", price: 7 },
    ],
    cart: [] as Crt[]
  }),
  getters: {
    cartTotal: (state) => state.cart.reduce((total: number, item: Crt) => {
      let product = state.products.find(p => p.name === item.name)
      if (product) return total + (product.price * item.quantity)
      else return total
    }, 0)
  },
  actions: {
    addToCart(product: Obj) {
      const index = this.cart.findIndex((item: Crt) => item.name === product.name)
      if (index !== -1) {
        this.cart[index].quantity++
      } else {
        this.cart.push({
          name: product.name,
          quantity: 1
        })
      }
    },
    removeFromCart(product: Obj) {
      const index = this.cart.findIndex(p => p.name === product.name)
      if (index !== -1) {
        this.cart[index].quantity--
        if (this.cart[index].quantity === 0) {
          this.cart.splice(index, 1)
        }
      }
    }
  }
})

interface Obj {
  name: string
  price: number
}
interface Crt {
  name: string
  quantity: number
}