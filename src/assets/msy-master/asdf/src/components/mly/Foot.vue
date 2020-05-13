<template>
  <div>
    <div class="footerBox">
      <div class="footer_content">
        <img
          src="../.././assets/mly/img/logo_new.png"
          alt="123123"
          width="120"
          class="footer_logo"
        />
        <div class="a5">
          <p class="footer_title_recommend">重点城市程序员兼职推荐</p>
          <div class="fotter_list">
            <a href="#" class="city_recommend">北京程序员兼职</a>
            <a href="#" class="city_recommend">上海程序员兼职</a>
            <a href="#" class="city_recommend">深圳程序员兼职</a>
            <a href="#" class="city_recommend">杭州程序员兼职</a>
            <a href="#" class="city_recommend">广州程序员兼职</a>
            <a href="#" class="city_recommend">成都程序员兼职</a>
            <a href="#" class="city_recommend">武汉程序员兼职</a>
            <a href="#" class="city_recommend">南京程序员兼职</a>
            <a href="#" class="footer_more">更多</a>
          </div>
          <p class="footer_title_recommend">重点岗位程序员兼职推荐</p>
          <div class="fotter_list">
            <a href="#" class="city_recommend">Java兼职</a>
            <a href="#" class="city_recommend">C++兼职</a>
            <a href="#" class="city_recommend">PHP兼职</a>
            <a href="#" class="city_recommend">C兼职</a>
            <a href="#" class="city_recommend">C#兼职</a>
            <a href="#" class="city_recommend">Python兼职</a>
            <a href="#" class="city_recommend">Ruby兼职</a>
            <a href="#" class="city_recommend">Node.js兼职</a>
            <a href="#" class="city_recommend">Android兼职</a>
            <a href="#" class="city_recommend">iOS兼职</a>
            <a href="#" class="footer_more">更多</a>
          </div>
        </div>
        <div class="a10"><hr width="100%" class="a9" /></div>
        <div class="a11">
          <a href="#" class="city_recommend a12">APP下载</a>
          <a href="#" class="city_recommend a12">帮助</a>
          <a href="#" class="city_recommend a12">关于我们</a>
          <a href="#" class="city_recommend a12">合作伙伴</a>
          <a href="#" class="city_recommend a12" id="aaa">意见反馈</a>
          <a href="#" class="city_recommend a13">© 程序员客栈</a>
          <a href="#" class="footer_more">浙ICP备15029175号</a><br />
          <a href="#" class="footer_more">浙公网安备 33011002011566号</a
          ><img
            class="footer_more"
            src="../.././assets/mly/img/badge.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.footerBox {
  width: 100%;
  height: 225px;
  background: white;
  padding-bottom: 20px;
  overflow: hidden;
}
.footer_content {
  width: 1044px;
  height: 220px;
  border: 1px white solid;
  margin: 10px auto;
}
.footer_logo {
  float: left;
  margin: 15px 0 0 0;
}
.footer_title_recommend {
  font-size: 14px;
  width: 200px;
  margin: 15px 0;
  font-weight: bold;
}
.a5 {
  width: 872px;
  height: 97px;
  /*border:1px black solid;*/
  float: left;
  margin-left: 40px;
}
.fotter_list {
  width: 100%;
  /*border:1px black solid;*/
  line-height: 20px;
  overflow: hidden;
}
.city_recommend {
  font-size: 12px;
  color: black;
  text-decoration: none;
  margin-right: 10px;
}
.footer_more {
  font-size: 10px;
  color: black;
  text-decoration: none;
  float: right;
}

.a10 {
  width: 100%;
  height: 20px;
  /*background:red;*/
  margin-top: 150px;
}
.a11 {
  width: 100%;
  height: 50px;
  /*border:1px solid black;*/
}
.a12 {
  margin-right: 30px;
}
.a13 {
  margin-right: 30px;
  color: gray;
}
</style>
