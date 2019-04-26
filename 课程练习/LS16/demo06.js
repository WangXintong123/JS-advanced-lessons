/**
 * Created by qile on 2017/8/14.
 */
// Part1 方法中函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？   window
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？   window
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);   (0,0)


// Part2 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？   point
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);(2,2)

//解决方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？  window
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？   window
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()   切换调用主体，调换为this指代的point来调用
        moveToY();
    }
};
point.moveTo(2,2);console.log(point);//2,0

//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？   window
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？   window
        }
        moveToX.bind(point)();//使内层函数指向正确的调用对象
        //moveToX.__proto__==Functionn.prototype(实际上bind是在moveToX函数的原型链上找到的)
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);
