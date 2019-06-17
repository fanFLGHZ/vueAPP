<template>
    <transition mode="out-in"
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut">
        <div v-show="show" class="type_box">
            <div class="type_box_top" @click.self="$emit('displayNone')"></div>
            <div class="add_list_type">
                <dl class="orange" @click="$router.push({
                    name:'application',
                    params:{
                        type:'overtime'
                    }
                })">
                    <dt>
                        <i class="iconfont icon-diannao2"></i>
                    </dt>
                    <dd>
                        加班
                    </dd>
                </dl>
                <dl class="green" @click="$router.push('/application/vacation')">
                    <dt>
                        <i class="iconfont icon-dujia"></i>
                    </dt>
                    <dd>
                        休假
                    </dd>
                </dl>
            </div>
            
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        show:Boolean
    }
}
</script>

<style scoped lang="scss">
@import "@/static/scss/common";
.v-enter,.v-leave-to{
    .add_list_type{
        opacity: 0;
        transform: translateY(100%);
    }
}
.v-enter-active,.v-leave-active{
    .add_list_type{
        transition: transform 1s;
    }
}
.v-enter-to,.v-leave{
    .add_list_type{
        opacity: 1;
        transform: translateY(0);
    }
}
.type_box{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    position:fixed;
    top:0;
    left:0;
    .type_box_top{
        flex:1;
        background:rgba(0, 0, 0, 0.5);

    }
    .add_list_type{
        width:100%;
        height:rem(120px);
        background:#fff;
        position:fixed;
        bottom:0;
        left:0;
        padding:rem(25px) rem(40px);
        box-sizing:border-box;
        display:flex;
        justify-content:space-between;

        dl{
            flex:1;
            text-align:center; 
        dt{
            width:rem(40px);
            height:rem(40px);
            border-radius:50%;
            background:orange;
            margin:0 auto;
            text-align:center;
            line-height:rem(40px);
            font-size:rem(25px);
            color:#fff;

        }
        dd{
            margin-top:rem(10px);
        }
        }

        .green{
            dt{
                background:#79bd72;
            }
        }
        .orange{
            dt{
                background:#ffad36;
            }
        }
    }
}
</style>
