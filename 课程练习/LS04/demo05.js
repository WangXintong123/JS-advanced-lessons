/**
 * Created by qile on 2017/8/14.
 */
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//报错   要用var定义