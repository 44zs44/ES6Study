// 扩展运算符
function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
//运用...将数组转化为参数序列
console.log(add(...numbers));
// 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。

// 下面是扩展运算符取代apply()方法的一个实际的例子，应用Math.max()方法，简化求出一个数组最大元素的写法。
console.log(Math.max(...[14, 3, 77]));

const a1 = [1, 2];
const a2 = a1;
a2[0] = 2;
console.log(a1);
//这里的a2是对a1的引用，相当于指向另外一份数据的指针，并不是克隆
const a3 = [...a1];
console.log(a3);
a3[1] = 0;
console.log(a3);

//合并数组
const arr1 = ["a", "b"];
const arr2 = ["c"];
const arr3 = ["d", "e"];
const arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);

//对于没有接口的对象，...运算符不能够将其转化为数组
// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
//   };

//   // TypeError: Cannot spread non-iterable object.
//   let arr6 = [...arrayLike];
//   console.log(arr6)

let n = {
  name: "zhangshuang",
  age: 18,
  address: "武汉",
};
console.log([...Object.entries(n)]);

/* Array.from() */
// Array.from()还可以接受一个函数作为第二个参数，作用类似于数组的map()方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
Array.from([1, 2, 3], (x) => x * x);
// [1, 4, 9]

/* Array.of()*/
//Array.of()方法用于将一组值，转换为数组。
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
// Array.of(3).length // 1


// 实例方法：fill()
console.log(['', '', ''].fill(7));
// [7, 7, 7]

console.log(new Array(3).fill(7));

// [7, 7, 7]
// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']



// 实例方法：entries()，keys() 和 values()
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"



// 实例方法：includes()
// 表示某个数组是否包含给定的值
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN) // true

