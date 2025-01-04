import { createStore } from 'vuex'
import axios from 'axios'

// Define API base URL
const API_BASE_URL = fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => response.json());

export default createStore({
  state: {
    keyFacts: null,
    loading: false,
    error: null
  },
  mutations: {
    SET_KEY_FACTS(state, facts) {
      state.keyFacts = facts
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchKeyFacts({ commit }) {
      commit('SET_LOADING', true)
      try {
        const response = await axios.get(`${API_BASE_URL}/ibm/key-facts`)
        commit('SET_KEY_FACTS', response.data)
        commit('SET_ERROR', null)
      } catch (error) {
        console.error('Error fetching key facts:', error)
        commit('SET_ERROR', 'Failed to fetch key facts. Please try again later.')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    getKeyFacts: (state) => state.keyFacts,
    isLoading: (state) => state.loading,
    getError: (state) => state.error
  }
})