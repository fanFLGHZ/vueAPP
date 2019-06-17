<template>
    <div class="head-route">
        <div @click="changeInd(item.index)" :class="{active:item.index===ind}" v-for="item in titData" :key="item.index">
            <i :class="'iconfont '+item.icon"></i>
            <p>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ind:0,
            titData:[
                {
                    index:0,
                    name:"待处理",
                    icon:"icon-05"
                },
                {
                    index:1,
                    name:"已发起",
                    icon:"icon-07"
                },
                {
                    index:2,
                    name:"已处理",
                    icon:"icon-yibangding"
                }
            ]
        }
    },
    methods: {
        changeInd(index){
            this.ind=index;
            this.$emit("changeInd",index);
        }   
    }
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.head-route{
    width: 100%;
    height: rem(75px);
    // line-height: rem(65px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        width: 20%;
        height: rem(55px);
        text-align: center;
        i{
            font-size: rem(25px);
        }
        p{
            text-align: center;
            font-size: rem(16px);
        }
    }
}
.active{
    color: green;
}
</style>
