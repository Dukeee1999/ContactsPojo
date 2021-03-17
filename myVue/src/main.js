import Vue from 'vue'
import App from './App.vue'
import Head from './Header.vue'
import List from './List.vue'
// import Alert from './Alert.vue'

Vue.component(Head.name,Head)
Vue.component(List.name,List)
// Vue.component(Alert.name,Alert)
new Vue({
  el: '#app',
  render: h => h(App)
})
