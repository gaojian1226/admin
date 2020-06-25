import Main from '../pages/Main'
import CategoriesCreate from '../pages/Categories/create.vue';
import CategoriesList from '../pages/Categories/list.vue';

const routes = [{
    name: 'home',
    title: '管理页面',
    path: '/',
    component: Main,
    redirect: '/categories/create',
    meta: {
        title: '管理页面',
    },
    children: [{
        name: 'categoriseCreate',
        path: '/categories/create',
        component: CategoriesCreate,
        meta: {
            title: '新建分类',
        }
    }, {
        name: 'categoriseList',
        path: '/categories/list',
        title: '分类列表',
        component: CategoriesList,
        meta: {
            title: '分类列表',
        },
    }]
}]

export default routes