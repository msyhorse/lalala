<template><div><NavTop class="Navtop"></NavTop><div class="d1"><p class="d3">注册新账号</p><hr width="90%" class="d4"><div class="d2"><el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
   <el-form-item label="用户名" prop="user">
    <el-input type="userword" v-model="ruleForm.user" autocomplete="off"  placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input type="mailword" v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="yanzheng">
    <el-input type="yanzhengword" v-model="ruleForm.yanzheng" autocomplete="off" placeholder="请输入验证码"></el-input><div class="d6" @click="go()"> 获取验证码</div>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
  </el-form-item>
  <el-radio-group v-model="ruleForm.role">
    <el-radio :label="0">需求者</el-radio>
    <el-radio :label="1">开发者</el-radio>
  </el-radio-group>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div><div class="d5"></div></div></div></template>
<script>
import NavTop from "../../components/jyh/NavTop";
import Foot from "../../components/mly/Foot";
  export default {
    components:{

     NavTop,
  


  },
    data() {
      
      var aaa="";
      var userpass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
           callback();
        }
        
        
      };
       var mailpass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱名不能为空'));
        }
        
        else{
           callback();
        }
        
      };
      var mailpass1 = (rule, value, callback) => {
        console.log(value);
            this.$axios
        .post("/api/user/cEmain", {
          userEmail: value
        })
        .then(res => {
          
        aaa=res.data.code;
        console.log(aaa)
      })


        if (aaa==20001) {
          return callback(new Error('你已经注册了此邮箱，请直接登录'));
        }
        
        else{
           callback();
        }
        
      };
      var yanzhengpass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        else{
           callback();
        }
        
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
         
        ruleForm: {
          pass: '',
          checkPass: '',
          user: '',
          email:'',
          role:0,
          yanzheng:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          user: [
            { validator: userpass, trigger: 'blur' }
          ],
          yanzheng: [
            { validator: yanzhengpass, trigger: 'blur' }
          ],
          email: [{ validator: mailpass, trigger: 'blur' },
           
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
{ validator: mailpass1, trigger: 'blur' },

          ]
        }
      };
    },
    methods: {
      go(){
       this.$axios
        .post("/api/user/sendEmail", {
          userEmail: this.ruleForm.email
        })
        .then(res => {
          console.log(res)})

      },
      go1(){
        alert(123)
      //  this.$axios
      //   .post("/api/user/sendEmail", {
      //     userEmail: this.ruleForm.email
      //   })
      //   .then(res => {
      //     console.log(res)})

      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/user/register',{userPassword: this.ruleForm.pass
              ,vcCode: this.ruleForm.yanzheng,
              userName: this.ruleForm.user,
              userEmail: this.ruleForm.email,
              i: this.ruleForm.role

            }).then(res => {
          console.log(res)})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .Navtop {
  position: absolute;
  top: 0;
  z-index: 1;
  color: black;
  background:white;
}
.Navtop #form {
  color: #333;
}
.Navtop a {
  color: black;
  text-decoration: none;
  
}
.d3{
  font-size:27px;
  text-align: center;
  margin:29px;
}
.d4{
  margin-left:5%;
  margin-bottom:34px;
}
.d1{
  margin-top:107px;
  margin-bottom: 60px;
}
.msy{
  color:black;
  opacity: 100  ! important 
}
.d6{
  width:84px;
  height:38px;
  background:white;
  position:absolute;
  color:#1E92F5 ;
  top:1px;
  left:137px;
  cursor: pointer;
}
</style>
