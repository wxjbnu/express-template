import Vuex from 'vuex'

// import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 10,
      users: [{name: 'init'}]
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      setUsers (state, data) {
        state.users = data
      }
    }
  })
}

export default createStore
