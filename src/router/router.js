
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProductPage from "@/pages/ProductPage.vue";


const router = createRouter ({
   history: createWebHashHistory(),
   routes:[
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,   
    },
    {
        path: '/product/:id',
        name: 'ProductPage',
        component: ProductPage,   
    },

]
});

export default router;
