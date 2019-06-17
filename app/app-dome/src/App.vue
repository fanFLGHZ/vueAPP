<template>
  <div id="app">
    <!-- <div>
      <button @click="btn('jia')">+</button>
        <span>{{num}}</span>
      <button @click="btn('jian')">-</button>
    </div> -->

    <!-- 缓存主页（include包含，home代表组件名，同时在组件定义name属性） -->
    <keep-alive include="home">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import {mapState,mapMutations} from "vuex";
export default {
  data() {
    return {
      trues:true
    }
  },
  beforeRouteLeave(to, from, next) {
 from.meta.keepAlive = false;
 next();
 }
  // computed: {
  //   ...mapState("number",["num"])
  // },
  // methods: {
  //   ...mapMutations("number",["changeId"]),
  //   btn(action){
  //     this.changeId(action)
  //   }
  // },
}
</script>

<style scoped lang="scss">
#app{
  width: 100%;
  height: 100%;
  // button{
  //   font-size: rem(30px);
  // }
}
</style>
