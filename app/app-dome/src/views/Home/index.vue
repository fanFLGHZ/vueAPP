<template>
    <div class="wrap">
        <heads>
            <div>
                <span class="iconfont icon-riqixuanze"></span><span class="iconfont icon-fangdajing"></span>
            </div>
        </heads>
        <Tabtitle @changeInd="titChange"/>
        <div class="mian">
            <Tabtype @spanBtn="typeChange"/>
            <Content :options="listData"/>
        </div>
        <div class="btns" @click="show=true">+ 发起任务</div>
        <Mark :show="show" @displayNone="show=false"></Mark>
    </div>
</template>

<script>
import Titlehead from "./components/Titlehead";
import Tabtitle from "./components/Tabtitle";
import Tabtype from "./components/Tabtype";
import Content from "./components/Content";
import Mark from "../../components/Mark";

import {mapState,mapMutations} from "vuex";
import request from "../../utils/request";
export default {
    name:"home",
    components:{
        Titlehead,
        Tabtitle,
        Tabtype,
        Content,
        Mark
    },
    data(){
        return{
            show:false
            // listData:null,
            // titleOptions:{
            //     page:1,
            //     pageSize:10,
            //     type:"overtime",
            //     status:0
            // }
        }
    },
     beforeRouteLeave(to, from, next) {
 from.meta.keepAlive = false;
 next();
 },
    computed: {
        listData(){
            return this.$store.state.listData
        }
    },
    created() {
        request.get("/api/user/info")
        this.getData();
    },
    
    methods: {
        titChange(index){
            this.$store.commit("titChange",index)
            this.getData();
        },
        typeChange(index){
            this.$store.commit("typeChange",index)
            this.getData();
        },
        getData(){
            this.$store.dispatch("getData")
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../static/scss/common";
@import "../../static/scss/_minix";
// .v-enter,.v-leave-to{
//     .add_list_type{
//         opacity: 0;
//         transform: translateY(100%);
//     }
// }
// .v-enter-active,.v-leave-active{
//     .add_list_type{
//         transition: transform 1s;
//     }
// }
// .v-enter-to,.v-leave{
//     .add_list_type{
//         opacity: 1;
//         transform: translateY(0);
//     }
// }
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .mian{
        width: 100%;
        flex: 1;
        overflow: hidden;
    }
    .btns{
        width: 40%;
        height: rem(60px);
        background: green;
        line-height: rem(60px);
        text-align: center;
        font-size: rem(20px);
        color: #eee;
        font-weight: bolder;
        position: fixed;
        right: rem(30px);
        bottom: rem(50px);
        border-radius: rem(30px);
    }
}
</style>
