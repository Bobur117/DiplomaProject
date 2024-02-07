import { createApp } from 'vue';
import  './assets/styles/style.scss';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./router/router";
import Swiper from "swiper";
import "swiper/css";



const pinia = createPinia();
const app = createApp(App);


app.use(pinia).use(router);
app.mount('#app');