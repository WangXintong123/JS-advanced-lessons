//
window.onload = function (e) {
    // console.log("window onload");
    // console.log("e:", e);
    // console.log(e.target);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 测试0
        // console.log(e.type);
        // console.log(e.target);
        // console.log(this);
        //思考target和this此时是否一样？   是一样的
        //所有情况都一样么?有没有某种情况不一样呢？后边讲事件流时再告诉你

        // 测试1
        // console.log(e.clientX,e.clientY);  //鼠标点击的坐标
        // console.log(this, "-----", e.target.id);//div   div的id名    

        // 测试2
        // console.log(e);//MouseEvent {isTrusted: true, screenX: 133, screenY: 151, clientX: 133, clientY: 80, …}
        // console.log(e.__proto__);//MouseEvent {…}
        // console.log(e.__proto__.__proto__);//UIEvent {initUIEvent: ƒ, …}
        // console.log(e.__proto__.__proto__.__proto__);//Event {NONE: 0, CAPTURING_PHASE: 1, AT_TARGET: 2, BUBBLING_PHASE: 3, …}
        // console.log(e.__proto__.__proto__.__proto__.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

        // 测试3
        for(var k in e){
            console.log(k,e[k]);
        }
        for(var k in e.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__.__proto__){
            console.log(k);
        }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
}

