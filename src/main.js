import Vue from 'vue'
import App from './App.vue'
import * as vClickOutside from 'v-click-outside-x'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.use(vClickOutside)
Vue.component('VueSlider', VueSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
