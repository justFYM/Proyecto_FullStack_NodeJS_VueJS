import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import { Bar } from 'vue-chartjs'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Vue from 'vue'
import AxiosPlugin from 'vue-axios-cors';


const app = createApp(App)

app.use(BootstrapVue3)
import axios from 'axios'
import VueAxios from 'vue-axios'
 
app.use(VueAxios, axios)

axios.defaults.baseURL = '';


app.use(store)
app.use(router)
app.mount('#app')
