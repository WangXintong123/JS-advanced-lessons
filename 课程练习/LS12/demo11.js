/**
 * Created by qile on 2017/8/14.
 */

//闭包引入案例(思考下述两个案例的区别,那个x始终未被释放)
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量   //会被释放
console.log(f3);//输出？    1
console.log(f3);//输出？    1

/*
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量    //不会被释放
console.log(f3());//输出？   1
console.log(f3());//输出？   2
*/
//闭包：通过返回fn1的函数内部定义的函数fn2来访问fn1内部的局部变量。

/*
// 例一
//闭包：函数内部定义的函数与其相关作用域中的变量形成的实体（变量不会释放）
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？    6
console.log(inc(2));//输出多少？    8
inc = createInc(5);
console.log(inc(1));//输出多少？    6
*/

// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？   6
console.log(inc(2));//输出多少？   8
var inc2 = createInc(5);
console.log(inc(1));//输出多少？   9
console.log(inc2(1));//输出多少？  6

/*
// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();   1
foo();   1     //形成了两个闭包，互不影响
*/

// 例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//输出多少？  1
a();//输出多少？  2
b();//输出多少？  1     //同上，形成了两个互不影响的闭包

//查看JavaScript权威指南（第6版）184页中的描述