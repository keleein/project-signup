import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import {Form,FormItem,Input,Button,Upload,Dialog,RadioGroup,Radio,Select,Option,Col,Row,Notification} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Row)
Vue.prototype.$notify = Notification

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
