<template>
  <div id="app">

    <!-- <NavTop class="Navtop"></NavTop>
    <Banner class="Banner"></Banner>
    <autorun></autorun>
    <Index></Index>
    <AutoRun></AutoRun>
    <FormTest class="formtest"></FormTest> -->

    <!--<img src="./assets/logo.png">-->
    <!-- <input type="button" value="123132" @click="go()"> -->
    <router-view/>
    <!--<Zhuce></Zhuce>-->
    <Msy></Msy>
  </div>
</template>

<script>
import Msy from './components/foot1'
import Zhuce from './components/zhuce'
import NavTop from "./components/jyh/NavTop"
import Banner from "./components/jyh/Banner"
import Index from "./views/jyh/Index"
import FormTest from "./components/jyh/FormTest"
// import AutoRun from "./components/jyh/AutoRun"
export default {
  components:{
    Msy,
    Zhuce,
     NavTop,
    Banner,
    Index,
    FormTest,
    // AutoRun
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
  /* background:gray; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* .Navtop {
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
} */
.d1{
  width:1000px;
  height:600px;
  /* background:red; */
  margin:auto;
  background:white;
  overflow: hidden;
  text-align: center;
}.d2{
  width:324px;
  height:600px;
  /* background:red; */
  margin:auto;
}
</style>
