/**
 * Created by qile on 2017/8/14.
 */
//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;结果又是如何？
//结果为2，相当于给subObj_First加了一个新的x属性，并没有改动superObj，而subObj_Second继承于superObj，所以不会有变化
console.log(subObj_Second.x);//5
