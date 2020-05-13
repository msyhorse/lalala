<template>
  <div id="publish">
    <NavTopBlue class="navtop"></NavTopBlue>
    <div class="publish_content">
      <ol class="note">
        <li>请提供详细的项目资料，以便于我们为您推荐合适的开发者</li>
        <li>整包项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</li>
        <li>项目发布之后，客栈工作人员将在半个工作日内联系您</li>
      </ol>
      <div class="publish_form">
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <h3
              style="
						color: #303133;
						text-align: center;
						margin-top: 15px;
						margin-bottom: 15px;
					"
            >
              发布新项目需求
            </h3>
            <el-form
              :model="demand"
              :rules="rules"
              ref="demandForm"
              label-position="top"
              class="demo-ruleForm"
            >
              <el-form-item label="项目名称 " prop="demandName">
                <el-input
                  v-model="demand.demandName"
                  placeholder="请输入内容"
                ></el-input>
              </el-form-item>
              <el-form-item label="我的项目类型" prop="demandType">
                <el-checkbox-group v-model="demand.demandType">
                  <el-checkbox label="Android"></el-checkbox>
                  <el-checkbox label="iOS"></el-checkbox>
                  <el-checkbox label="pc网站"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="项目预算（元）" prop="demandBudget">
                <el-input
                  v-model="demand.demandBudget"
                  placeholder="请输入内容"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="我的项目介绍" prop="demandDetail">
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="请输入内容"
                  v-model="demand.demandDetail"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action
                  :http-request="fileupload"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm()"
                  >立即发布</el-button
                >
                <el-button @click="resetForm('demandForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import NavTopBlue from "../../components/jyh/NavTopBlue";
import Foot from "../../components/mly/Foot";
export default {
  components: {
    NavTopBlue,
    Foot
  },
  data() {
    return {
      demand: {
        demandName: "",
        demandType: [],
        demandBudget: "",
        demandDetail: "",
        demandFile: {}
      },
      rules: {
        demandName: [
          { required: true, message: "项目名称不能为空", trigger: "blur" }
        ],
        demandType: [
          { required: true, message: "项目类型必选", trigger: "blur" }
        ],
        demandBudget: [
          { required: true, message: "项目预算不能为空", trigger: "blur" },
          { type: "number", message: "项目预算必须为数字值", trigger: "change" }
        ],
        demandDetail: [
          { required: true, message: "项目描述不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    fileupload(par) {
      console.log(par);
      this.demand.demandFile = par.file;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      let aa = new FormData();
      aa.append("demandFile", this.demand.demandFile);
      aa.append("demandBudget", this.demand.demandBudget);
      aa.append("demandDetail", this.demand.demandDetail);
      aa.append("demandName", this.demand.demandName);
      aa.append("demandType", this.demand.demandType);
      this.$axios.post("/mly/demand/demand", aa).then(res => {
        console.log(res);
      });
      // });
    }
  }
};
</script>

<style>
#publish {
  background: #f7f7f7;
}
.publish_content {
  width: 70%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px 40px;
}
.note {
  background: #eef5fe;
  border: 1px solid #c6defa;
  padding: 10px 10px 10px 28px;
  font-size: 14px;
  color: #89b0df;
  list-style: 1;
}
.note li {
  line-height: 24px;
}
.navtop {
  position: absolute;
  z-index: 2;
}
</style>
