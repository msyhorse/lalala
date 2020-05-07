<template>
  <div>
    <el-form :model="zcForm" ref="zcForm" :rules="zcrules" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="邮箱" >
          <el-input v-model="zcForm.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码" >
          <el-input v-model="zcForm.yzm"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="zcForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="zcForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="zcForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增域名</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return{
       zcForm: {
         email:'',
         yam:'',
         username:'',
          pass: '',
          checkPass: '',
        },
        zcrules:{
          email:[
             {require:true,message:'不能为空',trigger:'blur'}
            ]
        }
    }
  }

}
</script>
<style>

</style>


