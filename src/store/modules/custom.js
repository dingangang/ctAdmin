/* eslint no-param-reassign: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */

export default{
  namespaced: true,
  state: {
    author: 'dingangang',
    counter: 0
  },
  getters: {},
  mutations: {
    increment: (state) => {
      state.counter += 1
    }
  },
  actions: {
    increment: (context) => {
      setTimeout(() => {
        context.commit('increment')
      }, 3000)
    }
  }
}
