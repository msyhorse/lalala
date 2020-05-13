<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
import NavTop from "../../components/jyh/NavTop";
import Banner from "../../components/jyh/Banner";
import ContactUs from "../../components/jyh/ContactUs";
import AutoRun from "../../components/jyh/AutoRun";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTop,
    Banner,
    ContactUs,
    AutoRun,
    Foot
  }
};
</script>
