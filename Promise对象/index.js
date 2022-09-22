// 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// const promise = new Promise(function(resolve, reject) {
//     // ... some code
  
//     if (1/* 异步操作成功 */){
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });

// Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
// const p = Promise.all([p1, p2, p3]);
// p的状态由p1、p2、p3决定，分成两种情况。
// （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

// Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
// const p = Promise.race([p1, p2, p3]);
// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。


// 加载图片
// const preloadImage = function (path) {
//     return new Promise(function (resolve, reject) {
//       const image = new Image();
//       image.onload  = resolve;
//       image.onerror = reject;
//       image.src = path;
//     });
//   };











