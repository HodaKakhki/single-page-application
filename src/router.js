import { createRouter, createWebHistory } from 'vue-router';
import IndexUser from './pages/users/IndexUser.vue'
import ShowUser from './pages/users/ShowUser.vue'
import IndexPost from './pages/posts/IndexPost.vue'
import ShowsPost from './pages/posts/ShowPost.vue'
import CreatePost from './pages/posts/CreatePost.vue'

import HomePage from './pages/HomePage.vue'


const routes = [{ path: "/", name: "home", component: HomePage },
    { path: "/users", name: "users", component: IndexUser },
    { path: "/users/:id", name: 'userId', component: ShowUser },
    { path: "/posts", name: 'post', component: IndexPost },
    { path: "/posts/:id", name: 'postId', component: ShowsPost },
    { path: "/create", name: 'createPost', component: CreatePost },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;