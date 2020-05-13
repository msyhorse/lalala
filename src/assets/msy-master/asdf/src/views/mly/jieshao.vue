<template>
    <div class="f0"><div class="f1">
        <div class="f2"></div>
        <div class="f3">我叫程序员</div>
        <div class="f4">贝因美集团高级iOS开发工程师</div><br><hr style="background-color=red">
        <div class="f5">可工作地点:</div>
        <div class="f6">可工作时间:工作日9:00-23:00、周末9:00-0:00</div>
        <el-button type="primary" plain class="f7">和TA聊聊</el-button>
        </div>
        <div class="f8" id="f1">
            <div class="f9">个人介绍</div>123123
        </div>
        <div class="f8">
               <div class="f9">工作经历</div>123123
        </div>
        <div class="f8">
               <div class="f9">技能</div>123123
        </div>
        <div class="f8">
               <div class="f9">作品</div>123123
        </div>
        <foot></foot>
    </div>
</template>
<script >
import Foot from "../../components/mly/Foot";
export default{
     components: {
    
    Foot,

  }
}
</script>
<style scoped>
.f0{
    background: #F7F7F7;
}
.f1{
    width:264px;
    height:540px;
    background:white;
    border:1px solid #DCDCDC;
    position:fixed;
    top:14%;
    left:23%;
}

.f2{
    width:100px;
    height:100px;
    
     background-image: url(../.././assets/mly/img/QQ图片20200512231344.jpg);
    background-size: 101%;
    border-radius: 50px;
     margin:auto;
    /* margin-right:16px; */
    /* display:inline-block; */
    margin-top:25px;
    margin-bottom:38px;
}
.f3{
    height:35px;
    /*background:red;*/
    margin-bottom:14px;
    font-size:20px;
    line-height: 35px;
    text-align: center;
    
}
.f4{
    height:35px;
    /*background:darkcyan;
    */
    line-height: 35px;
    text-align: center;
    color:#969696;
    font-size:12px;
    font-weight: bold;
}
.f5{
     margin-top:25px;
    height:35px;
    /*background:red;*/
    margin-bottom:14px;
    /*line-height: 35px;*/
    /*text-align: center;*/
    color:#969696;
    font-size:14px;
    padding-left:49px;
     padding-right:10px;
}
.f6{
    height:70px;
    /*background:darkcyan;*/
    /*line-height: 70px;*/
    /*text-align: center;*/
    color:#969696;
    font-size:14px;
    padding-left:49px;
    padding-right:18px;
}
.f7{
    margin-left:85px;
    margin-top:20px;
}
.f8{
    width:733px;
    background:white;
    border:1px solid black;
    margin-top:13px;
    margin-left:38%;
}
.f9{
    height:39px;
    border-bottom: 1px solid black;
    line-height: 39px;
    text-indent:20px;
}
#f1{
    margin-top:5%;
}
</style>