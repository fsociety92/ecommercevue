import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql from '@urql/vue';
// import autorization from '@autorization/index.js'
import App from './App.vue'
import router from './router'
import 'flowbite';

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(urql, {
    url: 'http://38.242.229.113:8055/graphql',
});

// autorization.forEach(autorization => {
//     app.component(autorization.name, autorization)
//   });

app.mount('#app')
