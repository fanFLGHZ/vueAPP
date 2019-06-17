<template>
    <div class="content">
        <div>
            <div class="cons" v-for="(item,index) in options" :key="index" @click="$router.push({
            name:'detail',
            params:{
                type:item.list_type,
                id:item.applicationNumber
            }
        })">
            <div>
                <span>{{item.applicationNumber}}</span>
                <p>
                    <i class="iconfont icon-pingguo"></i>
                    <span>待审批</span>
                </p>
            </div>
            <div class="detals">
                <dl>
                <dd>
                    申请人
                </dd>
                <dt>
                    {{item.nickname}}
                </dt>
            </dl>
            <dl>
                <dd>
                    加班类型
                </dd>
                <dt>
                    {{showTypes(item.type,item.list_type)}}
                </dt>
            </dl>
            <dl>
                <dd>
                    加班日期
                </dd>
                <dt>
                    {{new Date(item.startTime).toLocaleDateString()}}
                </dt>
            </dl>
            <dl>
                <dd>
                    加班诗书
                </dd>
                <dt>
                    {{reduceTime(item.startTime,item.endTime)}}
                </dt>
            </dl>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import {showType,reduceTime} from "@/utils/typeTimes";
export default {
    props:["options"],
    methods: {
        reduceTime(start,end){//时数
            return reduceTime(start,end);
        },
        showTypes(type,tit){//类型
           return showType(type,tit);
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.content{
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // overflow: hidden;
    overflow-y: scroll;
    .cons{
        margin-top: rem(10px);
        width: 100%;
        height: rem(100px);
        div{
            padding: 0 rem(10px);
            height: rem(40px);
            line-height: rem(40px);
            display: flex;
            justify-content: space-between;
            font-size: rem(16px);
            i{
                color: yellow;
            }
        }
        .detals{
            width: 100%;
            height: rem(60px);
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            dl{
                width: 50%;
                height: rem(30px);
                line-height: rem(30px);
                display: flex;
                dd{
                    width: 45%;
                }
                dt{
                    width: 45%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
    }
}
</style>
