## 后台管理使用说明 

### 项目搭建：
- 使用vue-cli创建 
    - cli安装方法
    ```
        npm install -g @vue/cli @vue/cli-service-global
    ```
    - 项目创建：
    ```
        vue create admin
    ```

### 路由管理：
- vue-router
    - npm安装
        ```
            npm install vue-router
        ```
    - 使用方法
    ```
        // 详见官方文档
        import VueRouter from 'vue-router'
        import Vue from 'vue'
        Vue.use(VueRouter)
        
    ```



### UI：element-ui 
- 安装 :
```
    npm install element-ui 
```
- 引入与使用方式(详见element-ui官方文档)：
```
// main.js 本项目为全局引入 element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI)
```


### http请求 
- axios 
    - 使用方法请参照官方文档