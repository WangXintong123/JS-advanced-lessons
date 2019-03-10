/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a");//fa;se
console.log("B".localeCompare("A"));//1 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A"));//0 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;//"abcdef"

//Part 111111111 字符串提取
//String.prototype.charAt(pos);//特定位置字符
//String.prototype.charCodeAt(pos);//特定位置字符的编码
//String.prototype.slice(start,end?);//截取字符串
//String.prototype.substr(start,length?)//截取，长度
//String.prototype.substring(start,end?);//截取。开始结束互换，超过索引部分不算
//String.prototype.split(separator?,limit?);//变为数组，可以限制数组元素个数

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);//"cdef"
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd

var arr6 = "abcdef".split("c");//["ab","def"]//返回数组
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);//["ab","def"]
"abcdef".split("")//["a", "b", "c", "d", "e", "f"]

var str9 = "abcdef".charAt(2);//c
var str10 = "abcdef".charCodeAt(3);//100
var str11 = "abcdefabcdef".indexOf("d",1);//3
var str12 = "abcdefabcdef".indexOf("d",4);//9//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//cdefg//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//cde//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏//开始和结束可以互换位置，超出索引的部分不算



//Part 222222222 字符串变换
//String.prototype.trim( );//从字符串两端删除空白字符
//String.prototype.concat(str1?,str2?);//拼接字符串
//String.prototype.toLowerCase( );//转化为小写
//String.prototype.toLocaleLowerCase( );根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。
//String.prototype.toUpperCase( );//转化为大写
//String.prototype.toLocaleUpperCase( );根据任何特定于语言环境的案例映射，返回调用字符串值转换为大写的值。
var str16 = "aaa".concat("bbb");//aaabbb//返回字符串
var str17 = "    abc def     \r\n  ".trim();//abc def//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();//abcdef
var str19 = "abcDEF".toUpperCase();//ABCDEF

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);//查找，特定字符与位置
//String.prototype.lastIndexOf(searchingString,position?);//倒着查，特定字符与位置
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);//9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);
//String.prototype.match(regexp);
//String.prototype.replace(regexp);

//其余部分参见《深入理解JS》第12章