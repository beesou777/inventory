import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import './axios'
import './router/router'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')



