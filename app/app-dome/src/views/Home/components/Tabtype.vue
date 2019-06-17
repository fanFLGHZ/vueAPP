<template>
     <div class="tabBox">
        <div class="tabs">
            <span @click="spanBtn(ite.idx)" 
            :class="{active:ite.idx===index}"
             v-for="ite in spans" :key="ite.idx">{{ite.spns}}</span>
        </div>
        <p class="orderBox">
            <span class="iconfont icon-zixun"></span>
            <span @click="$router.push({path:'/sort'})" class="iconfont icon-gengduo-2"></span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index:"overtime",
            spans:[
                {
                    idx:"overtime",
                    spns:"加班"
                },
                {
                    idx:"vacation",
                    spns:"休假"
                }
            ]
        }
    },
    methods: {
        spanBtn(index){
            this.index=index;
            this.$emit("spanBtn",index)
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.tabBox{
    width: 100%;
    height: rem(74px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .tabs{
        width: 40%;
        height: rem(40px);
        line-height: rem(40px);
        border-top-left-radius: rem(20px);
        border-bottom-left-radius: rem(20px);
        border-top-right-radius: rem(20px);
        border-bottom-right-radius: rem(20px);
        border: solid rem(1px) green;
        display: flex;
        justify-content: space-between;
        text-align: center;
        overflow: hidden;
        span{
            width: 50%;
            height: 100%;
            font-size: rem(16px);
            
        }
        .active{
            background: green;
        }
    }
    .orderBox{
        position: absolute;
        right: rem(10px);
        span{
            margin: 0 rem(5px);
            font-size: rem(22px);
        }
    }
}
</style>
