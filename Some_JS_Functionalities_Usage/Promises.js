// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

//////////////////////////////////////////////////////////////////////////////

// //for items of array

// const loopThroughUrls = (urls) => {
//     for (url of urls) {
//         console.log(url)
//     }
// }

// loopThroughUrls(urls);

/////////////////////////////////////////////////////////////////////////////

// // for await of
// const getData2 = async function () {
//     const arrayOfPromises = urls.map((url) => fetch(url));
//     for await(let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// }

//////////////////////////////////////////////////////////////////////////////

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });

//////////////////////////////////////////////////////////////////////////////

// urls.map(url => {
//     new Promise(() => {
//         return fetch(url).then(resp => resp.json())
//     }).then(results => {
//         console.log(results[0])
//     }).catch(console.log('error'))
// })

//////////////////////////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   if (resolve) {
//     resolve("Stuff worked");
//   } else {
//     reject("Error, it broke");
//   }
// });

// promise
//   .then((result) => result + "!")
//   .then((result2) => result2 + "?")
//   .then((result3) => {
//     console.log(result3 + "!");
//     throw "reject";
//   })
//   .catch((error) => console.log(error));

///////////////////////////////////////////////////////////////////////////////////////////////////

// // Job Queue/ MicroTask Queue higher priority than Callback queue/ Task Queue
// setTimeout(() => console.log("first log"), 10);
// setTimeout(() => console.log("Second log"), 0);

// Promise.resolve("hi").then((data) => console.log(`${data} third log`));

// console.log("Check in which sequence event loop checks the queues");

//////////////////////////////////////////////////////////////////////////////////////////////

// // Async Functions + Parallel, Sequence and Race
// const promis = (item, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(item), delay);
//   });
// };
// const a = () => promis("data1", 1000);
// const b = () => promis("data2", 300);
// const c = () => promis("data3", 2000);

// const Parallel = async () => {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `Parallel is done ${output1}, ${output2}, ${output3}`;
// };

// const Sequential = async () => {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `Sequential is done ${output1}, ${output2}, ${output3}`;
// };

// async function Race() {
//   const promises = [a(), b(), c()];
//   const resp = await Promise.race(promises);
//   return `Race is done ${resp}`;
// }

// Sequential().then(console.log);
// Race().then(console.log);
// Parallel().then(console.log);

////////////////////////////////////////////////////////////////////////////

// // All Settled
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("hi1"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("hi2"), 1000);
// });

// Promise.all([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((er) => console.log("oops rejected", er))
//   .finally(() =>
//     console.log("must be executed. Can do extra stuff whatever the result is")
//   );

// Promise.allSettled([promise1, promise2])
//   .then((data) => {
//     for (d of data) {
//       if (d.status === "fulfilled") {
//         console.log(d.value);
//       } else if (d.status === "rejected") {
//         console.log("oops reject", d.reason);
//       }
//     }
//   })
//     .catch((er) => console.log("oops rejected", er))
//   .finally(() =>
//     console.log("must execute. Can do extra stuff whatever the result is")
//   );
