
export const state = () => ({
    users: {},
    token: null,
    user: null,
})

export const actions = {
    // setToken: (state) => {
    //     state.token = localStorage.getItem('token')
    // },
    // clearToken: (state) => {
    //     localStorage.removeItem('token')
    //     state.token = localStorage.getItem('token')
    // },
    async onAuthStateChangedAction(state, { authUser }) {
        if (!authUser) {
            await this.$router.push({path: '/login'})
        } else {
            const { uid, email } = authUser
            state.commit('SET_USER', {uid, email})
        }
    }
}
export const getters = {
    getToken: (state) => state.token,
    getUsers: (state) => state.users,
    getUser: (state) => state.user
};
export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}
export default {
    state, actions, getters, mutations
}