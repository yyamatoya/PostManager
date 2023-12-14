import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import router from "./router";
import App from "../views/app.vue";

import vuetify from "../plugins/vuetify.js";
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
.use(router)
.use(vuetify)
.mount("#app");
