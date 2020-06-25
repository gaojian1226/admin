/**
 *  工厂函数生成路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const createRouter = () => {
    return new VueRouter({
        routes
    })
}

export default createRouter