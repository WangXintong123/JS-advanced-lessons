/**
 * Created by qile on 2017/8/14.
 */

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看//c
console.log(3===3);//t
console.log(3==="3");//f
console.log(3=="3");//t
console.log(3==new String(3));//t
console.log(3===new String(3));//f

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看//4个
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//f
console.log(obj1 == obj2);//f
console.log(obj1 === obj2);//f
console.log(obj1 == new String("xyz"));//f


//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看//b
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//f
console.log(obj1 !== obj2);//t
console.log(obj1 != obj2);//t
console.log(obj1 != new String("xyz"));//t

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？//引用类型转化为基本类型
console.log(2 == 2);//t
console.log(new Number(2) == new Number(2));//f
console.log(2 == new Number(2));//t

//存在二义性的代码，与预期的结果不一致
var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};//true
//var obj2 = {x:2,y:[1],z:Boolean(new Boolean(false))};//false
console.log(obj1.z == obj2.z);





