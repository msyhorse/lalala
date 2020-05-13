<template>
  <div id="asd">
<!-- <router-link to="/shouye">a3</router-link> -->
<!-- <input type="button" value="123132" @click="go()">
 -->
 <NavTop class="Navtop"></NavTop>
    <Banner class="Banner"></Banner>
    <autorun></autorun>
    <Index></Index>
    <AutoRun></AutoRun>
    <FormTest class="formtest"></FormTest>
  </div>
</template>

<script>
// import Msy from './components/foot1'
// import Zhuce from './components/zhuce'
import NavTop from "./jyh/NavTop"
import Banner from "./jyh/Banner"
import Index from "../views/jyh/Index"
import FormTest from "./jyh/FormTest"
// import AutoRun from "./jyh/AutoRun"
export default {
  components:{
//     Msy,
//     Zhuce,
     NavTop,
    Banner,
    Index,
    FormTest,
//     AutoRun
  },
  methods:{
    go(){
      this.$router.push('/zhuce')
    }
  }
}
</script>

<style>
body{
    background:#F4F5F9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /* margin-top: 60px; */
}
.Navtop {
  position: absolute;
  top: 0;
  z-index: 1;
  color: #fff;
}
.Navtop #form {
  color: #333;
}
.Navtop a {
  color: #fff;
  text-decoration: none;
}
.formtest {
  width: 470px;
  margin: 30px auto;
}
.d1{
  width:1000px;
  height:600px;
  /* background:red; */
  margin:auto;
  background:white;
  overflow: hidden;
  text-align: center;
   margin-top:107px;
  margin-bottom: 60px;
}.d2{
  width:324px;
  height:600px;
  /* background:red; */
  margin:auto;
}

</style>
