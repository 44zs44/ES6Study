const SCHOOl="shangguigu"
// 1.一定要赋值
// 2.一般要大写（潜规则）,当然大写也不报错,但是一般要和let区分开是用大写·
// 3.常量的值不可修改
// 4.块级作用域
// 5.对数组和对象的元素修改，不算是对常量进行修改
const TEAM=["woziana","sdf","sffsf","fsfs","sggs"];
console.log(TEAM);

// TEAM.reverse();
// console.log(TEAM);

// TEAM1=TEAM.slice(-2,-1);//返回倒数第二个元素
TEAM1=TEAM.slice(-1);//返回最后一个元素
console.log(TEAM1);

TEAM.push('gffgd');
console.log(TEAM);