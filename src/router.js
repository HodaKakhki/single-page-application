import { createRouter, createWebHistory } from 'vue-router';
import IndexUser from './pages/users/IndexUser.vue'
import ShowUser from './pages/users/ShowUser.vue'
import HomePage from './pages/HomePage.vue'


const routes = [{ path: "/", name: "home", component: HomePage },
    { path: "/users", name: "users", component: IndexUser },
    {  path: "/users/:id", name: 'userId', component: ShowUser }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;