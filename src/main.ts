import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/reset.css'
import axios from 'axios'


// createApp(App).use(store).use(router).mount('#app')
const app=createApp(App)
app.config.globalProperties.$http=axios
app.use(store).use(router).mount('#app')
