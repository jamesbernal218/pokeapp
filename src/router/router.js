import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import(
            /*webpackChunkName: "Home"*/
            '../components/pokemon/pages/HomeApp')
    },
    {
        path: '/team',
        component: () => import(
            /*webpackChunkName: "Home"*/
            '../components/pokemon/pages/BuscadorPokemon')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(
            /*webpackChunkName: "NoPageFound"*/
            '../components/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router