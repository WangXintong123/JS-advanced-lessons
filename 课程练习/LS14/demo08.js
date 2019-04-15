/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何     name属性的值可修改
    configurable:false,//改成true会如何   可以删除name属性，或者配置
    enumerable:true,
    value:"Mike"       //与writable特性无关，可以赋值
});
console.log(person.name);//输出什么？ Mike
person.name = "Lucy";
console.log(person.name);//输出什么？ Mike
delete person.name;
console.log(person.name);//输出什么？ Mike

//writable:true    mike  lucy  lucy
//configurable:true  mike lucy