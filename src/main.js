import { createApp, VueElement } from "vue";
import App from './App.vue';

// Define CSS & More
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events';

const app = createApp(App)

// Now every single one of our compnents will have the $bus prop so we can use our global event bus everywhere
app.config.globalProperties.$bus = $bus

app.mount("#app")