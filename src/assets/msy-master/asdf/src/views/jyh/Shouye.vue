<template>
  <div id="index">
    <NavTop class="navtop"></NavTop>
    <Banner class="Banner"></Banner>
    <h2 class="title">开发服务方案</h2>
    <AutoRun class="AutoRun"></AutoRun>
    <h2 class="title">联系我们</h2>
    <ContactUs class="ContactUs"></ContactUs>
    <Caicai></Caicai>
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTop from "../../components/jyh/NavTop";
import Banner from "../../components/jyh/Banner";
import ContactUs from "../../components/jyh/ContactUs";
import AutoRun from "../../components/jyh/AutoRun";
import Foot from "../../components/mly/Foot";
import Caicai from "../mly/caicaideren"
export default {
  components: {
    NavTop,
    Banner,
    ContactUs,
    AutoRun,
    Foot,
    Caicai
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
.ContactUs {
  width: 400px;
  margin: 30px auto;
}
.navtop ul li div.logo {
  background-image: url(../.././assets/jyh/img/logo@2x.png);
}
</style>
