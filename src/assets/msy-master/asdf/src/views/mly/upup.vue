<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <h3 style="color: #303133;text-align:center;margin-top:15px;margin-bottom:15px">发布新项目需求</h3>
        <el-form :model="demandForm" :rules="rules" ref="demandForm" label-position="top" class="demo-ruleForm">
          <el-form-item label="项目名称 " prop="demandName">
            <el-input v-model="demandForm.demandName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="我的项目类型" prop="demandType">
            <el-checkbox-group v-model="demandForm.demandType">
              <el-checkbox label="Android"></el-checkbox>
              <el-checkbox label="iOS"></el-checkbox>
              <el-checkbox label="pc网站"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="项目预算（元）" prop="demandBudget">
            <el-input v-model="demandForm.demandBudget" placeholder="请输入内容" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="我的项目介绍" prop="demandDetail">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="demandForm.demandDetail"></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload  class="upload-demo"  ref="upload" action  :http-request="fileupload">
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('demandForm')">立即发布</el-button>
            <el-button @click="resetForm('demandForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      demandForm: {
        demandName: '',
        demandType: [],
        demandBudget: 12,
        demandDetail: '',
        demandFile: {}
      },
      rules: {
        demandName: [{required: true, message: '项目名称不能为空', trigger: 'blur'}],
        demandType: [{required: true, message: '项目类型必选', trigger: 'blur'}],
        demandBudget: [
          {required: true, message: '项目预算不能为空', trigger: 'blur'},
          { type: 'number', message: '项目预算必须为数字值', trigger: 'change'}
        ],
        demandDetail: [{required: true, message: '项目描述不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    fileupload(par){
      console.log(par);
      this.demandForm.demandFile=par.file;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let fromdata=new FormData()
        fromdata.append("demandFile",this.demandForm.demandFile)
        fromdata.append("demandBudget",this.demandForm.demandBudget)
        fromdata.append("demandDetail",this.demandForm.demandDetail)
        fromdata.append("demandName",this.demandForm.demandName)
        fromdata.append("demandType",this.demandForm.demandType)
        this.$axios.post('/mly/demand/demand', fromdata).then(res=>{
          console.log(res);
        })
      })
    }
  }
}
</script>


<style scoped>

</style>