/**
 * Created by qile on 2017/8/14.
 */
var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true会如何    可配制，可删除
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//lucy
delete person.name;//delete person.name;       上边改成true的话，下边的lucy就没有了
console.log(person.name);//lucy