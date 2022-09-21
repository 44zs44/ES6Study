////ES6语法允许为函数设置默认值，即直接写在参数定义的后面
// function out(x,y=3){
//     x=5;
//     console.log(x,y)
// }
// out();

//rest 参数（形式为...变量名）
//rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
let arr=[1,2,5,8,3,5];
for (const a of arr) {
    console.log(typeof(a));
    console.log(a);
}
let obj={
    a:5,
    b:5,
    c:8,
    d:8,
    e:8,
}
for (const a in obj) {
    console.log(a,obj[a])
}
// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值
// for in总是得到对象的key或数组、字符串的下标
// for of总是得到对象的value或数组、字符串的值

//箭头函数(没有自己的this对象)，内部的this就是定义时上层作用域中的this
var f = v => v;
// 等同于
var f = function (v) {
  return v;
};
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

