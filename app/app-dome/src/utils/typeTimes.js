const showType=(type,tit)=>{
    if(tit=="overtime"){
        switch (type) {
            case 1:
                return "双休日"
            case 2:
                return "节假日"
            case 3:
                return "工作日"
            default:"工作"
                break;
        }
    }else{
        switch (type) {
            case 1:
                return "年假"
            case 2:
                return "调休"
            default:"休假"
                break;
        }
    }
}
const reduceTime=(start,end)=>{//时数
    let kai=new Date(new Date(start).toLocaleDateString())*1;
    let shu=new Date(new Date(end).toLocaleDateString())*1;
    let cha=Math.floor((shu-kai)/1000/60/60/24);
    return cha;
}
export {
    showType,
    reduceTime
}