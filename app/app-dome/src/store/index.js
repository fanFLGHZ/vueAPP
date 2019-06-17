import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios"
import number from "./moudels/num";
import request from "../utils/request";
Vue.use(Vuex)

const store= new Vuex.Store({
  modules:{//（只是练习这个属性）
    number
  },
  state:{
    num:0,
    listData:null,
    titleOptions:{
        page:1,
        pageSize:10,
        type:"overtime",
        status:0
    },
    token:"",
    userData:""
  },
  getters:{

  },
  mutations:{
    titChange(state,index){
      state.titleOptions={
        type:"overtime",
        status:index
      }
      // state.titleOptions.type="overtime";
      // state.titleOptions.status=index;
      // state.getData();
    },
    typeChange(state,index){
      state.titleOptions.type=index;
      // state.getData();
    },
    // changeId(state,action){
    //   state.num=action=="jia"?state.num+1:state.num-1
    // }
  },
  actions:{
    getData({state}){
      request.get("/api/task/list",{
        
        ...state.titleOptions
      }).then(res=>{
        state.listData=res.data.data;
      }).catch(res=>{
        console.log(res)
      })
    },
    getUser({state},tokens){
      request.get("/api/user/info",{
        ...state.token=tokens
      }).then(({data})=>{
        state.userData=data.data;
      })
    }
  }
})

export default store;
