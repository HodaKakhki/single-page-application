import { createRouter, createWebHistory } from 'vue-router';
import IndexUser from './pages/users/IndexUser.vue'


import HomePage from './pages/HomePage.vue'
const routes = [{ path: "/", name: "home", component: HomePage },
                { path: "/users", name: "users", component: IndexUser }]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;