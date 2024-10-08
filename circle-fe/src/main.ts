import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
// @ts-ignore
import Aura from '@/presets/aura'
// @ts-ignore
import Lara from '@/presets/lara'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  dark: false
});

app.use(ToastService)

app.use(createPinia())
app.use(router)



app.mount('#app')
