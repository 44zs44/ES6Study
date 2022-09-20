//声明格式
let a;
let b, cd;
let e = 100;
let f = "djhfgfhjkhg";
let g = 10,
  u = "hfhjk",
  t = ["", { name: "hfhsd", age: 18, address: "武汉工程大学" }, 45];
/* 声明特性 */

/*   1.声明不可重复 */
// let star='罗志祥'
let star='小猪佩奇'

/*   2.块级作用域 */
// {
//代码只在{}里面有效，{}以外就无效
// }
// {
//   let zs = "张双";
// }
// console.log(zs); //报错 zs is not defined

// /* 3.不存在变量提升 */
// console.log(school);
// let school = "武汉工程大学"; //Cannot access 'school' before initialization

/* 4.不影响作用域链的效果 */
// {
//     let school="wuahn";
//     function fun() {
//         console.log(school);
//     }
//     fun();
// }
// for (let index = 0; index < 6; index++) {
//   console.log(index)
  
// }
// console.log(index)