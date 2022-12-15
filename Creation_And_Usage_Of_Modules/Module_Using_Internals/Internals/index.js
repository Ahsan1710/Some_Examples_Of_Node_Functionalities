//first method
// module.exports = {
//     request: require("./request"),
//     response: require("./response")
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
//second method
// const request = require("./request");
// const response = require("./response");

// module.exports = {
//     send: request.send,
//     TIME_OUT: request.TIME_OUT,
//     read: response.read
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
//third method
module.exports = {
        ...require("./request"),
        ...require("./response")
}