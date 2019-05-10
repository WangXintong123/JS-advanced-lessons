/**
 * Created by qile on 2017/10/23.
 */
//在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aB"]

/*
	 .表示任意字符
	*表示可以出现多次或0次
*/
var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"]

var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"]

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
// 原因在于正则表达式中的g, 使得搜索过程后, 如果匹配成功, 则记录上一次的位置, 如果匹配不成功, 则会归零. 
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？  上一次匹配成功，记录了上一次的位置，从b开始匹配
console.log(regExp.test("ab"));//true  匹配失败后归零，从a开始匹配
console.log(regExp.test("ab"));//false 为什么？

/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？1 2 3
}
*/