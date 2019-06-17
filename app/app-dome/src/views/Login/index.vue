<template>
    <div class="wrap">
        <div class="header">
            <span>X</span>
            <p>欢迎来到星享俱乐部</p>
        </div>
        <div class="mian">
            <p class="nameBox">
                <input type="text" placeholder="请输入号码" v-model="name">
            </p>
            <p class="passBox">
                <input type="password" placeholder="请输入密码" v-model="pwd">
            </p>
            <p class="btnBox">
                <input @click="btn" type="submit" value="登录">
            </p>
        </div>
    </div>
</template>

<script>
import request from "../../utils/request";
import router from "../../router/index";
export default {
    data(){
        return{
            name:"",
            pwd:""
        }
    },
    methods: {
        btn(){
            if(this.name.trim()!="" && this.pwd.trim()!= ""){
                request.post("/api/login",{
                    phone:this.name,
                    password:this.pwd
                }).then(res=>{
                    window.localStorage.setItem("token",res.data.token);
                    this.$router.back();
                }).catch(res=>{
                    console.log(res.response.status)
                })
            }else{
                alert("您输入的用户名或密码不正确");
            }
        }   
    }
}
</script>

<style scoped lang="scss">
@import "../../static/scss/common";
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        padding: 0 rem(10px);
        height: rem(80px);
        span{
            height: rem(20px);
            font-size: rem(20px);
        }
        p{
            height: rem(60px);
            line-height: rem(60px);
            font-size: rem(24px);
            font-weight: bolder;
        }
    }
    .mian{
        padding: 0 rem(10px);
        flex: 1;
        overflow: hidden;
        .nameBox{
            margin-top: rem(15px);
            padding: 0 rem(5px);
            height: rem(40px);
            line-height: rem(40px);
            font-size: rem(18px);
            border-bottom: solid rem(2px) #ccc;
        }
        .passBox{
            padding: 0 rem(5px);
            height: rem(40px);
            line-height: rem(40px);
            font-size: rem(18px);
            border-bottom: solid rem(2px) #ccc;
        }
        .btnBox{
            margin-top: rem(70px);
            padding: 0 rem(5px);    
            height: rem(40px);
            line-height: rem(40px);
            font-size: rem(18px);
            font-weight: bolder;
            color: #eee;
            background: #ccc;
            border-radius: rem(20px);
            input{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
