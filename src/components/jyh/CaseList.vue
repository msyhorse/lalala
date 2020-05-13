<template>
  <div class="caseList">
    <h1 class="title">{{ title }}</h1>
    <hr />
    <ul>
      <li class="items">
        <img src="../.././assets/jyh/img/caseList1.png" alt="" />
        <p>产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</p>
        <ul>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
        </ul>
        <span class="detail">了解详情</span>
      </li>
      <li class="items">
        <img src="../.././assets/jyh/img/caseList2.png" alt="" />
        <p>产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</p>
        <ul>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
        </ul>
        <span class="detail">了解详情</span>
      </li>
      <li class="items">
        <img src="../.././assets/jyh/img/caseList3.png" alt="" />
        <p>产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</p>
        <ul>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
          <li>
            <span class="list-type"></span>严选资深产品专家 更懂用户的需求
          </li>
        </ul>
        <span class="detail">了解详情</span>
      </li>
    </ul>
    <!-- 开发服务方案 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "开发服务方案"
    };
  }
};
</script>
<style>
.caseList {
  width: 90%;
  min-width: 960px;
  margin: auto;
}
h1.title {
  margin: 30px;
  text-align: center;
}
.caseList > ul {
  display: flex;
  justify-content: space-evenly;
}
.caseList hr {
  width: 80px;
  height: 3px;
  margin: auto;
  background: cornflowerblue;
  border: none;
  margin-bottom: 20px;
}
.items {
  border: 1px solid cornflowerblue;
  width: 27%;
  list-style: none;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
}
.items img {
  width: 100%;
}
.items p {
  margin: 20px 23px;
  text-indent: 2em;
}
.items ul {
  list-style: none;
  width: 90%;
  margin: auto;
}
.items li {
  margin: 10px 0;
  font-size: 13px;
  color: #999;
}
span.detail {
  background: cornflowerblue;
  width: 80px;
  margin: 20px auto;
  text-align: center;
  height: 36px;
  line-height: 36px;
  display: block;
  color: #ececec;
}
.list-type {
  display: inline-block;
  height: 2px;
  width: 14px;
  background: #308eff;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  transform: rotate(130deg);
}
.list-type:before {
  content: "_";
  display: block;
  width: 7px;
  height: 2px;
  background: #308eff;
  transform: rotate(95deg) translateY(-490%) translateX(50%);
}
</style>