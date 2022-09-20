//ES6允许按照一定的模式从数组对象中提取值，对变量进行赋值
//这被称之为解构赋值

//1.数组的结构
// const f4 = ["张", "力", "供应供应", "飞得更高"];
// let [xiao, sf, gsg, akla] = f4;
// console.log(xiao, sf, gsg);

// //2.对象的结构
// const zhao = {
//   name: "我在哪",
//   age: 12,
//   xiaop: function () {
//     console.log("我可以干饭");
//   },
// };
// let { name, age, xiaop } = zhao;
// console.log(age)

//等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
// let [age,address]=[18,"武汉工程大学","ghf"];
// console.log(address);
// console.log(age);

// let [a,b,c,d]=[18,15,616];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);//没有与之匹配的，返回undefined

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// let {bar:dhashhd,foo}={foo:'sdfsd',bar:'aaa'};
// console.log(dhashhd,foo)

//字符串的解构赋值
// let {length:len}="hello";
// console.log(len);

//应用
// 1.交换变量的值
let x = 12;
let y = 13;
[x, y] = [y, x];
console.log("交换变量后,变量x的值为" + x + ",变量y的值为" + y);

// 2.返回多个数据
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a, b, c);
// 返回一个对象

function example1() {
  return {
    foo: 1,
    bar: 2,
  };
}
let { foo, bar } = example1();
console.log(foo, bar);

// 解构赋值可以方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f([x, y, z]) {}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({ x, y, z }) {}
f({ z: 3, y: 2, x: 1 });

// 提取 JSON 数据
let jsonData = {
  id: 42,
  statu: "OK",
  data: [867, 5309],
};

let { id, statu, data: number } = jsonData;

console.log(id, statu, number);
// 42, "OK", [867, 5309]

// 遍历 Map 结构
// 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
const map = new Map();
map.set("first", "hello");//map对象的添加方法
map.set("second", "world");
map.set("third", "张525双");
console.log(map);

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
console.log(map.has("first"));
map.delete("third");
console.log(map.has("third"));
console.log(map.size);
console.log(map.entries());
console.log([...map.entries()]);
console.log(typeof(map.entries()));
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
