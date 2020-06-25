import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';

import createRouter from './router';
import http from './helper/http';
Vue.prototype.$http = http;

import './styles/index.less';
import 'element-ui/lib/theme-chalk/index.css';
const router = createRouter();
router.beforeEach((to, _from, next) => {
    const {
        meta: {
            title
        }
    } = to;
    document.title = title;
    next()
})
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')