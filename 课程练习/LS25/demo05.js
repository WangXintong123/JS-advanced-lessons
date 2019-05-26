//再谈事件响应与事件流
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);//改成true会怎样,理解冒泡和捕获的顺序
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);//改成true会怎样
    div3.addEventListener("click",function (e) {
        console.log("div3 click");
    },false);//改成true会怎样
    /*
        fff：div3-div2-div1
        ttt：1-2-3
        tff:1-3-2
        ttf:1-2-3
        fft:3-2-1
        ftt:2-3-1
        tft:1-3-2
        ftf:2-3-1
    */

    
    document.addEventListener("click",function (e) {
        console.log("document click");
    },true);
    //3-2-1-body-document
    //若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    //document-3-2-1-body
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
    //document-3-2-1-body
    //若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    //document-body-3-2-1
}



window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    document.addEventListener("myEvent",function(){console.log("xx")},false);
    div1.addEventListener("myEvent",function(){console.log("yy")},false);
    div2.addEventListener("myEvent",function(){console.log("zz")},false);
    
    // console.log("dispatchEvent" in div1);
    // console.log("dispatchEvent" in div2);

    var myEvent = new Event("myEvent");
    //console.log(myEvent.cancelBubble);

    //事件对象从顶层（不精确）节点流动到目标（精确）节点
    // div1.dispatchEvent(myEvent);
    div2.dispatchEvent(myEvent);//若3个都捕获(true) xx,yy,zz 若3个都是冒泡(false)则zz
}

