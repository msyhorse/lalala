<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <input type="button" value="123132" @click="go()">
    <router-view/>
    <!--<Zhuce></Zhuce>-->
    <Msy></Msy>
  </div>
</template>

<script>
import Msy from './components/foot1'
import Zhuce from './components/zhuce'
export default {
  components:{
    Msy,
    Zhuce
  },
  methods:{
    go(){
      this.$router.push('/zhuce')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
