/**
 * Created by qile on 2017/8/14.
 */
// Part11111111 隐式类型转换
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean  false
console.log(typeof (a==b),a==b);//boolean   false
console.log(typeof (a<b),a<b);//boolean  true

//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";//img3.jpg
var d = "23" - 5;//18
console.log(c,d);

//逻辑运算符 与 隐式类型转换 + -
var e = !23;//false
var f = !!34;//true
//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};//true
console.log(e,f,g);

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);//{x:1}
}


// Part2222222 显式类型转换
// Boolean();
// Number();
// String();
// Object();


//parseInt();
//parseFloat();

// toString();
// valueOf();


