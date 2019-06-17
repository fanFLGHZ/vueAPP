<template>
    <div class="header" v-if="back">
        <span class="iconfont icon-xiangzuo" @click="$router.back()"></span>
        <b>{{title?title:$route.meta.title}}</b>
        <slot></slot>
        <!-- <div>
            <span class="iconfont icon-riqixuanze"></span><span class="iconfont icon-fangdajing"></span>
        </div> -->
    </div>
</template>

<script>
export default {
    props:{
        back:{
            default:true,
            type:Boolean
        },
        title:{
            default:"",
            type:String
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.header{
    width: 100%;
    font-size: rem(16px);
    height: rem(50px);
    text-align: center;
    line-height: rem(50px);
    display: flex;
    justify-content: space-between;
    b{
        font-weight: bolder;
    }
    div{
        span{
            margin: 0 rem(10px);
        }
    }
}
</style>
