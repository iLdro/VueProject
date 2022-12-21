
import home from '../views/home.vue'
import chretien from '../views/chretien.vue'
import muslim from '../views/muslim.vue'
import jewish from '../views/jewish.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
    {
        path: "/",
        name: "Index",
        component: home
    },
    {
        path:"/chretien",
        name: "About",
        component: chretien
    },{
        path:"/muslim",
        name: "Muslim",
        component: muslim
    },{
        path:"/jewish",
        name: "Jewish",
        component: jewish
    }
    
]

let router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router;