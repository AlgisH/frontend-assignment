import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import CompanyData from '../src/components/company/CompanyData.vue'

// STORE
import companyData from '../src/store/companyData'

// GLOBALS
import Field from '../src/components/globals/Field.vue'
import Modal from '../src/components/globals/Modal.vue'

// PLUGINS
import VeeValidate from 'vee-validate'

const localVue = createLocalVue()

localVue.use(VeeValidate)
localVue.use(Vuex)


describe('CompanyData.vue', () => {
  let state
  let mutations
  let store
  let wrapper

  beforeEach(() => {
    state = companyData.state
    mutations = {
      SET_NAME: jest.fn(),
      SET_SPEND: jest.fn(),
      SET_SPEND_AVAILABLE: jest.fn(),
      SET_NOTES: jest.fn(),
    }
    store = new Vuex.Store({
      modules: {
        companyData: {
          namespaced: true,
          state,
          mutations,
        }
      }
    })
    wrapper = shallowMount(CompanyData, { 
      store, 
      localVue,
      stubs: {
        'Field': Field,
        'Modal': Modal,
      },
      sync: false
    })  
  })


  it('dispatches "SET_NAME" when company name is entered', () => {
    
    const input = wrapper.find('[name="companyName"]')

    input.element.value = 'input'
    input.trigger('input')
    wrapper.vm.$nextTick(() => {
      expect(mutations['SET_NAME']).toHaveBeenCalled()
    })
  })

  it('dispatches "SET_SPEND" when company spend is entered', () => {

    const input = wrapper.find('[name="companySpend"]')

    input.element.value = '123'
    input.trigger('input')
    wrapper.vm.$nextTick(() => {
      expect(mutations['SET_SPEND']).toHaveBeenCalled()
    })
  })
  
  it('dispatches "SET_SPEND_AVAILABLE" when company spend available is entered', () => {

    const input = wrapper.find('[name="companySpendAvailability"]')

    input.element.value = '123 - 234'
    input.trigger('input')
    wrapper.vm.$nextTick(() => {
      expect(mutations['SET_SPEND_AVAILABLE']).toHaveBeenCalled()
    })
  })
})