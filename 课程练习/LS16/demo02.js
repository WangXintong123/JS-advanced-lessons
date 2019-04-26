/**
 * Created by qile on 2017/8/14.
 */
function thisTest() {
    "use strict"
    console.log(this); //undefined
}
thisTest();

//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;//现在是false，严格模式下是true
}
isStrictMode();