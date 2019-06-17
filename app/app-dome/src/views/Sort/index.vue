<template>
    <div class="wrap">
        <div class="header">排序</div>
        <div class="mian">
            <div class="cons">
                <h6>阿萨达多撒</h6>
                <div class="types">
                    <p>sdsadasd</p>
                    <p>asdasdasdasda</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listData:[
                {
                    id:0,
                    title:"按发起时间排序",
                    children:["按时间倒序","按时间顺序"]
                },
                {
                    id:1,
                    title:"按加班日期排序",
                    children:["按日期倒序","按日期顺序"]
                },
                {
                    id:2,
                    title:"按加班时数排序",
                    children:["按时数倒序","按时数顺序"]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: rem(43px);
        line-height: rem(43px);
        font-size: rem(20px);
        text-align: center;
    }
    .mian{
        margin-top: rem(30px);
        width: 100%;
        flex: 1;
        overflow: hidden;
        .cons{
            padding: 0 rem(20px);
            height: rem(115px);
            h6{
                width: 100%;
                height: rem(50px);
                line-height: rem(50px);
                font-size: rem(17px);
                color: #666;
                font-weight: bolder;
            }
            .types{
                width: 100%;
                height: rem(65px);
                display: flex;
                justify-content: space-between;
                p{
                    width: 47.5%;
                    height: rem(30px);
                    line-height: rem(30px);
                    text-align: center;
                    font-size: rem(16px);
                    color: #666;
                    background: #ccc;
                }
            }
        }
    }
}
</style>
