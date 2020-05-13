<template>
  <div class="top">
    <ul>
      <li>
        <div class="logo"></div>
      </li>
      <li @click="Shouye()">首页</li>
      <li @click="CloudWork()">云端工作</li>
      <li @click="Programmer()">程序员</li>
      <li class="more">
        更多服务
        <ul class="subMenu">
          <li>技术圈</li>
          <li>进制数据</li>
          <li>兼职招聘</li>
          <li>解决方案</li>
        </ul>
      </li>
      <li>
        <p>
          <el-input
            v-model="search"
            placeholder="搜索程序员/接单"
            style="width:230px;"
          ></el-input
          ><span>搜索</span>
        </p>
      </li>
      <li v-on:click="login()" id="loginBtn">登录</li>
      <li @click="goRegister" id="register">
        注册
      </li>
    </ul>
    <dl id="UserInfo" v-show="current">
      <dt>{{ username }}</dt>
      <dd>账户信息</dd>
      <dd>我的订单</dd>
      <dd>退出</dd>
    </dl>
    <!-- 登录表单 -->
    <div id="login" v-show="isShow">
      <div id="form">
        <div id="close" @click="hide()">点击关闭</div>
        <form>
          <span>登录</span>
          <el-input
            v-model="username"
            placeholder="请输入用户邮箱"
            @blur="cEmain()"
          ></el-input
          ><span id="msg"></span>
          <el-input
            type="password"
            v-model="passwprd"
            placeholder="请输入您的密码"
          ></el-input>
          <p>
            没有账号？<router-link style="color:#5b92fd" to=""
              >急速注册</router-link
            ><span @click="gogo()">忘记密码</span>
          </p>
          <div>
            <el-button
              @click="check"
              style="height:40px; line-height:40px; padding:0 10px"
              >立即登录</el-button
            >
            <span>WeChat</span>
            <span>Sina</span>
            <span>Github</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      current: "",
      search: "",
      username: "",
      passwprd: "",
      isShow: false
    };
  },
  methods: {
    gogo(){
      this.$router.push("/wangji");
    },
    Shouye() {
      this.$router.push("/");
    },
    programmer() {
      this.$router.push("/programmer");
    },
    goRegister() {
      this.$router.push("/Register");
    },
    CloudWork() {
      this.$router.push("/CloudWork");
    },
    login() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    //检查邮箱是否已经存在
    cEmain() {
      if (
        this.passwprd == (undefined || null) ||
        this.username == (undefined || null)
      ) {
        alert("请输入用户名和密码");
        return;
      }
      if (this.isShow == true) {
        this.$axios
          .post("/api/user/cEmain", {
            userEmail: this.username,
            userPassword: this.passwprd
          })
          .then(res => {
            console.log(res.data.data.msg);
            if (res.data.data.msg == "邮箱可用") {
              document.getElementById("msg").innerHTML = "该邮箱未注册";
            } else {
              document.getElementById("msg").innerHTML = "该邮箱已注册";
            }
          });
      }
    },
    check() {
      if (
        this.passwprd == (undefined || null) ||
        this.username == (undefined || null)
      ) {
        alert("请输入用户名和密码");
        return false;
      }
      this.$axios
        .post("/api/user/login", {
          userEmail: this.username,
          userPassword: this.passwprd
        })
        .then(res => {
          if (res.data.message == "成功") {
            this.isShow = false;
            document.getElementById("loginBtn").innerHTML = "消息";
            document.getElementById(
              "register"
            ).innerHTML = document.getElementById("UserInfo");
          } else {
            this.isShow = true;
            alert("请输入正确的用户名、密码！");
            return false;
          }
        });
    }
  }
};
</script>

<style>
.top > ul {
  font-size: 14px;
  padding: 10px 0;
  line-height: 50px;
  width: 90%;
  margin: auto;
  min-width: 960px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  /* position: absolute;
  top:10px; */
}
ul li:hover {
  cursor: pointer;
}
ul span {
  margin: 0 10px;
}
/*登录*/
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: none; */
  background: rgba(178, 178, 178, 0.4);
}
li .el-input__inner {
  height: 30px;
  border-radius: 15px;
}
#login #form {
  padding: 15px 30px 30px 30px;
  border-radius: 5px;
  background: #fff;
  position: fixed;
  margin: auto;
  width: 300px;
  height: 300px;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#form div#close {
  text-align: right;
  margin: 5px 0;
}
#form p span {
  float: right;
}
input.login {
  padding: 10px 30px;
  color: #fff;
  border: none;
  background: #5b92fd;
}
#form div {
  margin: 20px 0;
}
#form div span {
  float: right;
  line-height: 32px;
  padding: 2px;
}
.subMenu {
  display: none;
  background: #fff;
  position: absolute;
  z-index: 3;
  left: -50%;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #66666610;
  margin-left: -12px;
}
.more {
  position: relative;
}
li.more:hover .subMenu {
  display: block;
}
.subMenu li {
  list-style: none;
  color: #666;
  width: 140px;
  text-align: center;
}
.logo {
  width: 150px;
  height: 50px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
