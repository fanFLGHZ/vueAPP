import axios from "axios";
import router from "../router/index";
const request=axios.create({
    baseURL:"http://172.23.45.51:3000"
});
//添加请求拦截器
request.interceptors.request.use((config)=>{
    return {
        ...config,//展开
        headers:{
            ...config.headers,
            token:window.localStorage.getItem("token")
        }
    }
},(error)=>{
    return Promise.reject(error);
})

//添加响应前的拦截
request.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    const response=error.response;
    const status=response.status;
    if(status>400){
        switch (status) {
            case 401:
                router.push("/login");
                break;
            case 404:
                alert("页面飞了");
                break;
            case 405:
                alert("没有权限");
                break;
            case 422:
                alert("请求失败");
                break;
            default:
                break;
        }
    }
    return Promise.reject(error)
})
export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
}