<template>
  <div id="box">
    <el-carousel :interval="5000" arrow="always" id="slideBox">
      <el-carousel-item v-for="item in imgArr.length" :key="item">
        <img :src="imgArr[item - 1]" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "autoplay",
  data() {
    return {
      imgArr: [
        require("../.././assets/jyh/img/autorun_fir.png"),
        require("../.././assets/jyh/img/autorun_sec.png"),
        require("../.././assets/jyh/img/autorun_thi.png"),
        require("../.././assets/jyh/img/autorun_fou.png")
      ]
    };
  }
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#slideBox {
  overflow: hidden;
  margin: auto;
  width: 80%;
  height: auto;
  position: relative;
  z-index: 0;
  margin: auto;
}
#slideBox img {
  width: 100%;
}
</style>
