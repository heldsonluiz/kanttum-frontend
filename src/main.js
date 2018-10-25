import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faArrowLeft, faEllipsisV, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faArrowLeft, faEllipsisV, faBookReader)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
