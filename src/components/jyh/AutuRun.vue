<template>
  <div>
    <ul>
      <li
        v-for="(list, index) in slideList"
        :key="index"
        v-show="index === currentIndex"
        @mouseenter="stop"
        @mouseleave="go"
      >
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideList: [
        {
          clickUrl: "#",
          desc: "nhwc",
          image: "src/assets/jyh/img/autorun_fir.png"
        },
        {
          clickUrl: "#",
          desc: "hxrj",
          image: "src/assets/jyh/img/autorun_fir.png"
        },
        {
          clickUrl: "#",
          desc: "rsdh",
          image: "src/assets/jyh/img/autorun_fir.png"
        }
      ],
      currentIndex: 0,
      timer: ""
    };
  },
  methods: {
    created() {
      //在DOM加载完成后，下个tick中开始轮播
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, 4000);
      });
    },
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    }
  }
};
</script>
<style lang="sass">
.carousel-wrap {
    position: relative;
    height: 453px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}

.slide-ul {
    width: 100z
    height: 100%;
li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
  }
}

.carousel-items {
    position: absolute;
    z-index: 10;
    top: 380px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
.active {
    background-color: $btn-color;
  }
}
</style>
