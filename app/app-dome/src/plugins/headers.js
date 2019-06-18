import head from "../views/Home/components/Titlehead";
import alertBox from "../components/alertBox";
export default {
    install(Vue){
        Vue.component("heads",head);
        const AlertZu=Vue.extend(alertBox);//组件类
        const AlertShi=new AlertZu({
            propsData:{
                txt:"mmm"
            }
        });//组件实例
        AlertShi.$mount();
        document.body.appendChild(AlertShi.$el);
        Vue.prototype.$alert=(text)=>{
            AlertShi.alertO(text)
        }
    }
}