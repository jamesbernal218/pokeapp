import { createRouter, createWebHashHistory } from 'vue-router'
import NavdarApp from '../components/pokemon/pages/NavdarApp.vue'

const routes = [
    { path: '/', component: NavdarApp },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router