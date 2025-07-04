export const useText = defineStore('useText', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
