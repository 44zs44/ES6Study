//ES6 提供了新的数据结构 Set（集合）。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const s = new Set();

[2, 3, 4, 2, 2, 9, 7, 6, 5, 4, 2, 7, 8, 5, 3].forEach((x) => s.add(x));

for (let i of s) {
  console.log(i);
}

//Set方法有add(添加)，delete(删除)，clear(清除)，has(返回一个布尔值true或者false)查到是否存在这个值

// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员
let set = new Set([1,2,5,55,2,99,56,6]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
//Set对象的value和key好像是一样的？？？

// Map：JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构）=》（映射）
// 结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
// 如果用Map实现，只需要一个“名字”-“成绩”的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。用JavaScript写一个Map如下：
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95



