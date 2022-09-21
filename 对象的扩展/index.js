let foo = { ...["a", "b", "c"] };
console.log(foo);
console.log(Array.isArray(foo));
// {0: "a", 1: "b", 2: "c"}

//Object.assign()用于对象的合并
let target = { a: 1 };
let m = { b: 2 };
let n = { c: 3 };
console.log(Object.assign(target, m, n));
console.log(typeof Object.assign(target, m, n));
console.log(Array.isArray(Object.assign(target, m, n)));
//对数组进行合并
let mx = [1, 2, 3, 9, 8, 6, 5, 34],
  nx = [3, 5, 6, 47];
console.log(mx, nx);
//Object.assign()方法把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。
console.log(Object.assign([1, 2, 3, 9, 8, 6, 5, 34], [3, 5, 6, 47]));
console.log(Object.assign(mx, nx));
console.log(mx, nx);
console.log(Object.assign([1, 2, 3], [4, 5]));

