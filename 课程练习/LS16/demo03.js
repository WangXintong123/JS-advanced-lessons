/**
 * Created by qile on 2017/8/14.
 */
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);//{x:1,y:1,moveTo f}

//私有属性 闭包
var Person = function(name,age){
    var namePrivate = name;
   var agePrivate = age;
   console.log(this);
   this.showMe = function(){
       console.log(namePrivate,agePrivate);
       console.log(this);
   }
}
var p1 = new Person("Mike",23);//mike 23
p1.showMe();
//实例化对象this指向实例化出来的对象
//调用函数，this指向调用函数的对象

