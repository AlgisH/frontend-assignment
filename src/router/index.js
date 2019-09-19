import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import CompanyData from 'Components/company/CompanyData.vue'
import CompanyTable from 'Components/company/CompanyTable.vue'
import CompanyPage from 'Components/company/CompanyPage.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            redirect: 'company/data' 
        },
        {
            path: '/company/data',
            name: 'CompanyData',
            component: CompanyData, 
        },
        {
            path: '/company/table',
            name: 'CompanyTable',
            component: CompanyTable, 
        },
        {
            path: '/company/page',
            name: 'CompanyPage',
            component: CompanyPage, 
        },
    ],
  mode: 'history',
})

export default router