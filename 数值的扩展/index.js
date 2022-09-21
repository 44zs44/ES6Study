//二进制和八进制的写法
const a=0B111110111;
console.log(a===503)//判断是否相等
let b=0O767;
console.log(b)
const c=0x15;
console.log(c);

//数值分隔符
let d=1_564_156_156_416_516;
console.log(d);
let e=0.000_000_05;
console.log(e);

//ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面
console.log(Number.parseInt(515.15));//转化为整数
console.log(Number.parseFloat(515.155616156156515161561616556));//转化为浮点型，一般是小数点后10位


