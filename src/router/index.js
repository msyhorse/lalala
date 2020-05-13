import Vue from "vue";
import Router from "vue-router";
import Shouye from "../views/jyh/Shouye";
import CloudWork from "../views/jyh/CloudWork";
import Programmer from "../views/jyh/Programmer";
import Register from "../views/mly/Register";
import Wangji from "../views/mly/wangji";
import Wangji1 from "../views/mly/wangji1";
import Upup from "../views/mly/upup";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Shouye",
      component: Shouye
      // redirect: "/shouye"//路由重定向
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/CloudWork",
      name: "CloudWork",
      component: CloudWork
    },
    {
      path: "/Programmer",
      name: "Programmer",
      component: Programmer
    },
    {
      path: "/wangji",
      name: "Wangji",
      component: Wangji
    }
    ,
    {
      path: "/wangji1",
      name: "Wangji1",
      component: Wangji1
    },
    {
      path: "/upup",
      name: "Upup",
      component: Upup
    }
  ]
});
