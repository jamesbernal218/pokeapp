import { createRouter, createWebHashHistory } from 'vue-router'
import NavdarApp from '../components/pokemon/pages/NavdarApp.vue'
import NoPageFound from '../components/shared/pages/NoPageFound.vue'

const routes = [
    {
        path: '/',
        component: NavdarApp
    },
    {
        path: '/:pathMatch(.*)*',
        component: NoPageFound
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router