export const state = () => ({
    tokenUser: "",
    error: "",
    isError: false,
    isLoading: false,
    isModalOpen: false,
    portionSize: 4,
    activeIndex: 0,
    activePagePaginator: 1,
    indexUser: "",
    activeNamePage: 'page-name-1',
    currentTable: {},
    rowModules: [],
    tableNames: ["table-name-1", "table-name-2"],
    pageNames: ["page-name-1", "page-name-2"],
    columnsTitle: ['*column1*', '*column2*', '*column3*', '*column4*', '*column5*'],
})

export const actions = {

    async login({commit, state}, {email, password}) {
        commit('SET_LOADING', true)
        commit('SET_IS_ERROR', false)
        try {
            const res = await this.$fire.auth.signInWithEmailAndPassword(email, password)
            console.log(res.user.uid)
            this.$router.push(`/${state.activeNamePage}`)
            commit('SET_LOADING', false)
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        }
    },
    async logout({commit}) {
        commit('SET_LOADING', true)
        try {
            await this.$fire.auth.signOut()
            this.$router.push('/login')
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        } finally {
            commit('SET_LOADING', false)
        }
    },
    async fetchTables({commit}, namePage) {
        try {
            commit('SET_LOADING', true)
            let result;
            await this.$fire.database
                .ref(`tablesData/${namePage}`).on("value", (e) => {
                    result = e.val()
                    commit('SET_CURRENT_TABLE', result)
                    commit('SET_LOADING', false)
                })
        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        }
    },
    async editTableRow({commit, state, actions}, values) {
        commit('SET_LOADING', true)
        commit('TOGGLE_MODAL', false)
        try {
            await this.$fire.database.ref(`tablesData/${state.activeNamePage}/${state.indexUser}`)
                .set(values)

        } catch (error) {
            commit('SET_ERROR', error.message)
            commit('SET_IS_ERROR', true)
        } finally {
            commit('SET_LOADING', false)
        }
    },
    setActivePage: ({commit, state}, name) => {
        commit('SET_ACTIVE_INDEX', state.pageNames.indexOf(name))
        commit('SET_ACTIVE_NAME_PAGE', name)
    }
}

export const getters = {
    getCurrentTable: state => state.currentTable,
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
    getActiveNamePage: state => state.activeNamePage,
}
export const mutations = {
    SET_USER: (state, user) => state.user = user,
    SET_CURRENT_TABLE: (state, table) => {
        state.currentTable = table
    },
    SET_LOADING: (state, value) => state.isLoading = value,
    TOGGLE_MODAL: (state, event) => state.isModalOpen = event,
    SET_ROW_MODULES: (state, rowModules) => state.rowModules = rowModules,
    SET_ACTIVE_INDEX: (state, index) => state.activeIndex = index,
    SET_ERROR: (state, error) => state.error = error,
    SET_IS_ERROR: (state, isError) => state.isError = isError,
    SET_INDEX_USER: (state, indexUser) => state.indexUser = indexUser,
    SET_ACTIVE_NAME_PAGE: (state, name) => state.activeNamePage = name,
}