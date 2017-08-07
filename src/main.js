// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'

const vueTouch = require('vue-touch')

Vue.config.productionTip = false
/* eslint-disable no-console */
Vue.prototype.$log = console.log.bind(console)
/* eslint-enable no-console */

Vue.use(vueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})
