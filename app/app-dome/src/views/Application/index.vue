<template>
    <div class="wrap">
        <heads :title="title"><p></p></heads>
        <div class="headers">
            <div class="imgs"></div>
            <div class="names">
                <dl>
                    <dt>申请人姓名</dt>
                    <dd>{{userData.nickname}}</dd>
                </dl>
                <dl>
                    <dt>直接主管</dt>
                    <dd>总裁</dd>
                </dl>
            </div>
            <div class="iconfont icon-arrow-right"></div>
        </div>
        <div class="mian">
            <div class="content">
                <h2>申请信息</h2>
                <div class="cont">
                    <ul>
                        <li>
                            <p>{{names}}日期</p>
                            <p>
                                <el-DatePicker class="rq" v-model="value"/>
                            </p>
                        </li>
                        <li>
                            <p>{{names}}类型</p>
                            <p>
                                <el-select class="el-select" v-model="valueTypee" placeholder="请选择">
                                    <el-option
                                    v-for="item in this.valueTypes"
                                    :key="item.id"
                                    :value="item.tit">{{item.tit}}
                                    </el-option>
                                </el-select>
                            </p>
                        </li>
                        <li>
                            <p>{{names}}起始时间</p>
                            <p>
                                <el-TimePicker
                                    class="el-TimePicker"
                                    v-model="startVals"
                                    :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                    }"
                                    placeholder="选择时间">
                                </el-TimePicker>
                            </p>
                        </li>
                        <li>
                            <p>{{names}}截止时间</p>
                            <p>
                                <el-TimePicker
                                    class="el-TimePicker"
                                    v-model="endVals"
                                    @change="shiTimes"
                                    :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                    }"
                                    placeholder="选择时间">
                                </el-TimePicker>
                            </p>
                        </li>
                        <li>
                            <p>共计时数</p>
                            <p>{{nums}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shiBox">
                <h2>{{names}}事由</h2>
                <textarea v-model="texts" class="shiNei" cols="80" rows="10">

                </textarea>
            </div>
            <div class="picBox">
                <h2>附件</h2>
                <div class="picBoxs">
                    <div class="pics">
                        <div v-for="(item,index) in this.imges" :key="index">
                            <span @click="imges.splice(index,1)">X</span>
                            <p>
                                <img :src="'http://localhost:3000'+item" alt="">
                            </p>
                        </div>
                    </div>
                    <input type="file" value="上传文件" @change="btnFile"/>
                </div>
            </div>
        </div>
        <div class="footer">
            <li class="clears">取消</li>
            <li class="btns" @click="submission">提交</li>
        </div>
    </div>
</template>

<script>
import request from "@/utils/request";
export default {
    data() {
        return {
            nums:"",
            show:false,
            texts:"",//事由
            imges:[],//图片数组
            value:"",//日期
            types:"",//类型
            valueTypee:"",//选择值
            startVals:"",//起始时间
            endVals:"",//结束时间
            picc:{//上传限制
                type:["png","jpg","jpeg","gif"],
                size:3  //大小3Mb
            },
            valueTypes:[
                {
                    id:0,
                    tit:"双休日"
                },
                {
                    id:1,
                    tit:"节假日"
                },
                {
                    id:2,
                    tit:"工作日"
                } 
            ]
        }
    },
    computed: {
        title(){
           return this.types==="overtime"?"办公室加班申请表":"办公室休假申请表";
        },
        userData(){
            return this.$store.state.userData;
        },
        names(){
            return this.types=="overtime"?"加班":"休假";
        }
    },
    created() {
        let type=this.$route.params.type;
        this.types=type;
        let tokens = window.localStorage.getItem("token");
        request.get("/api/user/info");
        this.getUser(tokens);
    }
    ,
 beforeRouteLeave(to, from, next) {
 if (to.path == "/home") {
 to.meta.keepAlive = false;
 } else {
 to.meta.keepAlive = true;
 }
 next();
 },
    methods:{
        getUser(tokens){
            this.$store.dispatch("getUser",tokens)
        },
        shiTimes(){
            let kai=new Date(this.startVals)*1;
            let jie=new Date(this.endVals)*1;
            let nums=Math.abs((kai-jie)/1000);
            this.nums=nums;
        },
        btnFile(e){
            let userFile=e.target.files[0];//图片对象/文件
            let {size,type}=userFile;//结构{大小，图片}
            let pics=type.match(/\/(\w+)$/i)[1];//图片后缀
            //判断是否为图片
            if(!this.picc.type.includes(pics)){
                alert("不支持！");
                return;
            }
            if(!this.picc.size*1024*1024>size){
                alert("太大了！");
                return;
            }
            //FormData是window对象  向ajax对象提交键值对式的参数
            const formdata=new FormData();
            formdata.append("file",userFile);
            request.post("/api/upload",formdata).then(({data})=>{
                this.imges.push(data.url);
            })
        },
        submission(){
            let options={
                annex:this.imges,
                describe:this.texts,
                endTime:this.endVals,
                startTime:this.startVals,
                type:this.types
            }
            if(this.texts!==""){
                request.post("/api/apply/"+this.types,options).then(({data})=>{
                    if(data.msg==="提交成功"){
                        this.$router.push({name:"home"});
                    }
                })
            }else{
                alert("提交失败");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/static/scss/common";
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        background: green;
        color: #eee;
    }
    .headers{
        width: 100%;
        height: rem(100px);
        background: green;
        color: #eee;
        display: flex;
        justify-content: space-around;
        .imgs{
            margin: 0 rem(10px);
            width: 10%;
        }
        .names{
            width: 60%;
            line-height: rem(40px);
            dl{
                display: flex;
                font-size: rem(16px);
                line-height: rem(40px);
                justify-content: space-between;
                dt{
                    width: 50%;
                }
                dd{
                    width: 50%;
                }
            }
        }
        .icon-arrow-right{
            line-height: rem(80px);
            font-size: rem(20px);
            // margin: 0 rem(10px);
            width: 5%;
        }
    }
    .mian{
        width: 100%;
        flex: 1;
        overflow: hidden;
        .content {
            margin-top: rem(20px);
            padding: 0 rem(20px);
            height: rem(250px);
            background: #fff;
            border-radius: rem(20px);
            h2 {
                width: 94%;
                height: rem(40px);
                border-bottom: 1px solid#ccc;
                line-height: rem(40px);
                font-size: rem(18px);
                color: #666;
            }
            .cont{
                width: 94%;
                // height: rem(220px);
                margin:0 rem(20px);
                ul {
                    li {
                        height: rem(40px);
                        display: flex;
                        justify-content: space-between;
                        line-height: rem(40px);
                        font-size: rem(20px);
                        color: #bfbfbf;
                        .rq{
                            width: rem(170px);
                            height:rem(40px);
                        }
                        .el-select{
                            width: rem(170px);
                            height:rem(40px);
                            input{
                                height: 200px;
                            }
                        }
                        .el-TimePicker{
                            width: rem(170px);
                            height:rem(40px);
                        }
                    }
                }
            }
        }
        .shiBox{
            padding: 0 rem(20px);
            height: rem(150px);
            h2{
                width: 100%;
                height: rem(30px);
                line-height: rem(30px);
                font-size: rem(18px);
                color: #666;
            }
            .shiNei{
                margin: rem(10px) auto;
                width:90%;
                display: block;
                height: rem(100px);
                text-indent: rem(3px);
                border: solid rem(1px) #666;
                font-size: rem(16px);
                line-height: rem(25px);
                color: #333;
                font-weight: bolder;
            }
        }
        .picBox{
            padding: 0 rem(20px);
            h2{
                width: 100%;
                height: rem(30px);
                line-height: rem(30px);
                font-size: rem(18px);
                color: #333;
            }
            .picBoxs{
                .pics{
                    width: 100%;
                    height: rem(100px);
                    display: flex;
                    justify-self: flex-start;
                    overflow-x: scroll;
                    div{
                        margin: rem(5px); 
                        width: 30%;
                        height: 100%;
                        position: relative;
                        span{
                            padding:rem(3px) rem(5px);
                            border-radius: 50%;
                            background: #ccc;
                            color: #333;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                        p{
                            margin: 0 auto;
                            width: 80%;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                input{
                    width: 20%;
                    height: rem(20px);
                    line-height: rem(20px);
                    text-align: center;
                    font-size: rem(16px);
                }
            }
        }
    }
    .footer{
        width: 100%;
        height: rem(45px);
        display: flex;
        justify-content: space-between;
        .clears{
            width: 30%;
            line-height: rem(45px);
            text-align: center;
            font-size: rem(14px);
        }
        .btns{
            width: 70%;
            line-height: rem(45px);
            text-align: center;
            font-size: rem(14px);
            background: green;
            color: #eee;
        }
    }
}
</style>

