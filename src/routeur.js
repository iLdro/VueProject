import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/chretien',
            component: () => import('./components/chretien.vue')

        }
    ]
})