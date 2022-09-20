let str = `我也是一个字符串`;
console.log(str, typeof str);
//``ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
let z = "\u{007B}";
let v = "\u{007C}";
let m = "\u{6211}";
console.log(z, v, m);

//ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
let h = "dsfdf";
for (let i of h) {
  console.log(i);
}
let arr = ["我", "是", "张", "双"];
console.log(typeof arr);
//
let myJSON = JSON.stringify(arr);
console.log(typeof myJSON);
console.log(myJSON);

let myJSON1 = JSON.parse(myJSON);
console.log(typeof myJSON1);
console.log(myJSON1);
console.log(myJSON1[1]);

//判断是否为数组
if (Array.isArray(myJSON1)) {
  console.log("是一个数组");
}

//封装一个函数判断是否为数组
function isArrayFn(value) {
    //判断是否为非数组
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    //判断是否为数组
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}
console.log(isArrayFn(myJSON1))
