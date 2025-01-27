import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
const routes=[
    {
        name:"Home",
        component:Home,
        path:"/",
    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/sign-up",
    },
    {
        name:"Login",
        component:Login,
        path:"/login",
    },
    {
        name:"Add",
        component:Add,
        path:"/add",
    },
    {
        name:"Update",
        component: Update,
        path:"/update/:id",
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user-info');

    if (to.meta.requiresAuth && !user) {
        // If route requires auth and user is not logged in, redirect to SignUp
        next({ name: 'SignUp' });
    } else if ((to.name === 'SignUp' || to.name === 'Login') && user) {
        // If user is logged in, redirect away from SignUp/Login
        next({ name: 'Home' });
    } else {
        next(); // Allow access to the route
    }
});

export default router;