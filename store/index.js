
const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
      if (!authUser) {

      } else {

        const { uid, email } = authUser
        const token = await authUser.getIdToken()
  
        commit('SET_USER', { uid, email, token })
      }
    }
  }
  const mutations = {
    SET_USER(state, user) {
      state.user = user
    }
  }
  
  const state = () => ({
    user: null
  })
  
  const getters = {
    getUser(state) {
      return state.user
    }
  }
  export default (getters, state, mutations, actions)