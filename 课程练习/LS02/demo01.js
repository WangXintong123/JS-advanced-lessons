/**
 * Created by qile on 2017/8/14.
 */
//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//ubdifined
console.log(typeof {name:"Mike",age:20});//object

console.log(typeof function foo(){});//function

/*
//课外思考
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//String、Boolean//function

console.log(typeof Math);//object
console.log(typeof JSON);//object
*/

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);//true

var b = [12,34,{},""];
console.log(b instanceof Array);//true
//思考console.log(b instanceof Object);//true

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//true
//思考console.log(p1 instanceof Object);//true

