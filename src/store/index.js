import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import companyPage from './companyPage'
import companyData from './companyData'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
    modules: {
        companyPage,
        companyData,
	}
})