import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './p/Home.vue'
import Portfolio from './p/Portfolio.vue'

const router = createRouter({
    history: createWebHistory('./p/'),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/portfolio', name: 'Portfolio', component: Portfolio}
    ]
})

createApp(App)
.use(router)
.mount('#app')
