// const http = require("https"); // http and https both are different modules, use as per your need

// const req = http.request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`This is the response: ${chunk}`)
//     })
//     res.on('end', () => {
//         console.log('request is ended')
//     })
// });

// req.end();
/////////////////////////////////////////////////////////////////////////////////////////////////////
// // use Ecma Script destructuring if you know exactly what you want instead of importing whole code
// const { request } = require("https");
// const req = request("https://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`This is the response: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("request is ended");
//   });
// });

// req.end();
/////////////////////////////////////////////////////////////////////////////////////////////////////
// // use get if you want only to get data without sending any parameters
// // you don't need to end it separately like "Request"
// const { get } = require("https");
// get("https://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`This is the response: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("request is ended");
//   });
// });
