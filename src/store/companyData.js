export default {
    namespaced: true,
    state: {
        name: '',
        spend: '',
        spendAvailable: '',
        notes: '',
    },
    mutations: {
        SET_NAME(state, name) {
            state.name = name
        },
        SET_SPEND(state, spend) {
            state.spend = spend
        },
        SET_SPEND_AVAILABLE(state, spendAvailable) {
            state.spendAvailable = spendAvailable
        },
        SET_NOTES(state, notes) {
            state.notes = notes
        },
    }
}