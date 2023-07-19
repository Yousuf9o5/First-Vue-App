import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "./style/main.css";
import App from "./App.vue";
import router from "./Router";
import store from "./Store/Store";

createApp(App).use(router).use(store).mount("#app");
