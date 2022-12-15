const TIME_OUT = 500;
function encrypt (data) {
    return `encrypted ${data}`;
}

function send (url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sent ${encryptedData} to ${url}`);
}

module.exports = {
    // send: send,
    send, // as exporting same name
    TIME_OUT,
}

//different methods of exporting

// modeule.exports.send = function send (url, data) {
//     const encryptedData = encrypt(data);
//     console.log(`Sent ${encryptedData} to ${url}`);
// }

// module.exports.TIME_OUT = 500;

// //OR

// exports.send = function send (url, data) {
//     const encryptedData = encrypt(data);
//     console.log(`Sent ${encryptedData} to ${url}`);
// }
// exports.TIME_OUT = 500;