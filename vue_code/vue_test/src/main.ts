import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import eventBus from 'vue3-eventbus'

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(eventBus);
app.mount('#app');