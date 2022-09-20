//ES6允许按照一定的模式从数组对象中提取值，对变量进行赋值
//这被称之为解构赋值

//1.数组的结构
const f4 = ["张", "力", "供应供应", "飞得更高"];
let [xiao, sf, gsg, akla] = f4;
console.log(xiao, sf, gsg);

//2.对象的结构
const zhao = {
  name: "我在哪",
  age: 12,
  xiaop: function () {
    console.log("我可以干饭");
  },
};
let { name, age, xiaop } = zhao;

