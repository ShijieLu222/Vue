import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import Antd from 'ant-design-vue';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
app.use(Antd); // 注册 Ant Design Vue
