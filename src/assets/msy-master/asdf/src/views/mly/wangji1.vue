<template>
  <div><div class="d1"><p class="d3">修改密码</p><hr width="90%" class="d4"><div class="d2">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
 <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
  </el-form-item>
 
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div></div></div>
</template>
<script>
export default {
   data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
   
    return {
      ruleForm: {
       pass: "",
        checkPass: "",
      },
      rules: {  pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },methods: {
   
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
<style>
.d6{
  width:84px;
  height:38px;
  background:white;
  position:absolute;
  color:#1E92F5 ;
  top:1px;
  left:137px;
  cursor: pointer;
}.d1{
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
.d3{
  font-size:27px;
  text-align: center;
  margin:29px;
}

.d4{
  margin-left:5%;
  margin-bottom:34px;
}
</style>


