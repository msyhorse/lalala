<template>
  <div id="index">
    <NavTop class="navtop"></NavTop>
    <Banner class="Banner"></Banner>
    <h2 class="title">开发服务方案</h2>
    <h2 class="title">联系我们</h2>
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTop from "../../components/jyh/NavTop";
import Banner from "../../components/jyh/Banner";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTop,
    Banner,
    Foot
  }
};
</script>

<style scope>
.title {
  text-align: center;
  margin: 20px;
}
.navtop {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  color: #fff;
}
.navtop #form {
  color: #333;
}
.navtop a {
  color: #fff;
  text-decoration: none;
}
.formtest {
  width: 400px;
  margin: 30px auto;
}
.navtop ul li div.logo {
  background-image: url(../.././assets/jyh/img/logo@2x.png);
}
</style>
