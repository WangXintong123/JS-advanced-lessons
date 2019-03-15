/**
 * Created by qile on 2017/8/14.
 */
//逻辑与、或的基本理解
console.log(2>1&&4<5);//t
console.log(true&&(!2));//f
console.log(false&&("2" == 2));//f
console.log(false&&false);//f

console.log(2>1||4<5);//t
console.log(true||(!2));//t
console.log(false||("2" == 2));//t
console.log(false||false);//f