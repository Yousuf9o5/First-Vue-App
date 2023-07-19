import { createRouter, createWebHistory } from "vue-router";
import Home from "./Views/Home.vue";
import About from "./Views/About.vue";
import Content from "./Views/Content.vue";
import Contact from "./Views/Contact.vue";
import Login from "./Views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/content", component: Content },
    { path: "/login", component: Login },
  ],
});

export default router;
