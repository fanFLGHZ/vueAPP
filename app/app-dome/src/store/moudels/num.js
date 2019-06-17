const num={
    namespaced:true,
    state:{
      num:0
    },
    mutations:{
      changeId(state,action){
        state.num=action=="jia"?state.num+1:state.num-1
      }
    }
  }
  export default num