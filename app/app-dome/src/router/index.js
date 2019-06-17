import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home =()=>
  import ("../views/Home/index.vue")
const Sort =()=>
  import ("../views/Sort/index.vue")
const Message =()=>
  import ("../views/Message/index.vue")
const Application =()=>
  import ("../views/Application/index.vue")
const Examine =()=>
  import ("../views/Examine/index.vue")
const Login =()=>
  import ("../views/Login/index.vue")
const Detail =()=>
  import ("../views/Detail/index.vue")
const router= new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        title:"首页",
        keepAlive:true
      }
    },
    {
      path:"/sort",
      component:Sort,
      meta:{
        title:"筛选"
      }
    },
    {
      path:"/message",
      component:Message,
      meta:{
        title:"信息表"
      }
    },
    {
      path:"/examine",
      component:Examine,
      meta:{
        title:"审批历史"
      }
    },
    {
      path:"/application/:type",
      component:Application,
      name:'application',
      meta:{
        title:"申请表",
        keepAlive:true
      }
    },
    {
      path:"/login",
      component:Login,
      meta:{
        title:"登录"
      }
    },
    {
      path:"/detail/:type/:id",
      name:"detail",
      component:Detail,
      meta:{
        title:"详情"
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  next();
})
export default router;