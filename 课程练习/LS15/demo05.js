/**
 * Created by qile on 2017/8/14.
 */
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);//Mike
console.log(p1.age);//20
p1.sayHi();//hi，I'mJack21years old
//name和age属性是定义在p1上了，还是定义在p1的原型上了   P1上
//sayHi方法是定义在p1上了，还是定义在p1的原型上了   P1的原型上
//分析一下访问和调用的过程是怎样的   
//先在P1上进行访问和调用，若没有，到其原型链上寻找


//分析：属性和方法定义在构造函数中和写在prototype上这两种情况有什么不同?
//定义在构造函数中只要实例化对象就会开辟空间给方法，定义在prototype上，只有访问到了才会给其开辟空间，节省空间
//没有私有属性情况下，常将方法添加到构造函数的prototype属性上，实现方法共享
//而属性根据情况来确定是定义在构造函数中,还是定义在构造函数的prototype（即实例化对象的原型上）属性上

console.log(p1.__proto__ === Person.prototype);//true


