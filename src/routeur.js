import { createRouter, createWebHistory } from 'vue-router'
// Import readfile from node
import { readFileSync } from 'fs'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/chretien',
            component: () => import('./components/chretien.vue')

        }
    ]
})