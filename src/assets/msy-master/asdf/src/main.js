// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//main.js引入公用的组件，样式，路由
import Vue from "vue";
import router from "./router";
import Index from "./views/jyh/Index";
import ElementUI from "element-ui"; //element-ui的全部组件
import "element-ui/lib/theme-chalk/index.css"; //element-ui的css
import "@/assets/jyh/css/common.css"; //引入公用css样式；
// import VueRouter from "vue-router";
import Axios from "Axios";
import VueAxios from "vue-axios";
Vue.prototype.$axios = Axios;
Vue.use(ElementUI); //使用elementUI
Vue.use(Axios, VueAxios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#index",
  router,
  components: { Index },
  template: "<Index/>"
});
