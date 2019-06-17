<template>
    <div class="wrap">
        <heads :title="type=='overtime'?'办公室加班申请表':'休假申请表'"><p></p></heads>
        <div class="headers">
            <div class="imgs"></div>
            <div class="names">
                <dl>
                    <dt>申请人姓名</dt>
                    <dd>{{this.list.nickname}}</dd>
                </dl>
                <dl>
                    <dt>直接主管</dt>
                    <dd>{{this.list.describes}}</dd>
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
                            <p>{{new Date(this.list.create_at).toLocaleDateString()}}</p>
                        </li>
                        <li>
                            <p>{{names}}类型</p>
                            <p>{{showTypes(this.list.type,this.list.list_type)}}</p>
                        </li>
                        <li>
                            <p>{{names}}起始时间</p>
                            <p>{{new Date(this.list.startTime).toLocaleDateString()}}</p>
                        </li>
                        <li>
                            <p>{{names}}截止时间</p>
                            <p>{{new Date(this.list.endTime).toLocaleDateString()}}</p>
                        </li>
                        <li>
                            <p>共计时数</p>
                            <p>{{reduceTime(this.list.startTime,this.list.endTime)}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cont2">
                <h2>{{names}}事由</h2>
                <p>{{this.list.describes}}</p>
            </div>
            <div class="bottom">
                <h3>附件</h3>
                <div class="imgBox">
                    <div v-for="(item,index) in this.list.annex" :key="index">
                        <img :src="'http://localhost:3000'+item" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <li class="clears">取消</li>
            <li class="btns">提交</li>
        </div>
    </div>
</template>

<script>
import {showType,reduceTime} from "../../utils/typeTimes";
import request from "../../utils/request";

export default {
    props:{
        type:String
    },
    data() {
        return {
            list:""
        }
    },
    computed: {
        names(){//动态名称
            return this.list.list_type==="overtime"?"加班":"休假";
        }
    },
    methods: {
        showTypes(type,tit){
            return showType(type,tit)
        },
        reduceTime(start,end){//时数
            return reduceTime(start,end);
        }
    },
    created() {
        let {type,id}=this.$route.params;
        request.get("/api/apply/"+type,{
            applicationNumber:id
        }).then(res=>{
            console.log(res)
            this.list=res.data.data
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../static/scss/common";
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
            margin-left:rem(20px);
            margin-right:rem(20px);
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
            .cont {
                width: 94%;
                // height: rem(220px);
                margin:0 rem(20px);
                ul {
                    li {
                        display: flex;
                        justify-content: space-between;
                        line-height: rem(40px);
                        font-size: rem(20px);
                        color: #bfbfbf;
                    }
                }
            }
        }
        .cont2 {
            margin: 0 rem(20px);
            height: rem(150px);
            background: #eee;
            border-radius: rem(20px);
            margin-top: rem(10px);
            color: #666;
            h2 {
                margin-left: rem(20px);
                width: 100%;
                height: rem(40px);
                border-bottom: 1px solid#ccc;
                line-height: rem(40px);
                font-size: rem(18px);
            }
            p  {
                padding: 0 rem(30px);
                height: rem(110px);
                font-size: rem(14px);
                line-height: rem(20px);
                color: #000;
            }
        }
        .bottom{
            padding: 0 rem(10px);
            height: rem(130px);
            h3{
                height: rem(30px);
                line-height: rem(30px);
                font-size: rem(18px);
                color: #666;
            }
            .imgBox{
                width: 100%;
                height: rem(100px);
                display: flex;
                justify-self: flex-start;
                overflow-x: scroll;
                div{
                    margin: rem(5px); 
                    width: 30%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
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

