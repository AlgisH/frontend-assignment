import 'Styles/main.scss';
import Vue from 'vue';
import VeeValidate from 'vee-validate'

// COMPONENTS
import App from 'Components/App.vue'

import router from './router'

Vue.use(VeeValidate)

// EXTEND VALIDATION RULES
import { Validator } from 'vee-validate'

// RULE - FORMATTED CURRENCY
Validator.extend('positiveCurrency', {
  getMessage: field => `${field} must be positive.`,
  validate: value => 
    // console.log('validating: ', value)
    parseFloat(value
      .replace(/\./g,' ')
      .replace(/\,/g,' ')
      .replace(/\$/g,' ')
    ) !== isNaN
  // }
});

// REGISTER GLOBAL COMPONENTS
import { definitions } from 'Components/globals'
definitions.map(componentName => Vue.component(componentName, require(`Components/globals/${componentName}.vue`).default))

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App),
});
