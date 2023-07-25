import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import clickout from "./directives/clickoutside";


import '../src/styles/index.scss';


const app = createApp(App);

app.use(router);
app.use(store);

app.directive("clickout", clickout);


app.mount('#app');
