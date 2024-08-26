import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';
import './assets/global.scss';


createApp(App).use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).use(ToastService).mount('#app')
