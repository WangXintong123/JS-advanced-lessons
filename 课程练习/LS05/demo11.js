/**
 * Created by qile on 2017/8/14.
 */
var a = 34;
if(a = 45){
    console.log("是否会输出？");//是否会输出？
}

var b = 34;
if(45 == b){//为什么要这样写，有什么好处
    console.log("是否会输出？");//无
}
//如果将判等误写为赋值的话会报错