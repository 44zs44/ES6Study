//ES2020 增加了String.prototype.matchAll()方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。
const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
  console.log(typeof(match));

}
let a=[...string.matchAll(regex)]
console.log(a[0]);
console.log(string.match(/t(e)(st(\d?))/));