/**
 * Created by qile on 2017/8/21.
 */
 //实参可以少于形参，用undefined补
 //ES5中的实现
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//10

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}
    //(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}
    //(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1


//ES6设置默认值
function add(x,y=2,z=8){
	return x+y+z;
}
console.log(add(1));//11
console.log(add(1,5));//14
console.log(add(1,2,3));//6
