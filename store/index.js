export const state = () => ({
    user: null,
    tables: {},
    error: "",
    isError: false,
    isLoading: false,
    isModalOpen: false,
    tableNames: ["table-name-1", "table-name-2"],
    pageNames: ["page-name-1", "page-name-2"],
    rowModules: [],
    portionSize: 4,
    columnsTitle: ['*column1*', '*column2*', '*column3*', '*column4*', '*column5*'],
    activeIndex: 0,
    activeNamePage: 'page-name-1',
    activePagePaginator: 1,
    indexUser: ""
})

export const actions = {
    async onAuthStateChangedAction({authUser, commit}) {
        if (!authUser) {
        } else {
            const {uid, email} = authUser
            const token = await authUser.getIdToken()
            commit('SET_USER', {uid, email, token})
        }
    },

    async login({commit}, {email, password}) {
        commit('SET_IS_ERROR', false)
        try {
            await this.$fire.auth.signInWithEmailAndPassword(email, password)
            this.$router.push('/')
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        }
    },

    async fetchTables({commit}) {
        commit('SET_LOADING', true)
        try {
            let result;
            await this.$fire.database
                .ref('tablesData').on("value", (e) => {
                    result = e.val()
                    commit('SET_TABLES', result)
                    commit('SET_LOADING', false)
                })
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        }
    },
    async editTableRow({commit, state, actions}, values) {
        commit('TOGGLE_MODAL', false)
        try {
            await this.$fire.database.ref(`tablesData/${state.activeNamePage}/${state.indexUser}`)
                .set(values)
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        }
    },
    setActiveIndex: ({commit, state}, name) => {
        commit('SET_ACTIVE_INDEX', state.pageNames.indexOf(name))
        commit('SET_ACTIVE_INDEX_PAGE', name)
    }
}

export const getters = {
    getTables: state => state.tables,
    getLoading: state => state.isLoading,
    getRowModules: state => state.rowModules,
    getIsModalOpen: state => state.isModalOpen,
    getTableNames: state => state.tableNames,
    getPageNames: state => state.pageNames,
    getPortionSize: state => state.portionSize,
    getColumnsTitle: state => state.columnsTitle,
    getActiveIndex: state => state.activeIndex,
    getActivePagePaginator: state => state.activePagePaginator,
    getError: state => state.error,
    getIsError: state => state.isError,
    getIndexUser: state => state.indexUser,
    getActiveNamePage: state => state.activeNamePage,
}
export const mutations = {
    SET_USER: (state, user) => state.user = user,
    SET_TABLES: (state, tables) => {
        const pageName = state.pageNames[state.activeIndex]
        state.tables = tables[pageName]
    },
    SET_LOADING: (state, value) => state.isLoading = value,
    TOGGLE_MODAL: (state, event) => state.isModalOpen = event,
    SET_ROW_MODULES: (state, rowModules) => state.rowModules = rowModules,
    SET_ACTIVE_INDEX: (state, index) => state.activeIndex = index,
    SET_ERROR: (state, error) => state.error = error,
    SET_IS_ERROR: (state, isError) => state.isError = isError,
    SET_INDEX_USER: (state, indexUser) => state.indexUser = indexUser,
    SET_ACTIVE_INDEX_PAGE: (state, name) => state.activeNamePage = name,
}