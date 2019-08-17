///<reference path="../node_modules/vue-tsx-support/options/enable-nativeon.d.ts" />
import Vue from 'vue'
import App from './App'
import { ofType } from 'vue-tsx-support'
import 'ant-design-vue/dist/antd.css'
import { DatePicker } from 'ant-design-vue'
export const AntDatePicker = ofType<Partial<DatePicker>>().convert(DatePicker)
Vue.config.productionTip = false

Vue.component(DatePicker.name, DatePicker)
new Vue({
  render: h => h(App),
}).$mount('#app')
