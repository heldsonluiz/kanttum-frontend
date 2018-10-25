import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faArrowLeft,
  faEllipsisV,
  faBookReader,
  faCheck,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faArrowLeft, faEllipsisV, faBookReader, faCheck, faStarHalfAlt)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
