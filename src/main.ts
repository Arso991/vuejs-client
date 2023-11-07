import "./assets/base.css";

import { createApp } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import { useUsersStore } from "./stores/users";

const pinia = createPinia();
const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose : 5000,
} as ToastContainerOptions)

app.use(pinia);

app.use(router);

app.mount("#app");
